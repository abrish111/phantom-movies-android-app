// Habesha Stream — single-page app. Catalog: public domain & Creative Commons titles from the Internet Archive.

const $ = (s, el = document) => el.querySelector(s);
const app = $("#app");

/* ---------------- Icons ---------------- */
const I = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>',
  discover: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  library: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M6 4h12M8 1.5h8"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  rew: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  fwd: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
  full: '<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',
  pip: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><rect x="12" y="12" width="7" height="5" rx="1"/></svg>',
  vol: '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>',
  film: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 7.5h4M3 12h18M3 16.5h4M17 7.5h4M17 16.5h4"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
};

/* ---------------- i18n (English / Amharic) ---------------- */
const STR = {
  en: {
    home: "Home", discover: "Discover", library: "Library", settings: "Settings",
    play: "Play", resume: "Resume", myList: "My List", added: "In My List", info: "Details",
    continue: "Continue", history: "Continue Watching", featured: "Featured", moods: "Browse by Mood",
    seeAll: "See all", search: "Search movies, cartoons, genres…", all: "All", results: "results",
    noResults: "Nothing found", tryElse: "Try another title or genre.",
    emptyList: "Your list is empty", emptyListSub: "Tap + My List on any title to save it here.",
    emptyHistory: "Nothing watched yet", emptyHistorySub: "Titles you start show up here so you can pick up where you left off.",
    similar: "More Like This", free: "Free", upNext: "Up next", playNow: "Play now",
    loading: "Loading stream…", buffering: "Buffering", starting: "Starting playback",
    shorts: "Short Films & Cartoons", docs: "Documentaries", classics: "Silent Era Classics",
    newest: "Newest first", oldest: "Oldest first", az: "A–Z", shortest: "Shortest first",
    clearHistory: "Clear watch history", clearList: "Clear My List",
  },
  am: {
    home: "መነሻ", discover: "ያስሱ", library: "ቤተ-መጻሕፍት", settings: "ቅንብሮች",
    play: "አጫውት", resume: "ቀጥል", myList: "ዝርዝሬ", added: "በዝርዝሬ ውስጥ", info: "ዝርዝር",
    continue: "ቀጥል", history: "መመልከት ይቀጥሉ", featured: "ተለይተው የቀረቡ", moods: "በስሜት ያስሱ",
    seeAll: "ሁሉንም", search: "ፊልሞችን፣ ካርቱኖችን ይፈልጉ…", all: "ሁሉም", results: "ውጤቶች",
    noResults: "ምንም አልተገኘም", tryElse: "ሌላ ርዕስ ወይም ዘውግ ይሞክሩ።",
    emptyList: "ዝርዝርዎ ባዶ ነው", emptyListSub: "ለማስቀመጥ በማንኛውም ርዕስ ላይ + ዝርዝሬን ይጫኑ።",
    emptyHistory: "እስካሁን ምንም አልታየም", emptyHistorySub: "የጀመሩት ፊልም ከቆመበት እንዲቀጥሉ እዚህ ይታያል።",
    similar: "ተመሳሳይ", free: "ነጻ", upNext: "ቀጣይ", playNow: "አሁን አጫውት",
    loading: "በመጫን ላይ…", buffering: "በመጫን ላይ", starting: "መጫወት በመጀመር ላይ",
    shorts: "አጫጭር ፊልሞች እና ካርቱኖች", docs: "ዘጋቢ ፊልሞች", classics: "የድምፅ-አልባ ዘመን ክላሲኮች",
    newest: "አዲስ በመጀመሪያ", oldest: "ቀደምት በመጀመሪያ", az: "ሀ–ፐ", shortest: "አጭር በመጀመሪያ",
    clearHistory: "የእይታ ታሪክ አጥፋ", clearList: "ዝርዝሬን አጥፋ",
  },
};

/* ---------------- Local state (per device) ---------------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem("hs:" + k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem("hs:" + k, JSON.stringify(v)); },
};
const prefs = Object.assign({ lang: "en", accent: "gold", autoplay: true, speed: 1 }, store.get("prefs", {}));
const t = (k) => STR[prefs.lang]?.[k] ?? STR.en[k] ?? k;
const savePrefs = () => store.set("prefs", prefs);
let progress = store.get("progress", {}); // id -> { t, d, at }
let myList = store.get("list", []);       // [id]

const applyTheme = () => {
  document.documentElement.dataset.accent = prefs.accent;
  document.documentElement.lang = prefs.lang;
};
applyTheme();

/* ---------------- Catalog ---------------- */
let catalog = [];
const byId = new Map();
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtRuntime = (s) => { if (!s) return ""; const h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60); return h ? `${h}h ${m}m` : `${m}m`; };
const fmtTime = (s) => { s = Math.max(0, Math.floor(s || 0)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0"); };
const pct = (id) => { const p = progress[id]; return p && p.d ? Math.min(100, (p.t / p.d) * 100) : 0; };
const inList = (id) => myList.includes(id);
const shuffleSeeded = (arr, seed) => { const a = [...arr]; let s = seed; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const daySeed = Math.floor(Date.now() / 864e5);

const MOODS = [
  { g: "Comedy", e: "😂", c: "#3b2a0a" }, { g: "Horror", e: "👻", c: "#2a0f12" },
  { g: "Thriller", e: "🕵️", c: "#0e1d2b" }, { g: "Animation", e: "🎨", c: "#1c1035" },
  { g: "Romance", e: "💛", c: "#33101f" }, { g: "Western", e: "🤠", c: "#33200c" },
  { g: "Sci-Fi", e: "🚀", c: "#0b2626" }, { g: "Adventure", e: "🧭", c: "#0f2a17" },
  { g: "Family", e: "👨‍👩‍👧", c: "#1a2440" }, { g: "Documentary", e: "🌍", c: "#13261f" },
];
const genres = () => [...new Set(catalog.flatMap((x) => x.genres))].sort();

/* ---------------- Shell: nav, search, toast ---------------- */
const NAV = [["home", "#/"], ["discover", "#/discover"], ["library", "#/library"], ["settings", "#/settings"]];
function renderNav() {
  const route = location.hash.split("/")[1] || "home";
  const html = (withIcon) => NAV.map(([k, h]) =>
    `<a href="${h}" class="${route === k || (k === "home" && route === "") ? "active" : ""}">${withIcon ? I[k] : ""}<span>${t(k)}</span></a>`).join("");
  $("#topnav").innerHTML = html(false);
  $("#bottomnav").innerHTML = html(true);
  $("#searchInput").placeholder = t("search");
}

let toastTimer;
function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

window.addEventListener("scroll", () => $("#topbar").classList.toggle("solid", scrollY > 40), { passive: true });

function toggleList(id) {
  if (inList(id)) { myList = myList.filter((x) => x !== id); toast("Removed from " + t("myList")); }
  else { myList.unshift(id); toast("Added to " + t("myList")); }
  store.set("list", myList);
}
function removeProgress(id) { delete progress[id]; store.set("progress", progress); }

/* ---------------- Components ---------------- */
function card(x, opts = {}) {
  const p = pct(x.id);
  const done = p >= 95;
  const tag = x.type === "short" ? "Short" : x.type === "doc" ? "Doc" : "";
  return `<a class="card ${opts.wide ? "wide" : ""}" href="#/title/${encodeURIComponent(x.id)}" aria-label="${esc(x.title)}">
    <div class="poster">
      <img loading="lazy" src="${esc(x.poster)}" alt="" onerror="this.style.opacity=0" />
      ${tag ? `<span class="badge">${tag}</span>` : ""}
      ${done ? `<span class="check">${I.check}</span>` : ""}
      <span class="ptitle">${esc(x.title)}</span>
      ${opts.progress && p > 0 ? `<span class="progress"><i style="width:${p}%"></i></span>` : ""}
    </div>
    ${opts.sub !== false && !opts.wide ? `<div class="sub">${x.year ?? ""}${x.year ? " · " : ""}${fmtRuntime(x.runtime)}</div>` : ""}
  </a>`;
}

function row(title, items, opts = {}) {
  if (!items.length) return "";
  return `<section class="section">
    <div class="section-head"><h2>${esc(title)}</h2>${opts.more ? `<a href="${opts.more}">${t("seeAll")}</a>` : ""}</div>
    <div class="row">${items.map((x) => card(x, opts)).join("")}</div>
  </section>`;
}

function historyItems() {
  return Object.entries(progress)
    .filter(([id, p]) => byId.has(id) && p.d && p.t / p.d < 0.95)
    .sort((a, b) => b[1].at - a[1].at).map(([id]) => byId.get(id));
}

function continueRow() {
  const items = historyItems().slice(0, 12);
  if (!items.length) return "";
  return `<section class="section">
    <div class="section-head"><h2>${t("history")}</h2><a href="#/library">${t("seeAll")}</a></div>
    <div class="row">${items.map((x) => `<div>
      ${card(x, { wide: true, progress: true })}
      <div class="card-actions">
        <a class="btn btn-sm btn-dark" href="#/watch/${encodeURIComponent(x.id)}">${I.play.replace("<svg", '<svg style="fill:currentColor;stroke:none;width:18px"')} ${t("continue")}</a>
        <button class="btn btn-sm btn-dark x" data-unwatch="${esc(x.id)}" aria-label="Remove from history">${I.x}</button>
      </div></div>`).join("")}</div>
  </section>`;
}

function footer() {
  return `<footer class="site-foot"><div class="flag-stripe"></div>
    <strong>Habesha Stream</strong> — free, ad-free and legal. Every title is in the public domain or under a Creative Commons licence,
    streamed directly from the <a href="https://archive.org" target="_blank" rel="noopener" style="text-decoration:underline">Internet Archive</a>.
    Your watch history and list are saved on this device.</footer>`;
}

/* ---------------- Pages ---------------- */
let heroTimer;
function pageHome() {
  const features = shuffleSeeded(catalog.filter((x) => x.type === "movie" && x.year > 1930), daySeed).slice(0, 6);
  const movies = catalog.filter((x) => x.type === "movie");
  const g = (name) => shuffleSeeded(movies.filter((x) => x.genres.includes(name)), daySeed + name.length);
  const listItems = myList.map((id) => byId.get(id)).filter(Boolean);

  app.className = "";
  app.innerHTML = `
    <section class="hero" id="hero">
      ${features.map((x, i) => `<div class="hero-slide ${i === 0 ? "active" : ""}" data-i="${i}">
        <div class="hero-bg" style="background-image:url('${esc(x.poster)}')"></div>
        <div class="hero-art" style="background-image:url('${esc(x.poster)}')"></div>
      </div>`).join("")}
      <div class="hero-content" id="heroContent"></div>
      <div class="hero-dots">${features.map((_, i) => `<button aria-label="Slide ${i + 1}" data-dot="${i}" class="${i === 0 ? "active" : ""}"></button>`).join("")}</div>
    </section>
    ${continueRow()}
    ${row(t("myList"), listItems, { more: "#/library" })}
    <section class="section">
      <div class="section-head"><h2>${t("moods")}</h2></div>
      <div class="row">${MOODS.filter((m) => catalog.some((x) => x.genres.includes(m.g))).map((m) =>
        `<a class="tile" href="#/discover?g=${encodeURIComponent(m.g)}"><div class="tile-art" style="background:linear-gradient(145deg, ${m.c}, #11131b)">${m.e}</div><span>${esc(m.g)}</span></a>`).join("")}</div>
    </section>
    ${row("Trending Today", shuffleSeeded(movies, daySeed + 7).slice(0, 14), { more: "#/discover" })}
    ${row("Film-Noir & Thrillers", g("Thriller"), { more: "#/discover?g=Thriller" })}
    ${row(t("shorts"), catalog.filter((x) => x.type === "short"), { more: "#/discover?type=short" })}
    ${row("Comedy Gold", g("Comedy"), { more: "#/discover?g=Comedy" })}
    ${row("Late-Night Horror", g("Horror"), { more: "#/discover?g=Horror" })}
    ${row(t("classics"), movies.filter((x) => x.year && x.year < 1930), {})}
    ${row("Westerns & Adventure", [...new Set([...g("Western"), ...g("Adventure")])], { more: "#/discover?g=Adventure" })}
    ${row(t("docs"), catalog.filter((x) => x.type === "doc"), {})}
    ${footer()}`;

  let cur = 0;
  const show = (i) => {
    cur = (i + features.length) % features.length;
    app.querySelectorAll(".hero-slide").forEach((el, j) => el.classList.toggle("active", j === cur));
    app.querySelectorAll("[data-dot]").forEach((el, j) => el.classList.toggle("active", j === cur));
    const x = features[cur];
    const p = pct(x.id);
    $("#heroContent").innerHTML = `
      <div class="hero-kicker">${t("featured")}</div>
      <h1>${esc(x.title)}</h1>
      <div class="meta"><span class="pill free">${t("free")}</span>${x.year ? `<span>${x.year}</span>` : ""}<span>${fmtRuntime(x.runtime)}</span><span>${x.genres.map(esc).join(" · ")}</span></div>
      <p>${esc(x.description)}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#/watch/${encodeURIComponent(x.id)}">${I.play}${p > 0 && p < 95 ? t("resume") : t("play")}</a>
        <button class="btn btn-ghost ${inList(x.id) ? "on" : ""}" data-list="${esc(x.id)}">${inList(x.id) ? I.check : I.plus}${t("myList")}</button>
        <a class="btn btn-ghost" href="#/title/${encodeURIComponent(x.id)}" aria-label="${t("info")}">${I.info}</a>
      </div>`;
  };
  show(0);
  clearInterval(heroTimer);
  heroTimer = setInterval(() => { if (!document.hidden && $("#hero")) show(cur + 1); else clearInterval(heroTimer); }, 8000);
  app.querySelectorAll("[data-dot]").forEach((b) => b.onclick = () => { show(+b.dataset.dot); clearInterval(heroTimer); });
  app.onclick = (e) => {
    const l = e.target.closest("[data-list]");
    if (l) { toggleList(l.dataset.list); show(cur); return; }
    const u = e.target.closest("[data-unwatch]");
    if (u) { removeProgress(u.dataset.unwatch); pageHome(); }
  };
}

function pageDiscover(params) {
  const state = { g: params.get("g") || "", type: params.get("type") || "", sort: params.get("sort") || "newest" };
  app.className = "with-top";
  const render = () => {
    let items = catalog.filter((x) => (!state.g || x.genres.includes(state.g)) && (!state.type || x.type === state.type));
    const sorters = {
      newest: (a, b) => (b.year || 0) - (a.year || 0), oldest: (a, b) => (a.year || 9999) - (b.year || 9999),
      az: (a, b) => a.title.localeCompare(b.title), shortest: (a, b) => a.runtime - b.runtime,
    };
    items.sort(sorters[state.sort]);
    const types = [["", t("all")], ["movie", "Movies"], ["short", "Shorts & Cartoons"], ["doc", "Documentaries"]];
    app.innerHTML = `<div class="page">
      <h1 class="page-title">${t("discover")}</h1>
      <div class="chips" role="tablist">${types.map(([v, l]) => `<button class="chip ${state.type === v ? "on" : ""}" data-type="${v}">${l}</button>`).join("")}</div>
      <div class="chips" style="margin-top:10px">${["", ...genres()].map((g) => `<button class="chip ${state.g === g ? "on" : ""}" data-g="${esc(g)}">${g ? esc(g) : t("all")}</button>`).join("")}</div>
      <div class="toolbar"><span class="count">${items.length} ${t("results")}</span>
        <select class="select" id="sort" aria-label="Sort">${["newest", "oldest", "az", "shortest"].map((s) => `<option value="${s}" ${state.sort === s ? "selected" : ""}>${t(s)}</option>`).join("")}</select>
      </div>
      ${items.length ? `<div class="grid">${items.map((x) => card(x, { progress: true })).join("")}</div>`
        : `<div class="empty">${I.film}<h3>${t("noResults")}</h3><p>${t("tryElse")}</p></div>`}
    </div>${footer()}`;
    const sync = () => { const q = new URLSearchParams(Object.entries(state).filter(([, v]) => v)); history.replaceState(null, "", "#/discover" + (q.toString() ? "?" + q : "")); render(); };
    app.querySelectorAll("[data-g]").forEach((b) => b.onclick = () => { state.g = b.dataset.g; sync(); });
    app.querySelectorAll("[data-type]").forEach((b) => b.onclick = () => { state.type = b.dataset.type; sync(); });
    $("#sort").onchange = (e) => { state.sort = e.target.value; sync(); };
  };
  app.onclick = null;
  render();
}

function pageLibrary() {
  app.className = "with-top";
  const listItems = myList.map((id) => byId.get(id)).filter(Boolean);
  const hist = Object.entries(progress).filter(([id]) => byId.has(id)).sort((a, b) => b[1].at - a[1].at).map(([id]) => byId.get(id));
  app.innerHTML = `<div class="page"><h1 class="page-title">${t("library")}</h1></div>
    <section class="section"><div class="section-head"><h2>${t("history")}</h2>${hist.length ? `<a href="javascript:void 0" id="clrH">${t("clearHistory")}</a>` : ""}</div>
      ${hist.length ? `<div class="page"><div class="grid">${hist.map((x) => card(x, { progress: true })).join("")}</div></div>`
        : `<div class="empty">${I.play}<h3>${t("emptyHistory")}</h3><p>${t("emptyHistorySub")}</p></div>`}
    </section>
    <section class="section"><div class="section-head"><h2>${t("myList")}</h2>${listItems.length ? `<a href="javascript:void 0" id="clrL">${t("clearList")}</a>` : ""}</div>
      ${listItems.length ? `<div class="page"><div class="grid">${listItems.map((x) => card(x, { progress: true })).join("")}</div></div>`
        : `<div class="empty">${I.plus}<h3>${t("emptyList")}</h3><p>${t("emptyListSub")}</p></div>`}
    </section>${footer()}`;
  app.onclick = (e) => {
    if (e.target.id === "clrH" && confirm(t("clearHistory") + "?")) { progress = {}; store.set("progress", progress); pageLibrary(); }
    if (e.target.id === "clrL" && confirm(t("clearList") + "?")) { myList = []; store.set("list", myList); pageLibrary(); }
  };
}

function similarTo(x, n = 14) {
  return catalog.filter((y) => y.id !== x.id)
    .map((y) => ({ y, s: y.genres.filter((g) => x.genres.includes(g)).length * 10 - Math.abs((y.year || 1950) - (x.year || 1950)) / 10 + (y.type === x.type ? 3 : 0) }))
    .filter((o) => o.s > 0).sort((a, b) => b.s - a.s).slice(0, n).map((o) => o.y);
}

function pageTitle(id) {
  const x = byId.get(id);
  if (!x) return pageNotFound();
  app.className = "";
  const render = () => {
    const p = pct(x.id);
    app.innerHTML = `<section class="detail-hero">
      <div class="hero-bg" style="background-image:url('${esc(x.poster)}')"></div>
      <div class="detail-inner">
        <div class="detail-poster"><img src="${esc(x.poster)}" alt="${esc(x.title)} poster" /></div>
        <div class="detail-info">
          <h1>${esc(x.title)}</h1>
          <div class="meta"><span class="pill free">${t("free")}</span>${x.year ? `<span>${x.year}</span>` : ""}<span>${fmtRuntime(x.runtime)}</span>${x.genres.map((g) => `<a class="pill" href="#/discover?g=${encodeURIComponent(g)}">${esc(g)}</a>`).join("")}</div>
          <p class="desc">${esc(x.description)}</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#/watch/${encodeURIComponent(x.id)}">${I.play}${p > 0 && p < 95 ? `${t("resume")} · ${fmtTime(progress[x.id].t)}` : t("play")}</a>
            <button class="btn btn-ghost ${inList(x.id) ? "on" : ""}" id="listBtn">${inList(x.id) ? I.check : I.plus}${t("myList")}</button>
            ${p > 0 ? `<button class="btn btn-ghost" id="restart">${I.rew}Start over</button>` : ""}
          </div>
          <div class="source-note">${I.shield}<span>${esc(x.license)} · <a href="${esc(x.sourceUrl)}" target="_blank" rel="noopener">View on Internet Archive</a></span></div>
        </div>
      </div>
    </section>
    ${row(t("similar"), similarTo(x))}
    ${footer()}`;
    $("#listBtn").onclick = () => { toggleList(x.id); render(); };
    const r = $("#restart"); if (r) r.onclick = () => { removeProgress(x.id); location.hash = "#/watch/" + encodeURIComponent(x.id); };
  };
  app.onclick = null;
  render();
  scrollTo(0, 0);
}

function pageSettings() {
  app.className = "with-top";
  const accents = [["gold", "#f2b233"], ["red", "#ef3b36"], ["green", "#22b866"], ["blue", "#4c8dff"], ["violet", "#a374ff"]];
  app.innerHTML = `<div class="page settings">
    <h1 class="page-title">${t("settings")}</h1>
    <div class="set-group"><h3>Appearance</h3>
      <div class="set-row"><div><b>Accent colour</b><small>Used for buttons, progress and highlights</small></div>
        <div class="swatches">${accents.map(([k, c]) => `<button class="swatch ${prefs.accent === k ? "on" : ""}" style="background:${c}" data-accent="${k}" aria-label="${k}"></button>`).join("")}</div></div>
      <div class="set-row"><div><b>Language · ቋንቋ</b><small>Interface language</small></div>
        <div class="seg"><button data-lang="en" class="${prefs.lang === "en" ? "on" : ""}">English</button><button data-lang="am" class="${prefs.lang === "am" ? "on" : ""}">አማርኛ</button></div></div>
    </div>
    <div class="set-group"><h3>Playback</h3>
      <div class="set-row"><div><b>Autoplay next title</b><small>Start a similar title when one ends</small></div>
        <button class="switch" role="switch" aria-checked="${prefs.autoplay}" id="autoplay" aria-label="Autoplay next"></button></div>
      <div class="set-row"><div><b>Default speed</b></div>
        <select class="select" id="speed">${[0.75, 1, 1.25, 1.5, 2].map((s) => `<option ${prefs.speed === s ? "selected" : ""} value="${s}">${s}×</option>`).join("")}</select></div>
    </div>
    <div class="set-group"><h3>Data</h3>
      <div class="set-row"><div><b>${t("clearHistory")}</b><small>${Object.keys(progress).length} titles</small></div><button class="btn btn-sm btn-dark" id="clrH">Clear</button></div>
      <div class="set-row"><div><b>${t("clearList")}</b><small>${myList.length} titles</small></div><button class="btn btn-sm btn-dark" id="clrL">Clear</button></div>
    </div>
    <div class="set-group"><h3>About</h3>
      <div class="set-row about"><div>Habesha Stream is free, has no ads and needs no account. Every title is in the public domain or under a Creative Commons licence
      and streams directly from the Internet Archive, so you can watch knowing it is legal. Keyboard: <b>Space</b> play/pause, <b>←/→</b> seek 10s, <b>F</b> fullscreen, <b>M</b> mute.</div></div>
    </div>
  </div>`;
  app.onclick = (e) => {
    const a = e.target.closest("[data-accent]");
    if (a) { prefs.accent = a.dataset.accent; savePrefs(); applyTheme(); pageSettings(); }
    const l = e.target.closest("[data-lang]");
    if (l) { prefs.lang = l.dataset.lang; savePrefs(); applyTheme(); renderNav(); pageSettings(); }
    if (e.target.id === "autoplay") { prefs.autoplay = !prefs.autoplay; savePrefs(); e.target.setAttribute("aria-checked", prefs.autoplay); }
    if (e.target.id === "clrH") { progress = {}; store.set("progress", progress); toast("History cleared"); pageSettings(); }
    if (e.target.id === "clrL") { myList = []; store.set("list", myList); toast("List cleared"); pageSettings(); }
  };
  $("#speed").onchange = (e) => { prefs.speed = +e.target.value; savePrefs(); };
}

function pageNotFound() {
  app.className = "with-top";
  app.onclick = null;
  app.innerHTML = `<div class="empty">${I.film}<h3>Title not found</h3><p><a class="btn btn-primary" href="#/">${t("home")}</a></p></div>`;
}

/* ---------------- Player ---------------- */
let playerCleanup = null;
function pageWatch(id) {
  const x = byId.get(id);
  if (!x) return pageNotFound();
  app.className = "";
  app.onclick = null;
  const start = progress[x.id] && pct(x.id) < 95 ? progress[x.id].t : 0;
  const next = similarTo(x, 1)[0];

  app.innerHTML = `<div class="player" id="player">
    <video id="vid" playsinline preload="auto" poster="${esc(x.poster)}" src="${esc(x.src)}"></video>
    <div class="pl-spinner" id="spin" hidden></div>
    <div class="pl-ui">
      <div class="pl-top">
        <button class="icon-btn" id="plBack" aria-label="Back">${I.back}</button>
        <div><h2>${esc(x.title)}</h2><small>${x.year ?? ""} · ${esc(x.license)}</small></div>
      </div>
      <div class="pl-center">
        <button class="skip" id="plRew" aria-label="Back 10 seconds">${I.rew}<em>10</em></button>
        <button class="big" id="plPlay" aria-label="Play">${I.play}</button>
        <button class="skip" id="plFwd" aria-label="Forward 10 seconds">${I.fwd}<em>10</em></button>
      </div>
      <div class="pl-bottom">
        <div class="pl-seek" id="seek" role="slider" aria-label="Seek" tabindex="0">
          <div class="track"><div class="buf" id="buf"></div><div class="played" id="played"></div></div>
          <div class="knob" id="knob"></div><div class="tip" id="tip" hidden></div>
        </div>
        <div class="pl-controls">
          <span class="time" id="time">0:00 / ${fmtTime(x.runtime)}</span>
          <span class="spacer"></span>
          <button class="icon-btn vol" id="plMute" aria-label="Mute">${I.vol}</button>
          <input class="vol" type="range" id="volume" min="0" max="1" step="0.05" value="${store.get("vol", 1)}" aria-label="Volume" />
          <button class="icon-btn speed" id="plSpeed" aria-label="Playback speed">${prefs.speed}×</button>
          ${document.pictureInPictureEnabled ? `<button class="icon-btn" id="plPip" aria-label="Picture in picture">${I.pip}</button>` : ""}
          <button class="icon-btn" id="plFull" aria-label="Fullscreen">${I.full}</button>
        </div>
      </div>
    </div>
    <div class="pl-loading" id="loading">
      <div class="hero-bg" style="background-image:url('${esc(x.poster)}')"></div>
      <div class="pl-loading-inner">
        <img class="art" src="${esc(x.poster)}" alt="" />
        <div class="fill-title" id="fill">${esc(x.title)}<span aria-hidden="true">${esc(x.title)}</span></div>
        <div class="status" id="status">${t("loading")}</div>
        <div class="ghost-bar" id="ghost"></div>
      </div>
    </div>
  </div>`;

  const P = $("#player"), v = $("#vid");
  v.volume = +store.get("vol", 1);
  v.playbackRate = prefs.speed;
  let started = false, idleTimer, lastSave = 0, upnextShown = false, skipAuto = false, countdown;

  // Loading screen: title fills as buffer ahead of the start point grows; stays until playback really starts
  const fill = $("#fill");
  const updateFill = () => {
    if (started) return;
    let ahead = 0;
    for (let i = 0; i < v.buffered.length; i++) if (v.buffered.start(i) <= v.currentTime + 1 && v.buffered.end(i) > v.currentTime) ahead = v.buffered.end(i) - v.currentTime;
    const p = Math.min(100, (ahead / 8) * 100 + (v.readyState >= 2 ? 20 : 0));
    fill.style.setProperty("--p", p + "%");
    if (p > 0) $("#status").textContent = `${t("buffering")} ${Math.round(p)}%`;
  };
  const markStarted = () => {
    if (started) return;
    started = true;
    fill.style.setProperty("--p", "100%");
    setTimeout(() => $("#loading")?.classList.add("done"), 250);
  };

  const icon = () => { $("#plPlay").innerHTML = v.paused ? I.play : I.pause; $("#plPlay").setAttribute("aria-label", v.paused ? "Play" : "Pause"); };
  const save = (force) => {
    if (!v.duration || (!force && Date.now() - lastSave < 4000)) return;
    lastSave = Date.now();
    progress[x.id] = { t: v.currentTime, d: v.duration, at: Date.now() };
    store.set("progress", progress);
  };
  const draw = () => {
    const d = v.duration || x.runtime || 1;
    const p = (v.currentTime / d) * 100;
    $("#played").style.width = p + "%"; $("#knob").style.left = p + "%";
    if (v.buffered.length) $("#buf").style.width = (v.buffered.end(v.buffered.length - 1) / d) * 100 + "%";
    $("#time").textContent = `${fmtTime(v.currentTime)} / ${fmtTime(d)}`;
  };
  const wake = () => {
    P.classList.remove("idle"); clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { if (!v.paused) P.classList.add("idle"); }, 3000);
  };

  v.addEventListener("loadedmetadata", () => { if (start && start < v.duration - 5) v.currentTime = start; draw(); });
  v.addEventListener("progress", () => { updateFill(); draw(); });
  v.addEventListener("canplay", () => { updateFill(); v.play().catch(() => { $("#status").textContent = "Tap play to start"; markStarted(); }); });
  v.addEventListener("playing", () => { markStarted(); $("#spin").hidden = true; icon(); wake(); });
  v.addEventListener("waiting", () => { if (started) $("#spin").hidden = false; });
  v.addEventListener("play", icon);
  v.addEventListener("pause", () => { icon(); wake(); save(true); });
  v.addEventListener("timeupdate", () => {
    draw(); save();
    if (next && prefs.autoplay && v.duration && v.duration - v.currentTime < 20 && !upnextShown) showUpNext();
  });
  v.addEventListener("ended", () => { save(true); if (next && prefs.autoplay && !skipAuto) location.hash = "#/watch/" + encodeURIComponent(next.id); });
  v.addEventListener("error", () => {
    P.insertAdjacentHTML("beforeend", `<div class="pl-error"><div><h3>This stream isn't available right now</h3>
      <p>The Internet Archive may be busy. Try again in a moment, or open the title at the source.</p>
      <div class="btn-row" style="justify-content:center"><button class="btn btn-primary" id="retry">Try again</button>
      <a class="btn btn-ghost" href="${esc(x.sourceUrl)}" target="_blank" rel="noopener">Open source</a></div></div></div>`);
    $("#retry").onclick = () => pageWatch(id);
  });

  function showUpNext() {
    upnextShown = true;
    P.insertAdjacentHTML("beforeend", `<div class="upnext" id="upnext"><img src="${esc(next.poster)}" alt="" />
      <div><small>${t("upNext")} · <span id="cd">20</span>s</small><strong>${esc(next.title)}</strong>
      <div class="btn-row"><a class="btn btn-sm btn-primary" href="#/watch/${encodeURIComponent(next.id)}">${t("playNow")}</a>
      <button class="btn btn-sm btn-dark" id="unx">${I.x}</button></div></div></div>`);
    countdown = setInterval(() => { const el = $("#cd"); if (el) el.textContent = Math.max(0, Math.ceil(v.duration - v.currentTime)); }, 500);
    $("#unx").onclick = () => { $("#upnext").remove(); clearInterval(countdown); skipAuto = true; };
  }

  const toggle = () => (v.paused ? v.play() : v.pause());
  const seekBy = (s) => { v.currentTime = Math.max(0, Math.min((v.duration || 0) - 0.5, v.currentTime + s)); draw(); wake(); };
  const fullscreen = () => (document.fullscreenElement ? document.exitFullscreen() : P.requestFullscreen?.().catch(() => {}));

  $("#plPlay").onclick = toggle;
  $("#plRew").onclick = () => seekBy(-10);
  $("#plFwd").onclick = () => seekBy(10);
  $("#plFull").onclick = fullscreen;
  $("#plBack").onclick = () => (history.length > 1 ? history.back() : (location.hash = "#/title/" + encodeURIComponent(x.id)));
  $("#plMute").onclick = () => { v.muted = !v.muted; $("#plMute").innerHTML = v.muted ? I.mute : I.vol; };
  $("#volume").oninput = (e) => { v.volume = +e.target.value; v.muted = false; store.set("vol", v.volume); };
  const speeds = [0.75, 1, 1.25, 1.5, 2];
  $("#plSpeed").onclick = () => { v.playbackRate = speeds[(speeds.indexOf(v.playbackRate) + 1) % speeds.length] || 1; $("#plSpeed").textContent = v.playbackRate + "×"; };
  const pip = $("#plPip"); if (pip) pip.onclick = () => (document.pictureInPictureElement ? document.exitPictureInPicture() : v.requestPictureInPicture().catch(() => {}));

  // Tap video to toggle UI on touch; click to play/pause on desktop. Double-tap sides to seek.
  let lastTap = 0;
  v.addEventListener("click", (e) => {
    const now = Date.now();
    if (now - lastTap < 300) { seekBy(e.offsetX < v.clientWidth / 2 ? -10 : 10); lastTap = 0; return; }
    lastTap = now;
    if (matchMedia("(hover: none)").matches) { P.classList.contains("idle") ? wake() : P.classList.add("idle"); } else toggle();
  });
  P.addEventListener("pointermove", wake);

  // Seek bar with drag + hover tooltip
  const seek = $("#seek"), tip = $("#tip");
  const posToTime = (e) => { const r = seek.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * (v.duration || x.runtime); };
  let dragging = false;
  seek.addEventListener("pointerdown", (e) => { dragging = true; seek.setPointerCapture(e.pointerId); v.currentTime = posToTime(e); draw(); });
  seek.addEventListener("pointermove", (e) => {
    const tm = posToTime(e), r = seek.getBoundingClientRect();
    tip.hidden = false; tip.textContent = fmtTime(tm); tip.style.left = e.clientX - r.left + "px";
    if (dragging) { v.currentTime = tm; draw(); }
  });
  seek.addEventListener("pointerup", () => { dragging = false; save(true); });
  seek.addEventListener("pointerleave", () => (tip.hidden = true));

  const onKey = (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
    const k = e.key.toLowerCase();
    if (k === " " || k === "k") { e.preventDefault(); toggle(); }
    else if (k === "arrowleft" || k === "j") seekBy(-10);
    else if (k === "arrowright" || k === "l") seekBy(10);
    else if (k === "f") fullscreen();
    else if (k === "m") $("#plMute").click();
    else if (k === "escape" && !document.fullscreenElement) $("#plBack").click();
    else return;
    wake();
  };
  document.addEventListener("keydown", onKey);
  const onHide = () => save(true);
  addEventListener("pagehide", onHide);

  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({ title: x.title, artist: "Habesha Stream", artwork: [{ src: x.poster }] });
    navigator.mediaSession.setActionHandler("seekbackward", () => seekBy(-10));
    navigator.mediaSession.setActionHandler("seekforward", () => seekBy(10));
  }

  playerCleanup = () => {
    save(true); v.pause(); v.removeAttribute("src"); v.load();
    clearTimeout(idleTimer); clearInterval(countdown);
    document.removeEventListener("keydown", onKey);
    removeEventListener("pagehide", onHide);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };
}

/* ---------------- Search ---------------- */
function openSearch() {
  const o = $("#searchOverlay"), inp = $("#searchInput");
  o.hidden = false; document.body.style.overflow = "hidden"; inp.value = ""; renderSearch(""); inp.focus();
}
function closeSearch() { $("#searchOverlay").hidden = true; document.body.style.overflow = ""; }
function renderSearch(q) {
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const n = norm(q.trim());
  const box = $("#searchResults");
  if (!n) {
    const picks = shuffleSeeded(catalog, daySeed + 3).slice(0, 12);
    box.innerHTML = `<h3>Popular searches</h3><div class="chips" style="flex-wrap:wrap;margin-bottom:24px">${genres().map((g) => `<button class="chip" data-q="${esc(g)}">${esc(g)}</button>`).join("")}</div>
      <h3>Suggested for you</h3><div class="grid">${picks.map((x) => card(x)).join("")}</div>`;
    return;
  }
  const scored = catalog.map((x) => {
    const tt = norm(x.title); let s = 0;
    if (tt.startsWith(n)) s += 100; else if (tt.includes(n)) s += 60;
    if (x.genres.some((g) => norm(g).startsWith(n))) s += 40;
    if (String(x.year).startsWith(n)) s += 30;
    if (norm(x.description).includes(n)) s += 10;
    return { x, s };
  }).filter((o) => o.s > 0).sort((a, b) => b.s - a.s).map((o) => o.x);
  box.innerHTML = scored.length ? `<h3>${scored.length} ${t("results")}</h3><div class="grid">${scored.map((x) => card(x)).join("")}</div>`
    : `<div class="empty">${I.film}<h3>${t("noResults")}</h3><p>${t("tryElse")}</p></div>`;
}
$("#searchBtn").onclick = openSearch;
$("#searchClose").onclick = closeSearch;
$("#searchInput").oninput = (e) => renderSearch(e.target.value);
$("#searchResults").onclick = (e) => {
  const c = e.target.closest("[data-q]");
  if (c) { $("#searchInput").value = c.dataset.q; renderSearch(c.dataset.q); return; }
  if (e.target.closest("a.card")) closeSearch();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("#searchOverlay").hidden) closeSearch();
  if (e.key === "/" && $("#searchOverlay").hidden && !location.hash.startsWith("#/watch") && document.activeElement.tagName !== "INPUT") { e.preventDefault(); openSearch(); }
});

/* ---------------- Router ---------------- */
function route() {
  if (playerCleanup) { playerCleanup(); playerCleanup = null; }
  clearInterval(heroTimer);
  const [path, qs] = location.hash.slice(1).split("?");
  const parts = (path || "/").split("/").filter(Boolean);
  const params = new URLSearchParams(qs || "");
  const watching = parts[0] === "watch";
  $("#topbar").hidden = watching; $("#bottomnav").hidden = watching;
  renderNav();
  switch (parts[0]) {
    case undefined: pageHome(); break;
    case "discover": pageDiscover(params); break;
    case "library": pageLibrary(); break;
    case "settings": pageSettings(); break;
    case "title": pageTitle(decodeURIComponent(parts[1] || "")); break;
    case "watch": pageWatch(decodeURIComponent(parts[1] || "")); break;
    default: pageNotFound();
  }
  if (parts[0] !== "title") scrollTo(0, 0);
}

async function boot() {
  renderNav();
  app.innerHTML = `<div class="hero skel"></div>`;
  try {
    const res = await fetch("/assets/data/catalog.json");
    catalog = await res.json();
  } catch {
    app.innerHTML = `<div class="empty with-top" style="padding-top:140px">${I.film}<h3>Couldn't load the catalog</h3><p>Check your connection and refresh.</p></div>`;
    return;
  }
  catalog.forEach((x) => byId.set(x.id, x));
  addEventListener("hashchange", route);
  route();
}
boot();
