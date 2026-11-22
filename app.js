/* WRITING KEYS — app logic. No build step. Data: data/*.js. Storage: Class Portfolio (Cloudflare) or this device. */
(function () {
  'use strict';
  var WK = window.WK, CFG = window.WK_CONFIG || {};
  var BASE = (CFG.portfolioUrl || '').replace(/\/$/, '');
  var SKEY = 'cp_sdk_session', IDLE = 20 * 60000, PTITLE = 'Writing Keys Passport', PAPP = 'Writing Keys';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var hl = function (s) { return esc(s).replace(/«(.*?)»/g, '<mark>$1</mark>').replace(/\n/g, '<br>'); };
  var today = function () { return new Date().toISOString().slice(0, 10); };
  var fmt = function (d) { try { return new Date(d + 'T12:00:00').toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' }); } catch (e) { return d; } };
  var uid = function () { return Math.random().toString(36).slice(2, 10); };

  // ---------- data helpers ----------
  var EL = {}; WK.elements.forEach(function (e) { EL[e.id] = e; });
  var KEYS = {}; WK.keys.forEach(function (k, i) { k._i = i; KEYS[k.id] = k; });
  var KLIST = WK.keys.slice().sort(function (a, b) { return a.r - b.r || a._i - b._i; });
  function keysOf(el) { return KLIST.filter(function (k) { return k.el === el; }); }
  var TOTAL = KLIST.length, NEED = WK.evidenceNeeded;
  function tierOf(pp, k) { return WK.tier[pp && pp.year === 6 ? 6 : 5](k.r); }
  function cnt(pp, id) { var k = pp.keys[id]; return k ? Math.min(NEED, (k.pre || 0) + (k.ev || []).length) : 0; }
  function done(pp, id) { return cnt(pp, id) >= NEED; }
  function nDone(pp) { return KLIST.filter(function (k) { return done(pp, k.id); }).length; }
  function unconfirmed(pp) { var out = []; KLIST.forEach(function (k) { ((pp.keys[k.id] || {}).ev || []).forEach(function (e, i) { if (!e.ok) out.push({ key: k.id, i: i, e: e }); }); }); return out; }
  function newPP(name, year) { return { v: 1, name: name || '', year: year || null, created: today(), test: null, keys: {}, focus: [], pieces: [], support: false }; }
  function startKey(pp, elId) {
    var ks = keysOf(elId), sc = pp.test && pp.test.scores && pp.test.scores[elId];
    if (sc) { var next = ks.filter(function (k) { return k.r > sc && !done(pp, k.id); }); return next[0] || null; }
    return ks.filter(function (k) { return !k.cu && !done(pp, k.id) && tierOf(pp, k) !== 'star'; })[0] || null;
  }
  function addEvidence(pp, id, title, src, note) {
    var o = pp.keys[id] = pp.keys[id] || { ev: [] }; o.ev = o.ev || [];
    o.ev.push({ d: today(), t: title || 'My writing', n: note || '', src: src || 'student', ok: src === 'teacher' });
  }
  function applyPlacement(pp, scores, date) {
    pp.test = { date: date || today(), scores: scores, src: 'e-asTTle' };
    KLIST.forEach(function (k) { var sc = scores[k.el]; if (!sc) return; var o = pp.keys[k.id] = pp.keys[k.id] || { ev: [] }; o.pre = k.r < sc ? NEED : k.r === sc ? 3 : 0; });
  }
  function resultOf(pp) {
    var d = nDone(pp);
    return { type: 'result', app: PAPP, title: PTITLE, score: d, total: TOTAL, percent: Math.round(d / TOTAL * 100), date: new Date().toISOString(),
      details: KLIST.map(function (k) { var c = cnt(pp, k.id); return { q: k.id + ' ' + k.name + ' (' + EL[k.el].name + ')', answer: c + '/' + NEED + ((pp.keys[k.id] || {}).pre ? ' (from test)' : ''), correct: c >= NEED }; }),
      wk: pp };
  }
  var strip = function (k, v) { return k[0] === '_' ? undefined : v; };

  // ---------- session + api ----------
  function getSess() { try { var s = JSON.parse(localStorage.getItem(SKEY) || 'null'); if (s && s.role === 'student' && Date.now() - (s.last || 0) > IDLE) { localStorage.removeItem(SKEY); return null; } return s; } catch (e) { return null; } }
  function setSess(s) { try { if (s) { s.last = Date.now(); localStorage.setItem(SKEY, JSON.stringify(s)); } else localStorage.removeItem(SKEY); } catch (e) {} }
  function touch() { var s = getSess(); if (s) setSess(s); }
  function api(path, o) {
    o = o || {}; var s = getSess(), h = {}; if (s) h.Authorization = 'Bearer ' + s.token;
    var body; if (o.json) { h['Content-Type'] = 'application/json'; body = JSON.stringify(o.json); }
    return fetch(BASE + '/api/' + path, { method: o.method || 'GET', headers: h, body: body }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok) { var e = new Error(d.error || 'Something went wrong'); e.status = r.status; if (r.status === 401) setSess(null); throw e; } return d; });
    }, function () { throw new Error("Can't reach the portfolio. Check the internet."); });
  }
  function pickPassport(items) {
    var its = (items || []).filter(function (i) { return i.app === PAPP && i.title === PTITLE; }).sort(function (a, b) { return b.createdAt - a.createdAt; });
    if (!its.length) return Promise.resolve(null);
    return fetch(BASE + its[0].url).then(function (r) { return r.json(); }).then(function (d) { var pp = d.wk; if (!pp || !pp.keys) return null; pp._itemId = its[0].id; pp._dupes = its.slice(1).map(function (i) { return i.id; }); return pp; });
  }
  function uploadPP(pp, sid) {
    var s = getSess(); if (!s) return Promise.reject(new Error('Please sign in'));
    var d = nDone(pp);
    var q = ['subject=Writing', 'title=' + encodeURIComponent(PTITLE), 'app=' + encodeURIComponent(PAPP), 'kind=result', 'meta=' + encodeURIComponent(JSON.stringify({ score: d, total: TOTAL }))];
    if (sid && s.role === 'teacher') q.push('student=' + encodeURIComponent(sid));
    var old = [pp._itemId].concat(pp._dupes || []).filter(Boolean);
    return fetch(BASE + '/api/upload?' + q.join('&'), { method: 'POST', headers: { Authorization: 'Bearer ' + s.token, 'Content-Type': 'application/json' }, body: JSON.stringify(resultOf(pp), strip) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) { var e = new Error(j.error || 'Upload failed'); e.status = r.status; if (r.status === 401) setSess(null); throw e; } return j; }); })
      .then(function (j) { pp._itemId = j.item && j.item.id; pp._dupes = []; old.forEach(function (id) { api('items/' + id, { method: 'DELETE' }).catch(function () {}); }); touch(); });
  }

  // ---------- local (this device) backend ----------
  function lget() { try { return JSON.parse(localStorage.getItem('wk_local') || 'null') || { students: [] }; } catch (e) { return { students: [] }; } }
  function lset(d) { try { localStorage.setItem('wk_local', JSON.stringify(d, strip)); } catch (e) {} }
  function seedDemo() {
    var names = ['Aroha T', 'Liam W', 'Mia K', 'Noah B', 'Ella R', 'Jack H', 'Sophie L', 'Tane M'], scoresets = [[4, 4, 4, 4, 4, 4, 4], [3, 3, 3, 3, 3, 3, 3], [5, 4, 5, 4, 4, 4, 5], [2, 3, 3, 3, 2, 3, 3], [4, 4, 3, 5, 4, 3, 4], [3, 3, 4, 3, 3, 4, 3], [5, 5, 5, 5, 4, 5, 5], [3, 2, 3, 3, 3, 2, 3]];
    var els = WK.elements.map(function (e) { return e.id; }), d = lget(), n = 0;
    names.forEach(function (nm, i) {
      var pp = newPP(nm, i % 2 ? 6 : 5), sc = {}; els.forEach(function (e, j) { sc[e] = scoresets[i][j]; });
      applyPlacement(pp, sc, '2026-11-20'); var s = startKey(pp, 'sentence');
      if (s) { for (var t = 0; t < (i % 4) + 1; t++) addEvidence(pp, s.id, 'Recount ' + (t + 1), t < 2 ? 'teacher' : 'student'); pp.focus = [s.id]; }
      var s2 = startKey(pp, 'ideas'); if (s2) { addEvidence(pp, s2.id, 'Camp story', 'student'); pp.focus.push(s2.id); }
      if (i === 1 || i === 7) pp.support = true;
      pp.pieces.push({ id: uid(), d: today(), title: 'Camp recount', type: 'Recount', focus: pp.focus.slice(), used: pp.focus.slice(), kept: [], missed: [] });
      d.students.push({ id: 'demo' + i, name: nm, year: pp.year, pp: pp }); n++;
    });
    lset(d); return n;
  }

  // ---------- state ----------
  var S = { kind: null, sess: null, pp: null, sid: null, name: '', students: [], route: '#/', sync: '', teacherTab: 'class', tFilter: '' };
  var saveT = null;
  function syncSet(t, c) { S.sync = t; var el = $('#syncchip'); if (el) { el.textContent = t; el.className = 'sync ' + (c || ''); } }
  function queueSave(sid) {
    sid = sid || S.sid; if (!S.pp) return;
    var pp = S.pp; if (S.kind === 'local') { var d = lget(), st = d.students.filter(function (x) { return x.id === sid; })[0]; if (st) { st.pp = pp; st.year = pp.year; } lset(d); syncSet('Saved on this device', 'ok'); return; }
    try { localStorage.setItem('wk_cache_' + sid, JSON.stringify(pp, strip)); } catch (e) {}
    syncSet('Saving…', ''); clearTimeout(saveT);
    saveT = setTimeout(function () {
      uploadPP(pp, sid).then(function () { syncSet('Saved to portfolio ✓', 'ok'); }, function (e) { syncSet(e.status === 401 ? 'Signed out. Sign in to save' : 'Not saved yet (will retry)', 'err'); });
    }, 1200);
  }
  function toast(t) { var d = document.createElement('div'); d.className = 'toast'; d.textContent = t; if (t.indexOf('\uD83D\uDD11') === 0) { d.textContent = t.replace(/^\uD83D\uDD11\s*/, ''); var im = new Image(); im.src = 'assets/art/badge-key-unlocked.png'; im.className = 'tbadge'; im.onerror = function () { im.remove(); }; d.insertBefore(im, d.firstChild); } document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2600); }
  function go(h) { if (location.hash === h) render(); else location.hash = h; }

  // ---------- boot ----------
  function boot() {
    if (BASE) { var sc = document.createElement('script'); sc.src = BASE + '/sdk.js'; sc.defer = true; sc.dataset.subject = 'Writing'; sc.dataset.app = 'Writing Keys'; sc.dataset.button = 'off'; sc.onerror = function () {}; document.body.appendChild(sc); }
    window.addEventListener('hashchange', render); document.addEventListener('click', onClick); document.addEventListener('input', onInput); document.addEventListener('change', onInput);
    var ls = null; try { ls = localStorage.getItem('wk_mode'); } catch (e) {}
    var s = getSess();
    var chain = Promise.resolve();
    if (s && s.role === 'student') chain = studentLoad(s); else if (s && s.role === 'teacher') chain = teacherLoad(); else if (ls === 'local') chain = Promise.resolve(enterLocal());
    chain.then(function () { if (!location.hash || location.hash === '#/') location.hash = S.kind ? (S.kind === 'student' || (S.kind === 'local' && S.sid) ? '#/home' : '#/teacher') : '#/'; render(); }, function () { render(); });
  }
  function studentLoad(s) {
    S.kind = 'student'; S.sid = s.sid; S.name = s.name;
    return api('my').then(function (d) { return pickPassport(d.items).then(function (pp) { S.year = d.student && d.student.year; return pp; }); }).catch(function (e) { if (e.status === 401) throw e; return null; }).then(function (pp) {
      if (!pp) { try { pp = JSON.parse(localStorage.getItem('wk_cache_' + s.sid) || 'null'); } catch (e) { pp = null; } }
      S.pp = pp || newPP(s.name, S.year === 5 || S.year === 6 ? S.year : null); S.pp.name = s.name; if (!S.pp.year && (S.year === 5 || S.year === 6)) S.pp.year = S.year; syncSet('Ready', 'ok');
    });
  }
  function teacherLoad() {
    S.kind = 'teacher'; S.name = 'Teacher';
    return api('students').then(function (d) { S.students = (d.students || []).map(function (x) { return { id: x.id, name: x.name, year: x.year, code: x.code, pp: null }; }); return loadAll(); });
  }
  function loadAll() {
    var q = S.students.slice(), n = 0;
    function worker() { var st = q.shift(); if (!st) return Promise.resolve(); return api('students/' + st.id + '/items').then(function (d) { return pickPassport(d.items); }).catch(function () { return null; }).then(function (pp) { st.pp = pp || newPP(st.name, st.year === 6 ? 6 : st.year === 5 ? 5 : null); st.pp.name = st.name; if (!st.pp.year && (st.year === 5 || st.year === 6)) st.pp.year = st.year; n++; return worker(); }); }
    return Promise.all([worker(), worker(), worker(), worker()]);
  }
  function enterLocal() { S.kind = 'local'; S.sid = null; try { localStorage.setItem('wk_mode', 'local'); } catch (e) {} var d = lget(); S.students = d.students.map(function (x) { x.pp.name = x.name; return { id: x.id, name: x.name, year: x.year, pp: x.pp }; }); }
  function signOut() { setSess(null); try { localStorage.removeItem('wk_mode'); } catch (e) {} S.kind = null; S.pp = null; S.sid = null; S.students = []; location.hash = '#/'; render(); }

  // ---------- render ----------
  function render() {
    var h = location.hash || '#/', app = $('#app'); S.route = h;
    if (!S.kind) { app.innerHTML = shell(viewLogin(), true); wireLogin(); return; }
    var m, v;
    var teacherish = S.kind === 'teacher' || (S.kind === 'local' && !S.sid);
    if (S.kind === 'local' && S.sid && /^#\/teacher/.test(h)) { S.sid = null; S.pp = null; teacherish = true; }
    if (teacherish && !/^#\/(teacher|books|test)/.test(h)) { location.hash = '#/teacher'; return; }
    if (teacherish) {
      if ((m = h.match(/^#\/teacher\/student\/(.+)$/))) v = viewStudentDetail(decodeURIComponent(m[1].split('?')[0]));
      else if (/^#\/books/.test(h)) v = viewBooks(); else if (/^#\/test/.test(h)) v = viewTest(); else v = viewTeacher();
    } else {
      if (S.kind === 'local' && S.sid && !S.pp) { var stl = S.students.filter(function (x) { return x.id === S.sid; })[0]; S.pp = stl ? stl.pp : newPP('', null); }
      if (!S.pp.year) { app.innerHTML = shell(viewYear(), false); return; }
      if ((m = h.match(/^#\/key\/(\w+)$/))) v = viewKey(m[1], S.pp, false); else if (/^#\/write/.test(h)) v = viewWrite(); else if (/^#\/passport/.test(h)) v = viewPassport(S.pp, false); else if (/^#\/books/.test(h)) v = viewBooks(); else if (/^#\/test/.test(h)) v = viewTest(); else v = viewHome();
    }
    app.innerHTML = shell(v, false); window.scrollTo(0, 0);
  }
  function logo() { return '<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="52" rx="46" ry="16" fill="none" stroke="#ED2161" stroke-width="5" transform="rotate(-24 50 52)"/><path d="M50 4 C55 36 64 45 96 50 C64 55 55 64 50 96 C45 64 36 55 4 50 C36 45 45 36 50 4Z" fill="#ED2161"/></svg>'; }
  function shell(inner, login) {
    if (login) return inner;
    var teacherish = S.kind === 'teacher' || (S.kind === 'local' && !S.sid), r = S.route;
    var nav = teacherish ? [['#/teacher', 'Class'], ['#/books', 'Booklets'], ['#/test', 'Test Day']] : [['#/home', 'My Keys'], ['#/write', 'Write'], ['#/passport', 'Passport'], ['#/books', 'Booklets'], ['#/test', 'Test Day']];
    var navh = nav.map(function (n) { return '<a href="' + n[0] + '" class="' + (r.indexOf(n[0]) === 0 ? 'on' : '') + '">' + n[1] + '</a>'; }).join('');
    var who = S.kind === 'student' || (S.kind === 'local' && S.sid) ? esc((S.pp && S.pp.name) || S.name) + ' · Year ' + (S.pp && S.pp.year || '?') : S.kind === 'teacher' ? 'Teacher' : 'Teacher (this device)';
    return '<div class="top noprint"><a class="brand" href="#/">' + logo() + 'Writing Keys</a><div class="nav">' + navh + '</div></div>' +
      '<div class="row noprint small" style="justify-content:space-between;margin-bottom:8px"><div class="who">' + who + ' <span id="syncchip" class="sync ' + (S.kind === 'local' ? 'ok' : '') + '">' + esc(S.kind === 'local' ? 'Saved on this device' : S.sync) + '</span></div><div class="row">' + (S.kind === 'local' && S.sid ? '<button class="btn sm alt" data-act="backlist">Switch student</button>' : '') + '<button class="btn sm alt" data-act="signout">' + (S.kind === 'teacher' || (S.kind === 'local' && !S.sid) ? 'Sign out' : 'That\'s me done') + '</button></div></div>' + inner;
  }

  // ---------- login ----------
  function sparkle(size) { return '<svg class="sparkle" width="' + (size || 220) + '" viewBox="0 0 220 220" aria-hidden="true"><ellipse cx="110" cy="116" rx="104" ry="34" fill="none" stroke="#ED2161" stroke-width="9" transform="rotate(-24 110 116)"/><path d="M110 8 C121 82 140 100 212 110 C140 120 121 138 110 212 C99 138 80 120 8 110 C80 100 99 82 110 8Z" fill="#ED2161"/></svg>'; }
  function artImg(name, cls, alt) { return '<img class="' + cls + '" src="assets/art/' + name + '.png" alt="' + esc(alt || '') + '" onerror="this.remove()">'; }
  function viewLogin() {
    return '<div class="hero"><span class="sticker">Level up!</span><h1><span>Writing</span><span>Keys</span></h1>' +
      '<div class="chips"><span class="chip hex"><i class="dot" style="background:#ED2161"></i><span style="text-align:left"><b>' + TOTAL + ' keys</b>to collect</span></span><span class="chip hex"><i class="dot" style="border:5px solid #ED2161"></i><span style="text-align:left"><b>7 skills</b>to master</span></span></div>' +
      artImg('hero', 'heroimg', 'Writing Keys') + '<div class="art" style="margin:0 auto;width:min(260px,60%)">' + sparkle(260) + '</div></div>' +
      '<div class="grid2" style="max-width:820px;margin:20px auto"><div class="card"><h3>I\'m a student</h3><p class="muted small">Type your 6-character code from your card.</p><div class="field"><input type="text" id="code" class="codeinput" maxlength="8" autocomplete="off" placeholder="ABC-123"></div><button class="btn" data-act="studentgo" style="width:100%">Let\'s go</button><p id="lerr" class="small" style="color:var(--warn)"></p></div>' +
      '<div class="card"><h3>Teacher</h3><p class="muted small">Sign in with your portfolio password to see the whole class.</p><div class="field"><input id="tpw" type="password" placeholder="Password" autocomplete="current-password"></div><button class="btn alt" data-act="teachergo" style="width:100%">Sign in</button><p class="small muted" style="margin-top:10px">No portfolio yet? <a href="#" data-act="local" style="color:var(--pink);font-weight:700">Use on this device only</a></p></div></div>';
  }
  function wireLogin() { var c = $('#code'); if (c) c.addEventListener('keydown', function (e) { if (e.key === 'Enter') act('studentgo'); }); var t = $('#tpw'); if (t) t.addEventListener('keydown', function (e) { if (e.key === 'Enter') act('teachergo'); }); }
  function lerr(t) { var e = $('#lerr'); if (e) e.textContent = t; else toast(t); }
  function viewYear() {
    return '<div class="card" style="max-width:560px;margin:40px auto;text-align:center"><h2>Which year are you in?</h2><p class="muted">This picks the right booklet and goals for you.</p><div class="row" style="justify-content:center;margin-top:16px"><button class="btn" data-act="year" data-y="5">Year 5</button><button class="btn" data-act="year" data-y="6">Year 6</button></div></div>';
  }

  // ---------- tiles ----------
  function tile(pp, k, href, extra) {
    var c = cnt(pp, k.id), isDone = c >= NEED, e = EL[k.el], t = tierOf(pp, k), st = startKey(pp, k.el), isStart = st && st.id === k.id && !isDone && c === 0, pre = (pp.keys[k.id] || {}).pre;
    var cls = 'tile' + (k.cu ? ' cu' : '') + (isDone ? ' done' : '') + (isStart ? ' start' : '') + (pp.focus.indexOf(k.id) > -1 ? ' focus' : '') + ' tier-' + t;
    var pips = ''; for (var i = 0; i < NEED; i++) pips += '<i class="' + (i < c ? 'on' : '') + '"></i>';
    var badge = isDone ? (pre >= NEED && !(pp.keys[k.id].ev || []).length ? '★ Test' : '★ Got it') : isStart ? 'START HERE' : pp.focus.indexOf(k.id) > -1 ? 'FOCUS' : t === 'star' ? 'Super star' : '';
    return '<a class="' + cls + '" style="--c:' + e.color + ';--fill:' + (c / NEED * 100) + '%" href="' + href + '" ' + (extra || '') + '><span class="badge" ' + (badge ? '' : 'hidden') + '>' + badge + '</span><div><div class="code">' + k.id + '</div><div class="nm">' + esc(k.name) + '</div></div><div class="pips">' + pips + '</div></a>';
  }
  function grid(pp, hrefOf, extraOf) {
    return WK.elements.map(function (e) {
      var ks = keysOf(e.id), d = ks.filter(function (k) { return done(pp, k.id); }).length, sc = pp.test && pp.test.scores && pp.test.scores[e.id];
      return '<section class="el"><div class="elhead"><div class="ic"><img src="assets/art/icon-' + e.id + '.png" alt="" onerror="this.replaceWith(document.createTextNode(\'' + e.icon + '\'))"></div><div><h3 style="color:' + e.color + '">' + e.name + ' <span class="muted" style="font-size:15px">· ' + d + '/' + ks.length + '</span></h3><small>' + e.nick + ' · ' + esc(e.blurb) + (sc ? ' · Test: R' + sc + '/' + e.max : '') + '</small></div>' + (d === ks.length && ks.length ? '<img class="mastered" src="assets/art/badge-skill-master.png" alt="Skill master" title="Skill master!" onerror="this.remove()">' : '') + '</div><div class="tiles">' +
        ks.map(function (k) { return tile(pp, k, hrefOf(k), extraOf ? extraOf(k) : ''); }).join('') + '</div></section>';
    }).join('');
  }

  // ---------- student home ----------
  function viewHome() {
    var pp = S.pp, d = nDone(pp), ev = KLIST.reduce(function (a, k) { return a + cnt(pp, k.id); }, 0);
    var focus = pp.focus.map(function (id) { var k = KEYS[id], e = EL[k.el]; return '<a class="card" style="border-color:' + e.color + ';text-decoration:none;display:block" href="#/key/' + id + '"><span class="pill" style="background:' + e.color + ';color:#101409">' + id + '</span><b>' + esc(k.name) + '</b><div class="muted small">' + esc(k.hook) + '</div><div class="small" style="margin-top:6px">' + cnt(pp, id) + '/' + NEED + ' proofs</div></a>'; }).join('');
    var starts = WK.elements.map(function (e) { return startKey(pp, e.id); }).filter(function (k) { return k && cnt(pp, k.id) === 0; });
    return '<div class="card" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><div class="ring" style="--p:' + (d / TOTAL * 100) + '"><div><span>' + d + '<small>of ' + TOTAL + ' keys</small></span></div></div><div class="grow"><span class="sticker">Year ' + pp.year + '</span><h2 style="margin-top:10px">Kia ora, ' + esc((pp.name || '').split(' ')[0]) + '!</h2><div class="muted">You have ' + ev + ' proofs collected. ' + (pp.test ? 'Your e-asTTle starting points are marked <b style="color:#fff">START HERE</b>.' : 'Pick a key, learn it, and prove it 5 times.') + '</div></div><a class="btn" href="#/write">✍️ Start writing</a></div>' +
      '<div class="sp"></div><h3>My focus keys <span class="muted small" style="text-transform:none;font-family:var(--body)">(pick up to 2 on a key page)</span></h3><div class="grid2" style="margin-top:10px">' + (focus || '<div class="card muted">Tap a key below, read it, then press "Make this my focus".</div>') + '</div>' +
      (starts.length ? '<div class="sp"></div><h3>Start here</h3><div class="row" style="margin-top:10px">' + starts.map(function (k) { return '<a class="chip" style="background:' + EL[k.el].color + ';color:#101409;text-decoration:none" href="#/key/' + k.id + '">' + k.id + ' ' + esc(k.name) + '</a>'; }).join('') + '</div>' : '') +
      '<div class="sp"></div><div class="legend"><span>Colour in a key by proving it <b>5 times</b> in your writing</span><span>🟣 START HERE = your next step</span><span>┅ dashed = super star keys</span></div>' + grid(pp, function (k) { return '#/key/' + k.id; });
  }

  // ---------- key page ----------
  function cuExtra(k) {
    var o = '';
    if (k.frames && k.frames.length) o += '<div class="card sec"><h3>Sentence starters</h3><ul class="check">' + k.frames.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></div>';
    if (k.bank) o += '<div class="card sec"><h3>' + esc(k.bank.title) + '</h3><p>' + k.bank.words.map(function (w) { return '<span class="chip">' + esc(w) + '</span>'; }).join(' ') + '</p></div>';
    (k.warm || []).forEach(function (w) { o += '<div class="card sec"><h3>Warm-up: ' + esc(w.name) + '</h3><p class="muted">' + esc(w.how) + '</p><ol class="steps">' + w.items.map(function (x) { return '<li><span>' + esc(x) + '</span></li>'; }).join('') + '</ol></div>'; });
    (k.write || []).forEach(function (w) { o += '<div class="card sec"><h3>Write it: ' + esc(w.title) + '</h3><p>' + esc(w.task) + '</p>' + (w.frame && w.frame.length ? '<ul class="check">' + w.frame.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' : '') + '</div>'; });
    return o;
  }
  function viewKey(id, pp, teacher) {
    var k = KEYS[id]; if (!k) return '<div class="card">Key not found. <a href="#/home">Back</a></div>';
    var e = EL[k.el], c = cnt(pp, id), t = tierOf(pp, k), ev = (pp.keys[id] || {}).ev || [], pre = (pp.keys[id] || {}).pre || 0, yr = pp.year === 6 ? 6 : 5;
    var meter = ''; for (var i = 0; i < NEED; i++) { var x = i < pre ? { t: 'Test ★' } : ev[i - pre]; meter += '<div class="p ' + (i < c ? 'on' : '') + '">' + (i < c ? (x ? (x.t === 'Test ★' ? '★' : fmt(x.d)) : '✓') : (i + 1)) + '</div>'; }
    var evh = ev.map(function (x, i) { return '<div class="ev"><b>' + fmt(x.d) + '</b> ' + esc(x.t) + (x.n ? ' <span class="muted">· ' + esc(x.n) + '</span>' : '') + ' <span class="chip">' + (x.ok ? '✓ checked' : 'to check') + '</span>' + (!x.ok || teacher ? '<button class="btn sm alt" data-act="delev" data-k="' + id + '" data-i="' + i + '">Remove</button>' : '') + '</div>'; }).join('');
    var isFocus = pp.focus.indexOf(id) > -1;
    return '<div style="--c:' + e.color + '"><div class="row noprint" style="margin-bottom:10px"><a class="btn sm alt" href="' + (teacher ? '#/teacher/student/' + encodeURIComponent(S.sid2) : '#/home') + '">← All keys</a><a class="btn sm alt" href="booklet.html?book=' + (k.cu ? 'launch' : 'student') + '&year=' + yr + '&key=' + id + '" target="_blank">🖨 Print key card</a></div>' +
      '<div class="keyhead"><svg class="star" viewBox="0 0 100 100"><path d="M50 4 C55 36 64 45 96 50 C64 55 55 64 50 96 C45 64 36 55 4 50 C36 45 45 36 50 4Z" fill="#101409"/></svg><span class="pill">' + id + '</span><span class="pill" style="background:#fff;color:#101409">' + WK.tierLabel[t] + '</span><span class="pill" style="background:#fff;color:#101409">' + e.name + ' R' + k.r + '</span><h2>' + esc(k.name) + '</h2><div class="hook">' + esc(k.hook) + '</div></div>' +
      '<div class="card sec"><h3>What is it?</h3><p>' + esc(k.what) + '</p><div class="muted small"><b style="color:#fff">Why it boosts your e-asTTle score:</b> ' + esc(k.why) + '</div></div>' +
      '<div class="card sec"><h3>How to do it</h3><ol class="steps">' + k.steps.map(function (s) { return '<li><span>' + esc(s) + '</span></li>'; }).join('') + '</ol></div>' +
      '<div class="card sec"><h3>See it level up</h3><div class="ladder"><div class="a"><b>Not yet</b>' + hl(k.ex.before) + '</div><div class="b"><b>Got it</b>' + hl(k.ex.after) + '</div><div class="c"><b>Wow!</b>' + hl(k.ex.wow) + '</div></div></div>' +
      '<div class="card sec"><h3>I have got it when…</h3><ul class="check">' + k.check.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card sec"><h3>Activity: ' + esc(k.activity.name) + '</h3><ol class="steps">' + k.activity.steps.map(function (s) { return '<li><span>' + esc(s) + '</span></li>'; }).join('') + '</ol></div>' +
      '<div class="card sec"><h3>Writing prompts (Year ' + yr + ')</h3><ul class="check">' + k.prompts[yr].map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul><div class="muted small" style="margin-top:8px">NZ Curriculum (Years 4-6 English, writing), Year ' + yr + ': ' + esc(WK.nzc[k.el][yr]) + '</div></div>' +
      (k.cu ? cuExtra(k) : '') +
      '<div class="card sec"><h3>Prove it: 5 times</h3><div class="mark-how"><b>Show me in your writing:</b> ' + esc(WK.markHow).replace('SS2', id) + '<br><span class="muted small">Circle, arrow, comment: the circle shows the skill, the arrow points to where you used it, and the margin note says which key.</span></div><div class="meter">' + meter + '</div>' + evh +
      (c < NEED ? '<div class="row noprint" style="margin-top:12px"><div class="grow"><label>Which piece of writing?</label><input type="text" id="evt" placeholder="e.g. Camp recount"></div><div class="grow"><label>What did you show? (optional)</label><input type="text" id="evn" placeholder="e.g. 3 compound sentences"></div></div><div class="row noprint" style="margin-top:10px"><button class="btn" data-act="addev" data-k="' + id + '">＋ Add proof</button>' + (teacher ? '<button class="btn alt" data-act="addevt" data-k="' + id + '">＋ Add as teacher (checked)</button>' : '') + '</div>' : '<div class="card pink" style="margin-top:12px;color:#fff"><b>🔑 You unlocked this key!</b> Keep using it in every new piece.</div>') +
      '<div class="row noprint" style="margin-top:14px">' + (teacher ? '<button class="btn alt sm" data-act="prechg" data-k="' + id + '" data-d="1">+1 test credit</button><button class="btn alt sm" data-act="prechg" data-k="' + id + '" data-d="-1">−1 test credit</button>' : '<button class="btn ' + (isFocus ? 'alt' : '') + '" data-act="focus" data-k="' + id + '">' + (isFocus ? '✓ My focus key (tap to remove)' : '🎯 Make this my focus') + '</button>') + '</div></div></div>';
  }

  // ---------- write: piece checklist ----------
  var W = { title: '', type: 'Recount', practice: false, focus: null, ticks: {} };
  function viewWrite() {
    var pp = S.pp; if (!W.focus) W.focus = pp.focus.slice();
    var keep = KLIST.filter(function (k) { return done(pp, k.id); });
    var row = function (k, kind) { var e = EL[k.el]; return '<label class="tick ' + (W.ticks[k.id] ? 'on' : '') + '" style="--c:' + e.color + '"><input type="checkbox" data-w="' + k.id + '" ' + (W.ticks[k.id] ? 'checked' : '') + '><span><b>' + k.id + ' · ' + esc(k.name) + '</b><br><span class="muted small">' + esc(k.hook) + '</span></span></label>'; };
    var pick = KLIST.filter(function (k) { return !done(pp, k.id); }).map(function (k) { var e = EL[k.el], on = W.focus.indexOf(k.id) > -1; return '<label class="chip" style="cursor:pointer;background:' + (on ? e.color : 'var(--card2)') + ';color:' + (on ? '#101409' : '#fff') + '"><input type="checkbox" data-wf="' + k.id + '" ' + (on ? 'checked' : '') + ' hidden>' + k.id + ' ' + esc(k.name) + '</label>'; }).join(' ');
    return '<h2>Write a new piece</h2><p class="muted">Write your piece on paper or on your device. Then circle, arrow and comment each key. Tick it here when you have shown it.</p>' +
      '<div class="card"><div class="row"><div class="grow"><label>Title or prompt</label><input type="text" id="wt" value="' + esc(W.title) + '" placeholder="e.g. A day at camp"></div><div style="min-width:180px"><label>Type</label><select id="wty">' + ['Recount', 'Narrative', 'Explanation', 'Persuasion', 'Description', 'Other'].map(function (t) { return '<option ' + (t === W.type ? 'selected' : '') + '>' + t + '</option>'; }).join('') + '</select></div></div><label class="small" style="margin-top:10px"><input type="checkbox" id="wpr" ' + (W.practice ? 'checked' : '') + ' style="width:auto;min-height:auto"> This is an e-asTTle practice piece</label></div>' +
      '<div class="sp"></div><h3>1. My focus keys for this piece <span class="muted small" style="text-transform:none;font-family:var(--body)">(choose 1 to 3)</span></h3><div class="row" style="margin-top:10px;max-height:220px;overflow:auto">' + pick + '</div>' +
      '<div class="sp"></div><h3>2. Show my focus keys</h3>' + (W.focus.length ? W.focus.map(function (id) { return row(KEYS[id]); }).join('') : '<div class="card muted">Choose at least one focus key above.</div>') +
      '<div class="sp"></div><h3>3. Keep it up! <span class="muted small" style="text-transform:none;font-family:var(--body)">(keys you already own. Use them again)</span></h3>' + (keep.length ? keep.map(function (k) { return row(k); }).join('') : '<div class="card muted">Keys you unlock will appear here. They must keep showing up in your writing.</div>') +
      '<div class="sp"></div><div class="row"><button class="btn" data-act="savepiece">✅ Save this piece</button><button class="btn alt" data-act="sendwriting">📸 Send my writing to my portfolio</button></div>';
  }

  // ---------- passport ----------
  function viewPassport(pp) {
    var d = nDone(pp);
    return '<div class="row" style="justify-content:space-between"><div><h2>My Writing Passport</h2><div class="muted">Year ' + pp.year + ' · ' + d + ' of ' + TOTAL + ' keys coloured in' + (pp.test ? ' · e-asTTle ' + fmt(pp.test.date) : '') + '</div></div><div class="row noprint"><button class="btn" data-act="print">🖨 Print</button><button class="btn alt" data-act="sendwriting">📸 Send to portfolio</button></div></div><div class="sp"></div>' + grid(pp, function (k) { return '#/key/' + k.id; }) +
      '<div class="sp"></div><h3>My pieces</h3>' + ((pp.pieces || []).length ? '<div class="scroll"><table class="tbl"><tr><th>Date</th><th>Piece</th><th>Focus keys</th><th>Keys shown</th></tr>' + pp.pieces.slice(0, 15).map(function (p) { return '<tr><td>' + fmt(p.d) + '</td><td>' + esc(p.title) + (p.practice ? ' <span class="chip">practice</span>' : '') + '</td><td>' + (p.focus || []).join(', ') + '</td><td>' + (p.used || []).length + '</td></tr>'; }).join('') + '</table></div>' : '<div class="card muted">No pieces yet. Press Write!</div>');
  }

  // ---------- booklets + test day ----------
  function viewBooks() {
    var b = CFG.booklets || {};
    var card = function (yr, kind, label, desc) { var pdf = b[yr] && b[yr][kind]; return '<div class="bookcard"><div class="bookcover">' + artImg('cover-y' + yr + '-' + kind, '', '') + '<div class="t">Writing Keys<br>Year ' + yr + '<br><span style="font-size:16px;color:#fff">' + label + '</span></div></div><div class="small muted">' + desc + '</div><div class="row"><a class="btn sm" href="' + pdf + '" target="_blank" download>⬇ Download PDF</a><a class="btn sm alt" href="booklet.html?book=' + kind + '&year=' + yr + '" target="_blank">Print view</a></div></div>'; };
    var lp = b.launch || {}, mineCard = (S.pp && (S.kind === 'student' || (S.kind === 'local' && S.sid))) ? printCard(S.pp, S.pp.name || S.name || '') : '';
    var lcard = function (kind, label, desc) { return '<div class="bookcard"><div class="bookcover">' + artImg('cover-catchup-' + kind, '', '') + '<div class="t">Launch Pad<br><span style="font-size:16px;color:#fff">' + label + '</span></div></div><div class="small muted">' + desc + '</div><div class="row"><a class="btn sm" href="' + lp[kind] + '" target="_blank" download>⬇ Download PDF</a><a class="btn sm alt" href="booklet.html?book=launch' + (kind === 'teacher' ? '-teacher' : '') + '&year=5" target="_blank">Print view</a></div></div>'; };
    var mine = S.pp && S.pp.year;
    return '<h2>Booklets</h2><p class="muted">Every key, with explicit teaching, examples, activities and prompts. The Passport pages are for colouring in. Print or save as PDF.' + (mine ? ' Your year: <b style="color:#fff">Year ' + mine + '</b>.' : '') + '</p>' + mineCard + '<div class="grid2">' + card(5, 'student', 'Student Booklet', 'Self-directed learning: 45 key cards, passport and test-day toolkit.') + card(6, 'student', 'Student Booklet', 'Self-directed learning at Year 6 depth, with stretch keys.') + (S.kind === 'student' ? '' : card(5, 'teacher', 'Teacher Book', 'Teaching tips, misconceptions, support and stretch for every key.') + card(6, 'teacher', 'Teacher Book', 'Year 6 teaching notes, group planning and moderation.')) + '</div><div class="sp"></div><h2>Launch Pad: catch-up pack</h2><p class="muted">For anyone scoring below R3 in a skill. Simple explanations, warm-ups, sentence frames and writing practice that lift students to their level fast.</p><div class="grid2">' + lcard('student', 'Student Booklet', '12 Launch Pad keys, warm-ups, word banks and guided writing.') + (S.kind === 'student' ? '' : lcard('teacher', 'Teacher Guide', 'Fast-track plan, 15-minute routine, answers and checks.')) + '</div>';
  }
  function viewTest() {
    var t = WK.testDay, list = function (a) { return '<ul class="check" style="--c:#ED2161">' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; };
    return '<h2>e-asTTle test day toolkit</h2><p class="muted">Seven things the markers look at: Ideas, Structure &amp; language, Organisation, Vocabulary, Sentence structure, Punctuation and Spelling. Every key you have earned is ready to use.</p><div class="grid2"><div class="card"><h3>Before you write</h3>' + list(t.before) + '</div><div class="card"><h3>While you write</h3>' + list(t.during) + '</div><div class="card"><h3>Last 5 minutes</h3>' + list(t.after) + '</div></div><div class="sp"></div><h3>Practice prompts</h3><div class="card"><ul class="check" style="--c:#ED2161">' + WK.practicePrompts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>';
  }

  // ---------- teacher ----------
  function studs() { return S.students.filter(function (s) { return s.pp; }); }
  function elFill(pp, e) { var ks = keysOf(e.id), d = ks.filter(function (k) { return done(pp, k.id); }).length; return Math.round(d / ks.length * 100); }
  function viewTeacher() {
    var tabs = [['class', 'Class'], ['groups', 'Groups'], ['place', 'e-asTTle placement'], ['check', 'To check'], ['roster', S.kind === 'local' ? 'Students' : 'Export']];
    var tb = '<div class="row noprint" style="margin:6px 0 14px">' + tabs.map(function (t) { return '<button class="btn sm ' + (S.teacherTab === t[0] ? '' : 'alt') + '" data-act="ttab" data-t="' + t[0] + '">' + t[1] + (t[0] === 'check' ? ' (' + studs().reduce(function (a, s) { return a + unconfirmed(s.pp).length; }, 0) + ')' : '') + '</button>'; }).join('') + '</div>';
    var body = S.teacherTab === 'groups' ? tGroups() : S.teacherTab === 'place' ? tPlace() : S.teacherTab === 'check' ? tCheck() : S.teacherTab === 'roster' ? tRoster() : tClass();
    return '<h2>' + esc(CFG.className || 'Class') + '</h2>' + tb + body;
  }
  function tClass() {
    var ss = studs(); if (!ss.length) return '<div class="card">No students yet. ' + (S.kind === 'local' ? 'Add some in the Students tab, or load the demo class.' : 'Add students in the Class Portfolio roster first.') + '</div>';
    var avg = Math.round(ss.reduce(function (a, s) { return a + nDone(s.pp); }, 0) / ss.length * 10) / 10;
    return '<div class="muted small">' + ss.length + ' students · average ' + avg + ' of ' + TOTAL + ' keys</div><div class="scroll"><table class="tbl"><tr><th>Student</th><th>Yr</th><th>Keys</th><th>Skills</th><th>Focus</th><th>To check</th><th>Last piece</th></tr>' + ss.map(function (s) {
      var pp = s.pp, lp = (pp.pieces || [])[0];
      return '<tr class="clk" data-act="opens" data-id="' + esc(s.id) + '"><td><b>' + esc(s.name) + '</b>' + (pp.support ? ' <span class="chip" style="background:var(--pink)">teacher time</span>' : '') + '</td><td>' + (pp.year || '?') + '</td><td>' + nDone(pp) + '/' + TOTAL + '</td><td><div class="bars">' + WK.elements.map(function (e) { return '<i style="--c:' + e.color + '" title="' + e.name + '"><b style="height:' + elFill(pp, e) + '%"></b></i>'; }).join('') + '</div></td><td>' + (pp.focus || []).join(', ') + '</td><td>' + unconfirmed(pp).length + '</td><td>' + (lp ? fmt(lp.d) + ' ' + esc(lp.title) : '–') + '</td></tr>';
    }).join('') + '</table></div><div class="legend" style="margin-top:8px">Bars show the share of keys coloured in for each skill, in this order: ' + WK.elements.map(function (e) { return '<span style="color:' + e.color + '">' + e.name + '</span>'; }).join(' · ') + '</div>';
  }
  function tGroups() {
    var ss = studs(), map = {}, sup = ss.filter(function (s) { return s.pp.support; });
    ss.forEach(function (s) { var ids = s.pp.focus.length ? s.pp.focus : WK.elements.map(function (e) { var k = startKey(s.pp, e.id); return k && k.id; }).filter(Boolean).slice(0, 1); ids.forEach(function (id) { (map[id] = map[id] || []).push(s); }); });
    var gs = Object.keys(map).sort(function (a, b) { return map[b].length - map[a].length; });
    return '<div class="card" style="margin-bottom:14px"><h3>Teacher time group</h3><div class="row" style="margin-top:8px">' + (sup.length ? sup.map(function (s) { return '<a class="chip" href="#/teacher/student/' + encodeURIComponent(s.id) + '" style="background:var(--pink);text-decoration:none">' + esc(s.name) + '</a>'; }).join('') : '<span class="muted small">Nobody flagged yet. Open a student and tap "Teacher time".</span>') + '</div></div>' +
      '<h3>Groups by focus key</h3><p class="muted small">Students working on the same key. Teach it once, then release them to the booklet.</p><div class="grid2">' + gs.map(function (id) { var k = KEYS[id], e = EL[k.el]; return '<div class="card" style="border-color:' + e.color + '"><span class="pill" style="background:' + e.color + ';color:#101409">' + id + '</span><b>' + esc(k.name) + '</b><div class="small muted">' + esc(k.teacher.tips[0]) + '</div><div class="row" style="margin-top:8px">' + map[id].map(function (s) { return '<span class="chip">' + esc(s.name) + '</span>'; }).join('') + '</div></div>'; }).join('') + '</div>';
  }
  function parseReport(txt) {
    var labels = { ideas: 'Ideas', structure: 'Structure', organisation: 'Organisation', vocabulary: 'Vocabulary', sentence: 'Sentence', punctuation: 'Punctuation', spelling: 'Spelling' }, out = {};
    Object.keys(labels).forEach(function (id) { var m = new RegExp(labels[id] + '[^\\n\\d]{0,40}?R?\\s*([1-7])\\b', 'i').exec(txt); if (m && +m[1] <= EL[id].max) out[id] = +m[1]; });
    return out;
  }
  var PL = { sid: '', scores: {} };
  function tPlace() {
    var ss = studs(); if (!ss.length) return '<div class="card">Add students first.</div>';
    if (!PL.sid) PL.sid = ss[0].id;
    var st = ss.filter(function (s) { return s.id === PL.sid; })[0] || ss[0], inputs = WK.elements.map(function (e) {
      var opts = '<option value="">–</option>'; for (var i = 1; i <= e.max; i++) opts += '<option value="' + i + '" ' + (PL.scores[e.id] === i ? 'selected' : '') + '>R' + i + '</option>';
      var sc = PL.scores[e.id], cr = sc ? keysOf(e.id).filter(function (k) { return k.r < sc; }).length : 0, near = sc ? keysOf(e.id).filter(function (k) { return k.r === sc; }).length : 0, nx = sc ? keysOf(e.id).filter(function (k) { return k.r > sc; })[0] : null;
      return '<div class="card" style="border-color:' + e.color + '"><label style="color:' + e.color + '">' + e.name + ' (out of ' + e.max + ')</label><select data-pl="' + e.id + '">' + opts + '</select><div class="small muted" style="margin-top:6px">' + (sc ? cr + ' already showing · ' + near + ' at 3/5 · start: ' + (nx ? nx.id + ' ' + esc(nx.name) : 'all done!') : 'No score yet') + '</div></div>';
    }).join('');
    return '<div class="card"><p class="small muted" style="margin-top:0">Enter the seven R-scores from your e-asTTle marking (the easttle brain\'s report gives them). Keys below the score are ticked off as already showing, keys at the score get 3 of 5 proofs, and the next key becomes START HERE. (The app never works out aWs or curriculum levels. e-asTTle does that.)</p><div class="row"><div class="grow"><label>Student</label><select data-pl="sid">' + ss.map(function (s) { return '<option value="' + esc(s.id) + '" ' + (s.id === st.id ? 'selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></div><div><label>Year</label><select data-pl="yr"><option value="5" ' + (st.pp.year === 5 ? 'selected' : '') + '>Year 5</option><option value="6" ' + (st.pp.year === 6 ? 'selected' : '') + '>Year 6</option></select></div><div><label>Test date</label><input type="date" data-pl="date" value="' + (PL.date || today()) + '"></div></div></div><div class="sp"></div><div class="grid2">' + inputs + '</div><div class="sp"></div><div class="card"><label>Or paste the marking report text</label><textarea id="plp" rows="4" placeholder="Paste the scores table. For example: Ideas R4 / 6 ..."></textarea><div class="row" style="margin-top:8px"><button class="btn alt sm" data-act="plparse">Read scores from text</button></div></div><div class="sp"></div><button class="btn" data-act="plapply">✅ Apply to ' + esc(st.name) + '</button>';
  }
  function tCheck() {
    var rows = []; studs().forEach(function (s) { unconfirmed(s.pp).forEach(function (u) { rows.push({ s: s, u: u }); }); });
    if (!rows.length) return '<div class="card">🎉 Nothing waiting to be checked.</div>';
    return '<p class="muted small">Proofs students added themselves. Look at their annotated writing, then confirm.</p>' + rows.map(function (r) { var k = KEYS[r.u.key]; return '<div class="ev"><b>' + esc(r.s.name) + '</b> ' + r.u.key + ' ' + esc(k.name) + ' · ' + esc(r.u.e.t) + ' · ' + fmt(r.u.e.d) + '<button class="btn sm" data-act="confirm" data-s="' + esc(r.s.id) + '" data-k="' + r.u.key + '" data-i="' + r.u.i + '">✓ Confirm</button><button class="btn sm alt" data-act="rejectev" data-s="' + esc(r.s.id) + '" data-k="' + r.u.key + '" data-i="' + r.u.i + '">Not yet</button></div>'; }).join('') + '<div class="sp"></div><button class="btn alt" data-act="confirmall">Confirm all</button>';
  }
  function tRoster() {
    var ss = studs();
    var head = '<div class="card"><button class="btn" data-act="csv">⬇ Download class CSV</button> <span class="muted small">Opens in Excel or Numbers.' + (S.kind === 'teacher' ? ' Student passports also live in each child\'s Writing folder in the Class Portfolio.' : '') + '</span></div>';
    if (S.kind !== 'local') return head;
    return head + '<div class="sp"></div><div class="card"><h3>Students on this device</h3><div class="row" style="margin:10px 0"><input type="text" id="newst" placeholder="Student name" class="grow"><select id="newyr" style="width:110px"><option>5</option><option>6</option></select><button class="btn sm" data-act="addst">Add</button></div>' + ss.map(function (s) { return '<div class="ev"><b>' + esc(s.name) + '</b> Year ' + (s.pp.year || '?') + '<button class="btn sm alt" data-act="delst" data-id="' + esc(s.id) + '">Remove</button></div>'; }).join('') + '<div class="row" style="margin-top:12px"><button class="btn alt sm" data-act="demo">Load demo class</button><button class="btn alt sm" data-act="asstudent">Open as a student…</button></div></div>';
  }
  function bookUrl(pp, name, kind, yr) {
    var st = [], sc = [];
    KLIST.forEach(function (k) { var c = cnt(pp, k.id); if (c > 0) st.push(k.id + ':' + c); });
    if (pp.test && pp.test.scores) Object.keys(pp.test.scores).forEach(function (e) { if (pp.test.scores[e]) sc.push(e + ':' + pp.test.scores[e]); });
    return 'booklet.html?book=' + kind + '&year=' + yr + '&name=' + encodeURIComponent(name || '') + '&st=' + encodeURIComponent(st.join(',')) + '&sc=' + encodeURIComponent(sc.join(',')) + '&auto=1';
  }
  function printCard(pp, name) {
    var yr = pp.year === 6 ? 6 : 5, oth = yr === 5 ? 6 : 5, left = KLIST.filter(function (k) { return !k.cu && !done(pp, k.id); }).length, leftCu = KLIST.filter(function (k) { return k.cu && !done(pp, k.id); }).length;
    return '<div class="card noprint" style="margin:12px 0"><h3>🖨 Print booklets for ' + esc(name) + '</h3><p class="muted small">Leaves out every key already achieved (from the e-asTTle test or earned), shows the scores and prints the name on every page. In the print box choose <b>Save as PDF</b> to download it.</p><div class="row">' +
      '<a class="btn sm" href="' + bookUrl(pp, name, 'student', yr) + '" target="_blank">Year ' + yr + ' Student Booklet (' + left + ' keys)</a>' +
      '<a class="btn sm" href="' + bookUrl(pp, name, 'launch', yr) + '" target="_blank">Launch Pad catch-up (' + leftCu + ' keys)</a>' +
      '<a class="btn sm alt" href="' + bookUrl(pp, name, 'student', oth) + '" target="_blank">Year ' + oth + ' version</a></div></div>';
  }
  function viewStudentDetail(id) {
    var st = S.students.filter(function (s) { return s.id === id; })[0]; if (!st) return '<div class="card">Student not found. <a href="#/teacher">Back</a></div>';
    S.sid2 = id; var pp = st.pp, m = location.hash.match(/key=(\w+)/);
    if (m) return viewKey(m[1], pp, true);
    return '<div class="row noprint"><a class="btn sm alt" href="#/teacher">← Class</a><button class="btn sm ' + (pp.support ? '' : 'alt') + '" data-act="support" data-id="' + esc(id) + '">' + (pp.support ? '✓ Teacher time group' : 'Add to teacher time group') + '</button><button class="btn sm alt" data-act="print">🖨 Print passport</button></div><h2 style="margin-top:12px">' + esc(st.name) + ' <span class="muted" style="font-size:20px">Year ' + (pp.year || '?') + '</span></h2><div class="muted">' + nDone(pp) + '/' + TOTAL + ' keys · ' + unconfirmed(pp).length + ' proofs to check' + (pp.test ? ' · e-asTTle ' + fmt(pp.test.date) + ': ' + WK.elements.map(function (e) { return e.code + ' R' + (pp.test.scores[e.id] || '–'); }).join(' · ') : '') + '</div>' + printCard(pp, st.name) + grid(pp, function (k) { return '#/teacher/student/' + encodeURIComponent(id) + '?key=' + k.id; }) + '<h3>Pieces</h3>' + ((pp.pieces || []).length ? '<div class="scroll"><table class="tbl"><tr><th>Date</th><th>Piece</th><th>Focus</th><th>Used</th><th>Own keys not shown</th></tr>' + pp.pieces.slice(0, 20).map(function (p) { return '<tr><td>' + fmt(p.d) + '</td><td>' + esc(p.title) + '</td><td>' + (p.focus || []).join(', ') + '</td><td>' + (p.used || []).join(', ') + '</td><td>' + (p.missed || []).join(', ') + '</td></tr>'; }).join('') + '</table></div>' : '<div class="card muted">None logged yet.</div>');
  }

  // ---------- actions ----------
  function curStudent(id) { return S.students.filter(function (s) { return s.id === id; })[0]; }
  function tSave(st) { if (S.kind === 'local') { var d = lget(), x = d.students.filter(function (y) { return y.id === st.id; })[0]; if (x) { x.pp = st.pp; x.year = st.pp.year; } lset(d); toast('Saved'); } else { var prev = S.pp; S.pp = st.pp; queueSave(st.id); S.pp = prev; toast('Saving to portfolio…'); } }
  function act(a, el) {
    var d = el ? el.dataset : {}, pp = S.pp;
    if (a === 'studentgo') {
      var code = ($('#code').value || '').replace(/[^A-Za-z0-9]/g, '').toUpperCase(); if (code.length !== 6) return lerr('Type all 6 characters');
      api('auth/student', { method: 'POST', json: { code: code } }).then(function (r) { setSess({ token: r.token, role: 'student', name: r.student.name, sid: r.student.id }); S.year = r.student.year; return studentLoad(getSess()); }).then(function () { location.hash = '#/home'; render(); }, function (e) { lerr(e.message); });
    } else if (a === 'teachergo') {
      var pw = $('#tpw').value; if (!pw) return lerr('Type the password');
      api('auth/teacher', { method: 'POST', json: { password: pw } }).then(function (r) { setSess({ token: r.token, role: 'teacher', name: 'Teacher' }); return teacherLoad(); }).then(function () { location.hash = '#/teacher'; render(); }, function (e) { lerr(e.message); });
    } else if (a === 'local') { enterLocal(); location.hash = '#/teacher'; render(); }
    else if (a === 'signout') signOut();
    else if (a === 'backlist') { S.sid = null; S.pp = null; location.hash = '#/teacher'; render(); }
    else if (a === 'year') { pp.year = +d.y; queueSave(); render(); }
    else if (a === 'focus') { var i = pp.focus.indexOf(d.k); if (i > -1) pp.focus.splice(i, 1); else { if (pp.focus.length >= 2) pp.focus.shift(); pp.focus.push(d.k); } W.focus = null; queueSave(); render(); }
    else if (a === 'addev' || a === 'addevt') {
      var t = ($('#evt').value || '').trim(), n = ($('#evn').value || '').trim(); if (!t) { toast('Type which piece of writing'); return; }
      var tp = S.kind === 'teacher' || (S.kind === 'local' && !S.sid) ? curStudent(S.sid2).pp : pp; addEvidence(tp, d.k, t, a === 'addevt' ? 'teacher' : 'student', n);
      if (tp !== pp || !pp) tSave(curStudent(S.sid2)); else queueSave(); toast(cnt(tp, d.k) >= NEED ? '🔑 Key unlocked!' : 'Proof added'); render();
    } else if (a === 'delev') { var tp2 = S.kind === 'teacher' || (S.kind === 'local' && !S.sid) ? curStudent(S.sid2) : null, P = tp2 ? tp2.pp : pp; P.keys[d.k].ev.splice(+d.i, 1); if (tp2) tSave(tp2); else queueSave(); render(); }
    else if (a === 'prechg') { var st3 = curStudent(S.sid2), o = st3.pp.keys[d.k] = st3.pp.keys[d.k] || { ev: [] }; o.pre = Math.max(0, Math.min(NEED, (o.pre || 0) + +d.d)); tSave(st3); render(); }
    else if (a === 'savepiece') {
      var title = ($('#wt').value || '').trim() || 'My writing'; var used = Object.keys(W.ticks).filter(function (k) { return W.ticks[k]; });
      if (!used.length) { toast('Tick at least one key you showed'); return; }
      var kept = [], missed = [], focusDone = [];
      KLIST.forEach(function (k) { if (done(pp, k.id)) { if (W.ticks[k.id]) { kept.push(k.id); (pp.keys[k.id] = pp.keys[k.id] || { ev: [] }).kept = ((pp.keys[k.id].kept) || 0) + 1; } else missed.push(k.id); } });
      W.focus.forEach(function (id) { if (W.ticks[id] && !done(pp, id)) { addEvidence(pp, id, title, 'student'); focusDone.push(id); } });
      pp.pieces.unshift({ id: uid(), d: today(), title: title, type: W.type, practice: W.practice, focus: W.focus.slice(), used: used, kept: kept, missed: missed });
      var unlocked = focusDone.filter(function (id) { return done(pp, id); }); W = { title: '', type: 'Recount', practice: false, focus: null, ticks: {} }; queueSave();
      toast(unlocked.length ? '🔑 Unlocked ' + unlocked.join(', ') + '!' : 'Piece saved. Proofs added'); location.hash = '#/passport'; render();
    } else if (a === 'sendwriting') {
      if (window.ClassPortfolio && window.ClassPortfolio.open) window.ClassPortfolio.open({ subject: 'Writing' }); else toast('The portfolio is not connected on this page.');
    } else if (a === 'print') window.print();
    else if (a === 'ttab') { S.teacherTab = d.t; render(); }
    else if (a === 'opens') location.hash = '#/teacher/student/' + encodeURIComponent(d.id);
    else if (a === 'support') { var s5 = curStudent(d.id); s5.pp.support = !s5.pp.support; tSave(s5); render(); }
    else if (a === 'confirm' || a === 'rejectev') { var s6 = curStudent(d.s), ev = s6.pp.keys[d.k].ev[+d.i]; if (a === 'confirm') ev.ok = true; else s6.pp.keys[d.k].ev.splice(+d.i, 1); tSave(s6); render(); }
    else if (a === 'confirmall') { studs().forEach(function (s) { var ch = false; unconfirmed(s.pp).forEach(function (u) { s.pp.keys[u.key].ev[u.i].ok = true; ch = true; }); if (ch) tSave(s); }); render(); }
    else if (a === 'plparse') { var sc = parseReport($('#plp').value || ''); Object.keys(sc).forEach(function (k) { PL.scores[k] = sc[k]; }); toast(Object.keys(sc).length + ' scores read'); render(); }
    else if (a === 'plapply') {
      var s7 = curStudent(PL.sid || studs()[0].id); if (!Object.keys(PL.scores).length) { toast('Enter at least one score'); return; }
      applyPlacement(s7.pp, PL.scores, PL.date); var fs = WK.elements.map(function (e) { return startKey(s7.pp, e.id); }).filter(Boolean); if (!s7.pp.focus.length) s7.pp.focus = fs.slice(0, 2).map(function (k) { return k.id; });
      tSave(s7); PL.scores = {}; toast('Placement applied: ' + s7.name); S.teacherTab = 'class'; render();
    } else if (a === 'csv') exportCSV();
    else if (a === 'addst') { var nm = ($('#newst').value || '').trim(); if (!nm) return; var dd = lget(), yr = +$('#newyr').value, id = 'l' + uid(); dd.students.push({ id: id, name: nm, year: yr, pp: newPP(nm, yr) }); lset(dd); enterLocal(); render(); }
    else if (a === 'delst') { var d2 = lget(); d2.students = d2.students.filter(function (s) { return s.id !== d.id; }); lset(d2); enterLocal(); render(); }
    else if (a === 'demo') { seedDemo(); enterLocal(); toast('Demo class loaded'); render(); }
    else if (a === 'asstudent') { var ls = S.students; if (!ls.length) return; var nmx = prompt('Student name (as listed):'); var f = ls.filter(function (s) { return s.name.toLowerCase().indexOf((nmx || '').toLowerCase()) === 0; })[0]; if (f) { S.sid = f.id; S.pp = f.pp; location.hash = '#/home'; render(); } }
  }
  function exportCSV() {
    var ss = studs(), head = ['Name', 'Year', 'Keys achieved', 'Proofs', 'Teacher time', 'Focus keys', 'Test date'].concat(WK.elements.map(function (e) { return e.name + ' R'; })).concat(WK.elements.map(function (e) { return e.name + ' keys'; })).concat(['To check', 'Last piece']);
    var rows = ss.map(function (s) { var p = s.pp, pr = KLIST.reduce(function (a, k) { return a + cnt(p, k.id); }, 0); return [s.name, p.year || '', nDone(p), pr, p.support ? 'yes' : '', (p.focus || []).join(' '), p.test ? p.test.date : ''].concat(WK.elements.map(function (e) { return p.test ? (p.test.scores[e.id] || '') : ''; })).concat(WK.elements.map(function (e) { return keysOf(e.id).filter(function (k) { return done(p, k.id); }).length + '/' + keysOf(e.id).length; })).concat([unconfirmed(p).length, (p.pieces[0] || {}).title || '']); });
    var csv = [head].concat(rows).map(function (r) { return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'writing-keys-class.csv'; document.body.appendChild(a); a.click(); a.remove();
  }
  function onClick(e) {
    var el = e.target.closest('[data-act]'); if (!el) return; if (el.tagName === 'A' && el.getAttribute('href') === '#') e.preventDefault();
    if (el.tagName === 'A' && el.dataset.act === 'local') e.preventDefault(); act(el.dataset.act, el);
  }
  function onInput(e) {
    var t = e.target;
    if (t.dataset.w) { W.ticks[t.dataset.w] = t.checked; var lab = t.closest('.tick'); if (lab) lab.classList.toggle('on', t.checked); }
    else if (t.dataset.wf) { W.focus = W.focus || []; var i = W.focus.indexOf(t.dataset.wf); if (t.checked && i < 0) { if (W.focus.length >= 3) { t.checked = false; toast('Pick up to 3 focus keys'); return; } W.focus.push(t.dataset.wf); } else if (!t.checked && i > -1) W.focus.splice(i, 1); if (e.type === 'change') render(); }
    else if (t.id === 'wt') W.title = t.value; else if (t.id === 'wty') W.type = t.value; else if (t.id === 'wpr') W.practice = t.checked;
    else if (t.dataset.pl && e.type === 'change') {
      var k = t.dataset.pl; if (k === 'sid') { PL.sid = t.value; PL.scores = {}; } else if (k === 'date') PL.date = t.value; else if (k === 'yr') { var s = curStudent(PL.sid || studs()[0].id); s.pp.year = +t.value; } else { if (t.value) PL.scores[k] = +t.value; else delete PL.scores[k]; } render();
    }
  }
  window.WKApp = { S: S, seedDemo: seedDemo, parseReport: parseReport, applyPlacement: applyPlacement, newPP: newPP, startKey: startKey, cnt: cnt, resultOf: resultOf };
  document.addEventListener('DOMContentLoaded', boot);
})();
