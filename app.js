// GTÜ İKT201 Mikroiktisat I — İnteraktif Uygulama ve 4 Canlı SVG Simülatörü
// Her grafik ve uygulama sorusu doğrudan ilgili Ders Modülü (Modül 1–5) ile çift yönlü bağlıdır.

const state = {
  mode: 'modules', // 'modules' | 'simulators' | 'practice' | 'critiques' | 'quiz'
  activeModuleId: 'm1',
  activeSimId: 'sim1',
  practiceFilter: 'all',
  hintsOpen: {}, // problemId -> count (0..5)
  solutionsOpen: {}, // problemId -> bool
  solvedProblems: JSON.parse(localStorage.getItem('mikro_solved') || '{}'),
  quizAnswers: JSON.parse(localStorage.getItem('mikro_quiz') || '{}'),

  // Sim 1: Modül 3 Grafiği — Kayıtsızlık Eğrisi & Özel Tercihler
  sim1: { type: 'cobb', a: 1, b: 1, u0: 12, xProbe: 3 },

  // Sim 2: Modül 4 Grafiği — Fayda Maksimizasyonu & Lagrange
  sim2: { type: 'cobb', px: 1, py: 2, income: 80, a: 3, b: 1 },

  // Sim 3: Modül 4 (Uyg. S.2) Grafiği — Deniz & Efe Tam İkame Sınav Tuzağı
  sim3: { p1: 2, p2: 1, income: 10 },

  // Sim 4: Modül 5 Grafiği — Bireysel Talep Eğrisi: Hareket vs Kayma
  sim4: { px: 4, income: 100, py: 5, taste: 0, incomeType: 'normal', relatedType: 'substitute' }
};

function saveState() {
  try {
    localStorage.setItem('mikro_solved', JSON.stringify(state.solvedProblems));
    localStorage.setItem('mikro_quiz', JSON.stringify(state.quizAnswers));
  } catch (_) {}
}

function jumpToModule(moduleId) {
  state.mode = 'modules';
  state.activeModuleId = moduleId;
  syncHeaderButtons();
  renderSidebar();
  renderStage();
  window.scrollTo(0, 0);
}

function jumpToSim(simId, presetKey) {
  state.mode = 'simulators';
  state.activeSimId = simId;
  if (simId === 'sim1' && presetKey) {
    if (presetKey === 'not') { state.sim1 = { type: 'cobb', a: 1, b: 1, u0: 12, xProbe: 3 }; }
    else if (presetKey === 'jeans') { state.sim1 = { type: 'complement', a: 3, b: 1, u0: 12, xProbe: 3 }; }
  } else if (simId === 'sim2' && presetKey) {
    if (presetKey === 's10') { state.sim2 = { type: 'cobb', px: 1, py: 2, income: 80, a: 3, b: 1 }; }
    else if (presetKey === 'p9') { state.sim2 = { type: 'cobb', px: 2, py: 1, income: 100, a: 0.5, b: 0.5 }; }
    else if (presetKey === 'p10') { state.sim2 = { type: 'cobb', px: 2, py: 1, income: 30, a: 0.5, b: 0.5 }; }
  } else if (simId === 'sim3' && presetKey) {
    if (presetKey === 'note') { state.sim3 = { p1: 2, p2: 1, income: 10 }; }
  }
  syncHeaderButtons();
  renderSidebar();
  renderStage();
  window.scrollTo(0, 0);
}

function jumpToPracticeByModule(moduleId) {
  state.mode = 'practice';
  state.practiceFilter = moduleId || 'all';
  syncHeaderButtons();
  renderSidebar();
  renderStage();
  window.scrollTo(0, 0);
}

function updateProgressUI() {
  const solvedCount = Object.values(state.solvedProblems).filter(Boolean).length;
  const totalProb = MIKRO_PROBLEMS.length;
  const pct = Math.round((solvedCount / totalProb) * 100);
  const pText = document.getElementById('progress-text');
  const pFill = document.getElementById('progress-fill');
  if (pText) pText.textContent = `${solvedCount} / ${totalProb} Problem (%${pct})`;
  if (pFill) pFill.style.width = `${pct}%`;

  const correctCount = MIKRO_QUIZ.reduce((acc, q, idx) => {
    return acc + (state.quizAnswers[idx] === q.answer ? 1 : 0);
  }, 0);
  const qText = document.getElementById('quiz-progress-text');
  if (qText) qText.textContent = `Sınav Testi: ${correctCount} / ${MIKRO_QUIZ.length} Doğru`;
}

function renderSidebar() {
  const nav = document.getElementById('module-nav');
  if (!nav) return;
  nav.innerHTML = MIKRO_MODULES.map(m => {
    const probCount = (m.relatedProblems || []).length;
    return `
      <button class="chapter-btn ${state.mode === 'modules' && state.activeModuleId === m.id ? 'active' : ''}" data-module="${m.id}">
        <div class="chapter-btn-top">
          <span>${m.number}</span>
          <span>${m.pages} ${probCount > 0 ? `• ${probCount} Uyg.` : ''}</span>
        </div>
        <div class="chapter-btn-title">${m.title}</div>
      </button>
    `;
  }).join('');

  nav.querySelectorAll('.chapter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      jumpToModule(btn.dataset.module);
    });
  });
}

function syncHeaderButtons() {
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === state.mode);
  });
}

function renderStage() {
  const stage = document.getElementById('main-stage');
  if (!stage) return;
  if (state.mode === 'modules') renderModulesView(stage);
  else if (state.mode === 'simulators') renderSimulatorsView(stage);
  else if (state.mode === 'practice') renderPracticeView(stage);
  else if (state.mode === 'critiques') renderCritiquesView(stage);
  else if (state.mode === 'quiz') renderQuizView(stage);
  updateProgressUI();
}

// ==========================================
// 1. DERS MODÜLLERİ (GÖMÜLÜ GRAFİKLER + MODÜL SİMÜLATÖR/UYGULAMA BAĞLANTILARI)
// ==========================================
function renderModulesView(stage) {
  const mod = MIKRO_MODULES.find(m => m.id === state.activeModuleId) || MIKRO_MODULES[0];
  const idx = MIKRO_MODULES.findIndex(m => m.id === mod.id);
  const prev = idx > 0 ? MIKRO_MODULES[idx - 1] : null;
  const next = idx < MIKRO_MODULES.length - 1 ? MIKRO_MODULES[idx + 1] : null;
  const modProblems = MIKRO_PROBLEMS.filter(p => p.moduleId === mod.id);

  stage.innerHTML = `
    <div class="stage-header">
      <div class="stage-kicker">${mod.number} • ${mod.pages}</div>
      <h1 class="stage-title">${mod.title}</h1>
      <p class="stage-desc">${mod.summary}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;">
        <button class="mini-jump-btn" id="mod-open-sim">🎛️ ${mod.simLabel} →</button>
        ${modProblems.length > 0 ? `<button class="mini-jump-btn" id="mod-open-probs">📝 ${mod.number} Uygulama Sorularını Gör (${modProblems.length} Soru) →</button>` : ''}
      </div>
    </div>

    ${mod.sections.map(sec => `
      <section class="card">
        <div class="card-title">
          <span>${sec.title}</span>
          <span class="badge badge-${sec.badgeType}">${sec.badge}</span>
        </div>
        ${sec.html}
      </section>
    `).join('')}

    <section class="card" style="border-color:rgba(212,175,55,0.4);">
      <div class="card-title">
        <span>🔗 ${mod.number} İle Bağlantılı Grafikler &amp; Uygulama Soruları</span>
        <span class="badge badge-gold">${mod.number} Bağlantı Haritası</span>
      </div>
      <p style="font-size:13.5px;color:var(--text-secondary);margin-bottom:12px;">Bu modülün canlı interaktif grafiğini açabilir veya doğrudan bu modüle ait uygulama sorularına geçebilirsin:</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:${modProblems.length ? '14px' : '0'};">
        <button class="btn btn-gold" id="mod-bottom-sim">📊 Canlı Grafikte Test Et: ${mod.simLabel}</button>
        ${modProblems.length ? `<button class="btn btn-emerald" id="mod-bottom-probs">✍️ ${mod.number} Uygulama Sorularını Çöz (${modProblems.length} Problem)</button>` : ''}
      </div>
      ${modProblems.length ? `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;">
          ${modProblems.map(p => `
            <div style="background:var(--bg-main);border:1px solid var(--border-subtle);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;justify-content:space-between;gap:8px;">
              <div>
                <div style="font-size:11px;color:var(--accent-gold);font-family:var(--font-mono);">${p.moduleLabel} • ${p.pageRef}</div>
                <div style="font-size:13.5px;font-weight:600;color:var(--text-primary);margin-top:3px;">${p.title}</div>
              </div>
              <button class="mini-jump-btn" data-jump-prob="${p.moduleId}">Soruya &amp; Grafiğine Git →</button>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </section>

    <div style="display:flex;justify-content:space-between;gap:12px;margin-top:24px;flex-wrap:wrap;">
      ${prev ? `<button class="btn" id="btn-prev-mod">← ${prev.number}: ${prev.title}</button>` : '<span></span>'}
      ${next ? `<button class="btn btn-gold" id="btn-next-mod">${next.number}: ${next.title} →</button>` : `<button class="btn btn-emerald" id="btn-go-sim">🎛️ Tüm Canlı Simülatörlere Geç →</button>`}
    </div>
  `;

  document.getElementById('mod-open-sim').addEventListener('click', () => jumpToSim(mod.simId));
  document.getElementById('mod-bottom-sim').addEventListener('click', () => jumpToSim(mod.simId));
  const openProbs = document.getElementById('mod-open-probs');
  if (openProbs) openProbs.addEventListener('click', () => jumpToPracticeByModule(mod.id));
  const bottomProbs = document.getElementById('mod-bottom-probs');
  if (bottomProbs) bottomProbs.addEventListener('click', () => jumpToPracticeByModule(mod.id));
  stage.querySelectorAll('[data-jump-prob]').forEach(b => {
    b.addEventListener('click', () => jumpToPracticeByModule(b.dataset.jumpProb));
  });

  const prevBtn = document.getElementById('btn-prev-mod');
  if (prevBtn) prevBtn.addEventListener('click', () => jumpToModule(prev.id));
  const nextBtn = document.getElementById('btn-next-mod');
  if (nextBtn) nextBtn.addEventListener('click', () => jumpToModule(next.id));
  const goSim = document.getElementById('btn-go-sim');
  if (goSim) goSim.addEventListener('click', () => jumpToSim('sim1'));
}

// ==========================================
// 2. CANLI İNTERAKTİF SVG SİMÜLATÖRLERİ (MODÜL KİMLİK BANTLI)
// ==========================================
function renderSimulatorsView(stage) {
  const tabs = [
    { id: 'sim1', label: '📊 Modül 3 Grafiği: Kayıtsızlık Eğrisi & MİO Teğeti' },
    { id: 'sim2', label: '📊 Modül 4 Grafiği: Bütçe Kısıtı, Fayda Maks. & Lagrange' },
    { id: 'sim3', label: '📊 Modül 4 (Uyg. P2) Grafiği: Deniz & Efe Tam İkame Tuzağı' },
    { id: 'sim4', label: '📊 Modül 5 Grafiği: Talep Eğrisi Hareket vs. Kayma' }
  ];

  stage.innerHTML = `
    <div class="stage-header">
      <div class="stage-kicker">İNTERAKTİF SVG LABORATUVARI • MODÜL EŞLEŞTİRMELİ GRAFİKLER</div>
      <h1 class="stage-title">4 Canlı Mikroiktisat Grafik Simülatörü</h1>
      <p class="stage-desc">Her grafikte hangi Ders Modülüne ve hangi Uygulama Sorusuna ait olduğu üst bantta belirtilmiştir; tek tıkla ilgili modüle veya soruya geçebilirsin.</p>
    </div>

    <div class="subtabs">
      ${tabs.map(t => `<button class="subtab-btn ${state.activeSimId === t.id ? 'active' : ''}" data-sim="${t.id}">${t.label}</button>`).join('')}
    </div>

    <div id="sim-container"></div>
  `;

  stage.querySelectorAll('.subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeSimId = btn.dataset.sim;
      renderSimulatorsView(stage);
    });
  });

  const container = document.getElementById('sim-container');
  if (state.activeSimId === 'sim1') renderSim1(container);
  else if (state.activeSimId === 'sim2') renderSim2(container);
  else if (state.activeSimId === 'sim3') renderSim3(container);
  else if (state.activeSimId === 'sim4') renderSim4(container);
}

// --- SVG HELPERS ---
function svgGridAxes(W, H, pad, maxX, maxY, xLabel, yLabel, stepX, stepY) {
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;
  const sx = x => pad.l + (x / maxX) * plotW;
  const sy = y => H - pad.b - (y / maxY) * plotH;

  let grid = '';
  for (let x = 0; x <= maxX; x += stepX) {
    const px = sx(x);
    grid += `<line x1="${px}" y1="${pad.t}" x2="${px}" y2="${H - pad.b}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
    if (x > 0) grid += `<text x="${px}" y="${H - pad.b + 16}" fill="#787773" font-size="11" text-anchor="middle" font-family="JetBrains Mono">${x}</text>`;
  }
  for (let y = 0; y <= maxY; y += stepY) {
    const py = sy(y);
    grid += `<line x1="${pad.l}" y1="${py}" x2="${W - pad.r}" y2="${py}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
    if (y > 0) grid += `<text x="${pad.l - 8}" y="${py + 4}" fill="#787773" font-size="11" text-anchor="end" font-family="JetBrains Mono">${y}</text>`;
  }

  const axes = `
    <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${H - pad.b}" stroke="#b5b3ad" stroke-width="1.5"/>
    <line x1="${pad.l}" y1="${H - pad.b}" x2="${W - pad.r}" y2="${H - pad.b}" stroke="#b5b3ad" stroke-width="1.5"/>
    <text x="${W - pad.r}" y="${H - 8}" fill="#d4af37" font-size="12" text-anchor="end" font-weight="600">${xLabel}</text>
    <text x="${pad.l + 6}" y="${pad.t - 8}" fill="#d4af37" font-size="12" text-anchor="start" font-weight="600">${yLabel}</text>
  `;
  return { sx, sy, grid, axes };
}

// --- SIM 1: MODÜL 3 GRAFİĞİ — KAYITSIZLIK EĞRİSİ & MİO TEĞETİ ---
function renderSim1(container) {
  const s = state.sim1;
  container.innerHTML = `
    <div class="graph-id-bar">
      <div class="graph-id-left">
        <span class="badge badge-gold">MODÜL 3 GRAFİĞİ</span>
        <span>Kayıtsızlık Eğrileri, Noktasal MİO Teğeti &amp; Özel Tercihler</span>
        <span class="badge badge-sky">Ders Notu S.4–6 &amp; Uygulama S.4–7 (Problem 4–7)</span>
      </div>
      <div class="graph-id-actions">
        <button class="mini-jump-btn" id="s1-go-mod">📘 Modül 3 Konu Anlatımını Aç</button>
        <button class="mini-jump-btn" id="s1-go-prob">📝 Modül 3 Sorularını Aç (P4–P7)</button>
      </div>
    </div>

    <div class="sim-grid">
      <div class="sim-controls">
        <div class="control-group">
          <label class="control-label">Tercih Tipi (Modül 3)</label>
          <select class="sim-select" id="s1-type">
            <option value="cobb" ${s.type === 'cobb' ? 'selected' : ''}>Cobb-Douglas (Modül 3 S.4 &amp; Uyg. P7-①)</option>
            <option value="substitute" ${s.type === 'substitute' ? 'selected' : ''}>Tam İkame: Kola-Pepsi (Modül 3 S.6)</option>
            <option value="complement" ${s.type === 'complement' ? 'selected' : ''}>Tam Tamamlayıcı: Ayakkabı / Jeans-Tişört (Modül 3 S.6 &amp; P7-④)</option>
            <option value="bad" ${s.type === 'bad' ? 'selected' : ''}>Kötü Mal: Dondurma-Mantar (Modül 3 • Uyg. P7-②)</option>
            <option value="neutral" ${s.type === 'neutral' ? 'selected' : ''}>Nötr Mal: Gevrek-Yulaf (Modül 3 • Uyg. P7-③)</option>
          </select>
        </div>

        <div class="control-group">
          <label class="control-label"><span>Parametre a</span><span class="control-val" id="s1-a-val">${s.a}</span></label>
          <input type="range" id="s1-a" min="0.5" max="4" step="0.5" value="${s.a}">
        </div>

        <div class="control-group">
          <label class="control-label"><span>Parametre b</span><span class="control-val" id="s1-b-val">${s.b}</span></label>
          <input type="range" id="s1-b" min="0.5" max="4" step="0.5" value="${s.b}">
        </div>

        <div class="control-group">
          <label class="control-label"><span>Fayda Düzeyi (U₀)</span><span class="control-val" id="s1-u-val">${s.u0}</span></label>
          <input type="range" id="s1-u" min="4" max="24" step="2" value="${s.u0}">
        </div>

        <div class="control-group">
          <label class="control-label"><span>Teğet Noktası x₁</span><span class="control-val" id="s1-x-val">${s.xProbe}</span></label>
          <input type="range" id="s1-x" min="1" max="10" step="0.5" value="${s.xProbe}">
        </div>

        <div class="preset-row">
          <button class="preset-btn" data-p="not">Modül 3 • S.4 (x·y=12)</button>
          <button class="preset-btn" data-p="jeans">Modül 3 • P7-④ min(3x,y)</button>
          <button class="preset-btn" data-p="bad">Modül 3 • P7-② Kötü Mal</button>
          <button class="preset-btn" data-p="neutral">Modül 3 • P7-③ Nötr Mal</button>
        </div>
      </div>

      <div class="sim-canvas-card">
        <div class="embedded-graph-header" style="margin-bottom:10px;">
          <span class="embedded-graph-title">📊 Canlı Grafik: Kayıtsızlık Eğrileri &amp; Noktasal MİO Teğeti</span>
          <span class="embedded-graph-mod">Modül 3 • Ders Notu Sayfa 4–6 &amp; Uygulama Problem 4–7</span>
        </div>
        <div class="svg-frame" id="s1-svg-wrap"></div>
        <div class="kpi-row" id="s1-kpis"></div>
      </div>
    </div>
  `;

  document.getElementById('s1-go-mod').addEventListener('click', () => jumpToModule('m3'));
  document.getElementById('s1-go-prob').addEventListener('click', () => jumpToPracticeByModule('m3'));

  const update = () => {
    const W = 620, H = 380, pad = { l: 48, r: 24, t: 28, b: 40 };
    const maxX = 12, maxY = 12;
    const { sx, sy, grid, axes } = svgGridAxes(W, H, pad, maxX, maxY, 'x₁ (İyi Mal)', 'x₂', 2, 2);

    let paths = '';
    let tangent = '';
    let formula = '';
    let mioText = '';
    let dirText = '';
    let probeY = null;

    if (s.type === 'cobb') {
      formula = `U(x₁, x₂) = x₁^${s.a} · x₂^${s.b}`;
      dirText = 'Sağ-Yukarı (↗)';
      const levels = [Math.max(2, s.u0 * 0.5), s.u0, s.u0 * 1.6];
      const colors = ['rgba(56,189,248,0.45)', '#d4af37', 'rgba(46,160,107,0.55)'];
      levels.forEach((U, idx) => {
        let d = '';
        for (let x = 0.4; x <= maxX; x += 0.2) {
          const y = Math.pow(U / Math.pow(x, s.a), 1 / s.b);
          if (y > 0 && y <= maxY) {
            d += (d === '' ? 'M' : 'L') + `${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
          }
        }
        paths += `<path d="${d}" fill="none" stroke="${colors[idx]}" stroke-width="${idx === 1 ? 3 : 1.8}" ${idx !== 1 ? 'stroke-dasharray="5,4"' : ''}/>`;
      });

      probeY = Math.pow(s.u0 / Math.pow(s.xProbe, s.a), 1 / s.b);
      const mio = (s.a / s.b) * (probeY / s.xProbe);
      mioText = mio.toFixed(2);
      if (probeY <= maxY && probeY > 0) {
        const xA = Math.max(0.2, s.xProbe - 2);
        const yA = probeY + mio * (s.xProbe - xA);
        const xB = Math.min(maxX, s.xProbe + 2);
        const yB = probeY - mio * (xB - s.xProbe);
        tangent = `
          <line x1="${sx(xA)}" y1="${sy(yA)}" x2="${sx(xB)}" y2="${sy(yB)}" stroke="#e03e52" stroke-width="2" stroke-dasharray="4,3"/>
          <circle cx="${sx(s.xProbe)}" cy="${sy(probeY)}" r="5.5" fill="#e03e52" stroke="#fff" stroke-width="1.5"/>
          <text x="${sx(s.xProbe) + 8}" y="${sy(probeY) - 8}" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">(${s.xProbe}, ${probeY.toFixed(2)}) |MİO|=${mio.toFixed(2)}</text>
        `;
      }
    } else if (s.type === 'substitute') {
      formula = `U(x₁, x₂) = ${s.a}x₁ + ${s.b}x₂`;
      dirText = 'Sağ-Yukarı (↗)';
      const levels = [s.u0 * 0.6, s.u0, s.u0 * 1.4];
      const colors = ['rgba(56,189,248,0.45)', '#d4af37', 'rgba(46,160,107,0.55)'];
      levels.forEach((U, idx) => {
        const xInt = U / s.a;
        const yInt = U / s.b;
        const y1 = Math.min(maxY, yInt);
        const xStart = yInt > maxY ? (U - s.b * maxY) / s.a : 0;
        const xEnd = Math.min(maxX, xInt);
        const yEnd = Math.max(0, (U - s.a * xEnd) / s.b);
        if (xStart <= maxX && xEnd >= 0) {
          paths += `<line x1="${sx(xStart)}" y1="${sy(y1)}" x2="${sx(xEnd)}" y2="${sy(yEnd)}" stroke="${colors[idx]}" stroke-width="${idx === 1 ? 3 : 1.8}"/>`;
        }
      });
      mioText = `${(s.a / s.b).toFixed(2)} (Sabit)`;
    } else if (s.type === 'complement') {
      formula = `U(x₁, x₂) = min(${s.a}x₁, ${s.b}x₂)`;
      dirText = 'Sağ-Yukarı (↗)';
      const levels = [s.u0 * 0.4, s.u0 * 0.6, s.u0 * 0.8];
      const colors = ['rgba(56,189,248,0.45)', '#d4af37', 'rgba(46,160,107,0.55)'];
      levels.forEach((U, idx) => {
        const cx = Math.min(maxX, U / s.a);
        const cy = Math.min(maxY, U / s.b);
        paths += `<polyline points="${sx(cx)},${sy(maxY)} ${sx(cx)},${sy(cy)} ${sx(maxX)},${sy(cy)}" fill="none" stroke="${colors[idx]}" stroke-width="${idx === 1 ? 3 : 1.8}"/>`;
        if (idx === 1) {
          tangent = `<circle cx="${sx(cx)}" cy="${sy(cy)}" r="5.5" fill="#e03e52" stroke="#fff" stroke-width="1.5"/>
          <text x="${sx(cx) + 8}" y="${sy(cy) - 8}" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">Köşe (${cx.toFixed(1)}, ${cy.toFixed(1)})</text>`;
        }
      });
      mioText = 'Tanımsız (Köşede) / 0 & ∞';
    } else if (s.type === 'bad') {
      formula = `U(x₁, x₂) = ${s.a}x₁ - ${s.b}x₂ (x₂ Kötü Mal)`;
      dirText = 'Sağ-Aşağı (↘)';
      const levels = [2, 5, 8];
      const colors = ['rgba(56,189,248,0.45)', '#d4af37', 'rgba(46,160,107,0.55)'];
      levels.forEach((U, idx) => {
        const x0 = U / s.a;
        const x1 = (U + s.b * maxY) / s.a;
        paths += `<line x1="${sx(Math.max(0, x0))}" y1="${sy(Math.max(0, (s.a * Math.max(0, x0) - U) / s.b))}" x2="${sx(Math.min(maxX, x1))}" y2="${sy(Math.min(maxY, (s.a * Math.min(maxX, x1) - U) / s.b))}" stroke="${colors[idx]}" stroke-width="${idx === 1 ? 3 : 1.8}"/>`;
      });
      mioText = `Pozitif Eğim (+${(s.a / s.b).toFixed(2)})`;
    } else if (s.type === 'neutral') {
      formula = `U(x₁, x₂) = x₁ (x₂ Nötr Mal)`;
      dirText = 'Sağa Doğru (→)';
      [3, 6, 9].forEach((xv, idx) => {
        const col = idx === 1 ? '#d4af37' : 'rgba(56,189,248,0.5)';
        paths += `<line x1="${sx(xv)}" y1="${sy(0)}" x2="${sx(xv)}" y2="${sy(maxY)}" stroke="${col}" stroke-width="${idx === 1 ? 3 : 1.8}"/>`;
      });
      mioText = '∞ (Dikey Doğru)';
    }

    document.getElementById('s1-svg-wrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${grid}${axes}${paths}${tangent}</svg>`;
    document.getElementById('s1-kpis').innerHTML = `
      <div class="kpi-box"><div class="kpi-label">Ait Olduğu Modül</div><div class="kpi-value" style="font-size:13px;color:var(--accent-sky);">Modül 3 (Sayfa 4–6)</div></div>
      <div class="kpi-box"><div class="kpi-label">Fayda Fonksiyonu</div><div class="kpi-value" style="font-size:13.5px;">${formula}</div></div>
      <div class="kpi-box"><div class="kpi-label">Noktasal |MİO|</div><div class="kpi-value" style="color:var(--accent-gold);">${mioText}</div></div>
      <div class="kpi-box"><div class="kpi-label">Tercih Artış Yönü</div><div class="kpi-value" style="color:var(--accent-emerald);">${dirText}</div></div>
    `;
  };

  ['s1-type', 's1-a', 's1-b', 's1-u', 's1-x'].forEach(id => {
    document.getElementById(id).addEventListener('input', e => {
      if (id === 's1-type') s.type = e.target.value;
      else if (id === 's1-a') { s.a = parseFloat(e.target.value); document.getElementById('s1-a-val').textContent = s.a; }
      else if (id === 's1-b') { s.b = parseFloat(e.target.value); document.getElementById('s1-b-val').textContent = s.b; }
      else if (id === 's1-u') { s.u0 = parseFloat(e.target.value); document.getElementById('s1-u-val').textContent = s.u0; }
      else if (id === 's1-x') { s.xProbe = parseFloat(e.target.value); document.getElementById('s1-x-val').textContent = s.xProbe; }
      update();
    });
  });

  container.querySelectorAll('.preset-btn').forEach(b => {
    b.addEventListener('click', () => {
      const p = b.dataset.p;
      if (p === 'not') { s.type = 'cobb'; s.a = 1; s.b = 1; s.u0 = 12; s.xProbe = 3; }
      else if (p === 'jeans') { s.type = 'complement'; s.a = 3; s.b = 1; s.u0 = 12; }
      else if (p === 'bad') { s.type = 'bad'; s.a = 1; s.b = 1; }
      else if (p === 'neutral') { s.type = 'neutral'; }
      renderSim1(container);
    });
  });

  update();
}

// --- SIM 2: MODÜL 4 GRAFİĞİ — FAYDA MAKSİMİZASYONU & LAGRANGE ---
function renderSim2(container) {
  const s = state.sim2;
  container.innerHTML = `
    <div class="graph-id-bar">
      <div class="graph-id-left">
        <span class="badge badge-gold">MODÜL 4 GRAFİĞİ</span>
        <span>Bütçe Doğrusu, Köşe Çözümler &amp; Cobb-Douglas Lagrange Maksimizasyonu</span>
        <span class="badge badge-sky">Ders Notu S.7–10 &amp; Uygulama S.8–9 (Problem 8–10)</span>
      </div>
      <div class="graph-id-actions">
        <button class="mini-jump-btn" id="s2-go-mod">📘 Modül 4 Konu Anlatımını Aç</button>
        <button class="mini-jump-btn" id="s2-go-prob">📝 Modül 4 Sorularını Aç (P2, P8–P10)</button>
      </div>
    </div>

    <div class="sim-grid">
      <div class="sim-controls">
        <div class="control-group">
          <label class="control-label">Fayda Fonksiyonu Tipi (Modül 4)</label>
          <select class="sim-select" id="s2-type">
            <option value="cobb" ${s.type === 'cobb' ? 'selected' : ''}>Cobb-Douglas Lagrange (Modül 4 S.10 &amp; P9-P10)</option>
            <option value="substitute" ${s.type === 'substitute' ? 'selected' : ''}>Tam İkame Köşe Çözümü (Modül 4 S.8–9)</option>
            <option value="complement" ${s.type === 'complement' ? 'selected' : ''}>Tam Tamamlayıcı: Sağ-Sol Eldiven (Modül 4 S.9)</option>
          </select>
        </div>

        <div class="control-group">
          <label class="control-label"><span>Fiyat Pₓ</span><span class="control-val" id="s2-px-v">${s.px}</span></label>
          <input type="range" id="s2-px" min="1" max="10" step="1" value="${s.px}">
        </div>
        <div class="control-group">
          <label class="control-label"><span>Fiyat Pᵧ</span><span class="control-val" id="s2-py-v">${s.py}</span></label>
          <input type="range" id="s2-py" min="1" max="10" step="1" value="${s.py}">
        </div>
        <div class="control-group">
          <label class="control-label"><span>Gelir (I)</span><span class="control-val" id="s2-i-v">${s.income}</span></label>
          <input type="range" id="s2-i" min="20" max="160" step="10" value="${s.income}">
        </div>
        <div class="control-group">
          <label class="control-label"><span>Parametre a (α)</span><span class="control-val" id="s2-a-v">${s.a}</span></label>
          <input type="range" id="s2-a" min="0.5" max="4" step="0.5" value="${s.a}">
        </div>
        <div class="control-group">
          <label class="control-label"><span>Parametre b (β)</span><span class="control-val" id="s2-b-v">${s.b}</span></label>
          <input type="range" id="s2-b" min="0.5" max="4" step="0.5" value="${s.b}">
        </div>

        <div class="preset-row">
          <button class="preset-btn" data-p="s10">Modül 4 • Ders S.10 (x³y, I=80)</button>
          <button class="preset-btn" data-p="p9">Modül 4 • Uyg. P9 (I=100)</button>
          <button class="preset-btn" data-p="p10">Modül 4 • Uyg. P10 (I=30)</button>
          <button class="preset-btn" data-p="juice">Modül 4 • S.9 Elma-Üzüm Suyu</button>
          <button class="preset-btn" data-p="glove">Modül 4 • S.9 Sağ-Sol Eldiven</button>
        </div>
      </div>

      <div class="sim-canvas-card">
        <div class="embedded-graph-header" style="margin-bottom:10px;">
          <span class="embedded-graph-title">📊 Canlı Grafik: Bütçe Doğrusu &amp; Optimal Tüketici Dengesi (x*, y*)</span>
          <span class="embedded-graph-mod">Modül 4 • Ders Notu Sayfa 7–10 &amp; Uygulama Problem 8–10</span>
        </div>
        <div class="svg-frame" id="s2-svg-wrap"></div>
        <div class="kpi-row" id="s2-kpis"></div>
        <div class="math-box" id="s2-steps" style="margin-top:12px;"></div>
      </div>
    </div>
  `;

  document.getElementById('s2-go-mod').addEventListener('click', () => jumpToModule('m4'));
  document.getElementById('s2-go-prob').addEventListener('click', () => jumpToPracticeByModule('m4'));

  const update = () => {
    const xInt = s.income / s.px;
    const yInt = s.income / s.py;
    const maxX = Math.max(10, Math.ceil(xInt * 1.25 / 5) * 5);
    const maxY = Math.max(10, Math.ceil(yInt * 1.25 / 5) * 5);
    const stepX = Math.max(2, Math.round(maxX / 6));
    const stepY = Math.max(2, Math.round(maxY / 6));

    const W = 620, H = 360, pad = { l: 48, r: 24, t: 28, b: 40 };
    const { sx, sy, grid, axes } = svgGridAxes(W, H, pad, maxX, maxY, 'x', 'y', stepX, stepY);

    let xStar = 0, yStar = 0, uStar = 0, stepsHtml = '', icPath = '';

    if (s.type === 'cobb') {
      xStar = (s.a / (s.a + s.b)) * (s.income / s.px);
      yStar = (s.b / (s.a + s.b)) * (s.income / s.py);
      uStar = Math.pow(xStar, s.a) * Math.pow(yStar, s.b);

      let d = '';
      for (let x = maxX * 0.04; x <= maxX; x += maxX / 80) {
        const y = Math.pow(uStar / Math.pow(x, s.a), 1 / s.b);
        if (y > 0 && y <= maxY) {
          d += (d === '' ? 'M' : 'L') + `${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
        }
      }
      icPath = `<path d="${d}" fill="none" stroke="#d4af37" stroke-width="2.8"/>`;

      stepsHtml = `
        <strong>[Modül 4] Lagrange Çözüm Adımları:</strong><br>
        1) Kısıt: ${s.px}x + ${s.py}y = ${s.income}  |  Bütçe Eğimi: -${s.px}/${s.py} = -${(s.px / s.py).toFixed(2)}<br>
        2) Teğetlik (MİO = Pₓ/Pᵧ): (${s.a}/${s.b})·(y/x) = ${s.px}/${s.py} ⇒ y = ${((s.b * s.px) / (s.a * s.py)).toFixed(2)}x<br>
        3) Optimal Sepet: <strong>x* = ${xStar.toFixed(2)}</strong>, <strong>y* = ${yStar.toFixed(2)}</strong>  |  U* = ${uStar.toFixed(2)}
      `;
    } else if (s.type === 'substitute') {
      const rX = s.a / s.px;
      const rY = s.b / s.py;
      if (rX > rY) {
        xStar = xInt; yStar = 0; uStar = s.a * xStar;
        stepsHtml = `<strong>[Modül 4] Tam İkame (Köşe Çözümü):</strong> MUₓ/Pₓ = ${rX.toFixed(2)} &gt; MUᵧ/Pᵧ = ${rY.toFixed(2)} ⇒ Tüm gelir x'e: <strong>(${xStar.toFixed(2)}, 0)</strong>`;
      } else if (rY > rX) {
        xStar = 0; yStar = yInt; uStar = s.b * yStar;
        stepsHtml = `<strong>[Modül 4] Tam İkame (Köşe Çözümü):</strong> MUᵧ/Pᵧ = ${rY.toFixed(2)} &gt; MUₓ/Pₓ = ${rX.toFixed(2)} ⇒ Tüm gelir y'ye: <strong>(0, ${yStar.toFixed(2)})</strong>`;
      } else {
        xStar = xInt / 2; yStar = yInt / 2; uStar = s.a * xStar + s.b * yStar;
        stepsHtml = `<strong>[Modül 4] Tam İkame (Çakışan Eğim):</strong> MUₓ/Pₓ = MUᵧ/Pᵧ = ${rX.toFixed(2)} ⇒ Bütçe doğrusu üzerindeki her nokta optimaldir.`;
      }
      const icX1 = 0, icY1 = Math.min(maxY, uStar / s.b);
      const icX2 = Math.min(maxX, uStar / s.a), icY2 = 0;
      icPath = `<line x1="${sx(icX1)}" y1="${sy(icY1)}" x2="${sx(icX2)}" y2="${sy(icY2)}" stroke="#d4af37" stroke-width="2.5" stroke-dasharray="6,4"/>`;
    } else {
      xStar = s.income / (s.px + s.py * (s.a / s.b));
      yStar = (s.a / s.b) * xStar;
      uStar = Math.min(s.a * xStar, s.b * yStar);
      icPath = `<polyline points="${sx(xStar)},${sy(maxY)} ${sx(xStar)},${sy(yStar)} ${sx(maxX)},${sy(yStar)}" fill="none" stroke="#d4af37" stroke-width="2.8"/>`;
      stepsHtml = `
        <strong>[Modül 4] Tam Tamamlayıcı (Leontief Köşe):</strong><br>
        1) Köşe Koşulu: ${s.a}x = ${s.b}y ⇒ y = ${(s.a / s.b).toFixed(2)}x<br>
        2) Bütçede yerine koy: ${s.px}x + ${s.py}·(${(s.a / s.b).toFixed(2)}x) = ${s.income} ⇒ <strong>x* = ${xStar.toFixed(2)}</strong>, <strong>y* = ${yStar.toFixed(2)}</strong>
      `;
    }

    const budgetLine = `<line x1="${sx(0)}" y1="${sy(yInt)}" x2="${sx(xInt)}" y2="${sy(0)}" stroke="#38bdf8" stroke-width="2.6"/>`;
    const optPoint = `
      <line x1="${sx(xStar)}" y1="${sy(0)}" x2="${sx(xStar)}" y2="${sy(yStar)}" stroke="rgba(255,255,255,0.25)" stroke-dasharray="3,3"/>
      <line x1="${sx(0)}" y1="${sy(yStar)}" x2="${sx(xStar)}" y2="${sy(yStar)}" stroke="rgba(255,255,255,0.25)" stroke-dasharray="3,3"/>
      <circle cx="${sx(xStar)}" cy="${sy(yStar)}" r="6" fill="#2ea06b" stroke="#fff" stroke-width="1.8"/>
      <text x="${sx(xStar) + 8}" y="${sy(yStar) - 8}" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">(${xStar.toFixed(1)}, ${yStar.toFixed(1)})</text>
    `;

    document.getElementById('s2-svg-wrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${grid}${axes}${budgetLine}${icPath}${optPoint}</svg>`;
    document.getElementById('s2-kpis').innerHTML = `
      <div class="kpi-box"><div class="kpi-label">Ait Olduğu Modül</div><div class="kpi-value" style="font-size:13px;color:var(--accent-sky);">Modül 4 (Sayfa 7–10)</div></div>
      <div class="kpi-box"><div class="kpi-label">Optimal x*</div><div class="kpi-value" style="color:var(--accent-emerald);">${xStar.toFixed(2)}</div></div>
      <div class="kpi-box"><div class="kpi-label">Optimal y*</div><div class="kpi-value" style="color:var(--accent-emerald);">${yStar.toFixed(2)}</div></div>
      <div class="kpi-box"><div class="kpi-label">Maksimum Fayda U*</div><div class="kpi-value" style="color:var(--accent-gold);">${uStar.toFixed(2)}</div></div>
    `;
    document.getElementById('s2-steps').innerHTML = stepsHtml;
  };

  ['s2-type', 's2-px', 's2-py', 's2-i', 's2-a', 's2-b'].forEach(id => {
    document.getElementById(id).addEventListener('input', e => {
      if (id === 's2-type') s.type = e.target.value;
      else if (id === 's2-px') { s.px = parseFloat(e.target.value); document.getElementById('s2-px-v').textContent = s.px; }
      else if (id === 's2-py') { s.py = parseFloat(e.target.value); document.getElementById('s2-py-v').textContent = s.py; }
      else if (id === 's2-i') { s.income = parseFloat(e.target.value); document.getElementById('s2-i-v').textContent = s.income; }
      else if (id === 's2-a') { s.a = parseFloat(e.target.value); document.getElementById('s2-a-v').textContent = s.a; }
      else if (id === 's2-b') { s.b = parseFloat(e.target.value); document.getElementById('s2-b-v').textContent = s.b; }
      update();
    });
  });

  container.querySelectorAll('.preset-btn').forEach(b => {
    b.addEventListener('click', () => {
      const p = b.dataset.p;
      if (p === 's10') { s.type = 'cobb'; s.px = 1; s.py = 2; s.income = 80; s.a = 3; s.b = 1; }
      else if (p === 'p9') { s.type = 'cobb'; s.px = 2; s.py = 1; s.income = 100; s.a = 0.5; s.b = 0.5; }
      else if (p === 'p10') { s.type = 'cobb'; s.px = 2; s.py = 1; s.income = 30; s.a = 0.5; s.b = 0.5; }
      else if (p === 'juice') { s.type = 'substitute'; s.px = 6; s.py = 5; s.income = 120; s.a = 4; s.b = 3; }
      else if (p === 'glove') { s.type = 'complement'; s.px = 10; s.py = 10; s.income = 60; s.a = 1; s.b = 1; }
      renderSim2(container);
    });
  });

  update();
}

// --- SIM 3: MODÜL 4 (UYG. P2) GRAFİĞİ — DENİZ & EFE TAM İKAME SINAV TUZAĞI ---
function renderSim3(container) {
  const s = state.sim3;
  container.innerHTML = `
    <div class="graph-id-bar">
      <div class="graph-id-left">
        <span class="badge badge-gold">MODÜL 4 &amp; UYGULAMA PROBLEM 2 GRAFİĞİ</span>
        <span>Deniz &amp; Efe Tam İkame Seçimi (MU₁/P₁ vs. MU₂/P₂ Karşılaştırması)</span>
        <span class="badge badge-crimson">Uygulama Notu Sayfa 2 • Gerçek Eleştiri #4</span>
      </div>
      <div class="graph-id-actions">
        <button class="mini-jump-btn" id="s3-go-mod">📘 Modül 4 Konu Anlatımını Aç</button>
        <button class="mini-jump-btn" id="s3-go-prob">📝 Problem 2'yi Aç (Deniz &amp; Efe)</button>
      </div>
    </div>

    <div class="callout callout-crimson" style="margin-top:0;">
      <div class="callout-title">🚨 Sınav Tuzağı (Modül 4 • Uygulama S.2): Katsayı (MU) Büyük Olan Mal Her Zaman Seçilmez!</div>
      <p style="font-size:13.5px;color:var(--text-secondary);">Deniz (<code>U<sub>D</sub> = x₁ + 2x₂</code>) ve Efe (<code>U<sub>E</sub> = 2x₁ + 3x₂</code>) için muz (x₂) her zaman daha yüksek marjinal faydaya sahiptir. Ancak optimal sepeti belirleyen şey <strong>MU₁/P₁ vs MU₂/P₂</strong> (1 dolar başına marjinal fayda) karşılaştırmasıdır!</p>
    </div>

    <div class="sim-controls" style="margin-bottom:18px;">
      <div class="grid-2">
        <div class="control-group">
          <label class="control-label"><span>Elma Fiyatı P₁ ($)</span><span class="control-val" id="s3-p1-v">$${s.p1}</span></label>
          <input type="range" id="s3-p1" min="0.5" max="4" step="0.5" value="${s.p1}">
        </div>
        <div class="control-group">
          <label class="control-label"><span>Muz Fiyatı P₂ ($)</span><span class="control-val" id="s3-p2-v">$${s.p2}</span></label>
          <input type="range" id="s3-p2" min="0.5" max="4" step="0.5" value="${s.p2}">
        </div>
      </div>
      <div class="control-group">
        <label class="control-label"><span>Gelir I ($)</span><span class="control-val" id="s3-i-v">$${s.income}</span></label>
        <input type="range" id="s3-i" min="6" max="20" step="2" value="${s.income}">
      </div>
      <div class="preset-row">
        <button class="preset-btn" data-p="note">Modül 4 • Uyg. P2 Orijinal (P₁=$2, P₂=$1)</button>
        <button class="preset-btn" data-p="trap" style="border-color:var(--accent-crimson);color:var(--accent-crimson);">🔥 Sınav Tuzağı Senaryosu (P₁=$1, P₂=$2)</button>
      </div>
    </div>

    <div class="grid-2" id="s3-cards"></div>
  `;

  document.getElementById('s3-go-mod').addEventListener('click', () => jumpToModule('m4'));
  document.getElementById('s3-go-prob').addEventListener('click', () => jumpToPracticeByModule('m4'));

  const update = () => {
    const consumers = [
      { name: 'Deniz (Modül 4 • Problem 2)', formula: 'U_D = x₁ + 2x₂', mu1: 1, mu2: 2 },
      { name: 'Efe (Modül 4 • Problem 2)', formula: 'U_E = 2x₁ + 3x₂', mu1: 2, mu2: 3 }
    ];

    const cardsHtml = consumers.map(c => {
      const r1 = c.mu1 / s.p1;
      const r2 = c.mu2 / s.p2;
      const xMax = s.income / s.p1;
      const yMax = s.income / s.p2;
      let optX = 0, optY = 0, winner = '';
      if (r1 > r2) { optX = xMax; optY = 0; winner = 'Elma (x₁)'; }
      else if (r2 > r1) { optX = 0; optY = yMax; winner = 'Muz (x₂)'; }
      else { optX = xMax / 2; optY = yMax / 2; winner = 'Her ikisi (Kayıtsız)'; }
      const uMax = c.mu1 * optX + c.mu2 * optY;

      const maxR = Math.max(r1, r2, 0.1);
      const W = 320, H = 220, pad = { l: 38, r: 16, t: 20, b: 32 };
      const lim = Math.max(12, Math.ceil(Math.max(xMax, yMax) * 1.15));
      const { sx, sy, grid, axes } = svgGridAxes(W, H, pad, lim, lim, 'Elma (x₁)', 'Muz (x₂)', Math.ceil(lim / 4), Math.ceil(lim / 4));

      const budget = `<line x1="${sx(0)}" y1="${sy(yMax)}" x2="${sx(xMax)}" y2="${sy(0)}" stroke="#38bdf8" stroke-width="2.5"/>`;
      const icY1 = Math.min(lim, uMax / c.mu2);
      const icX2 = Math.min(lim, uMax / c.mu1);
      const ic = `<line x1="${sx(0)}" y1="${sy(icY1)}" x2="${sx(icX2)}" y2="${sy(0)}" stroke="#d4af37" stroke-width="2" stroke-dasharray="5,3"/>`;
      const dot = `<circle cx="${sx(optX)}" cy="${sy(optY)}" r="5.5" fill="#2ea06b" stroke="#fff" stroke-width="1.5"/>`;

      return `
        <div class="sim-canvas-card">
          <div class="card-title" style="margin-bottom:6px;">
            <span>📊 ${c.name}</span>
            <span class="badge badge-gold">${c.formula}</span>
          </div>
          <div class="svg-frame"><svg viewBox="0 0 ${W} ${H}">${grid}${axes}${budget}${ic}${dot}</svg></div>
          <div class="ratio-bar-wrap">
            <div class="ratio-bar-row">
              <span style="width:95px;">MU₁/P₁: ${r1.toFixed(2)}</span>
              <div class="ratio-bar-track"><div class="ratio-bar-fill" style="width:${(r1 / maxR) * 100}%;background:${r1 >= r2 ? '#2ea06b' : '#787773'};"></div></div>
            </div>
            <div class="ratio-bar-row">
              <span style="width:95px;">MU₂/P₂: ${r2.toFixed(2)}</span>
              <div class="ratio-bar-track"><div class="ratio-bar-fill" style="width:${(r2 / maxR) * 100}%;background:${r2 >= r1 ? '#d4af37' : '#787773'};"></div></div>
            </div>
          </div>
          <div class="kpi-row">
            <div class="kpi-box"><div class="kpi-label">Optimal Sepet</div><div class="kpi-value" style="color:var(--accent-emerald);">(${optX.toFixed(1)}, ${optY.toFixed(1)})</div></div>
            <div class="kpi-box"><div class="kpi-label">Seçilen Mal</div><div class="kpi-value" style="font-size:13.5px;">${winner} | U=${uMax.toFixed(1)}</div></div>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('s3-cards').innerHTML = cardsHtml;
  };

  ['s3-p1', 's3-p2', 's3-i'].forEach(id => {
    document.getElementById(id).addEventListener('input', e => {
      if (id === 's3-p1') { s.p1 = parseFloat(e.target.value); document.getElementById('s3-p1-v').textContent = `$${s.p1}`; }
      else if (id === 's3-p2') { s.p2 = parseFloat(e.target.value); document.getElementById('s3-p2-v').textContent = `$${s.p2}`; }
      else if (id === 's3-i') { s.income = parseFloat(e.target.value); document.getElementById('s3-i-v').textContent = `$${s.income}`; }
      update();
    });
  });

  container.querySelectorAll('.preset-btn').forEach(b => {
    b.addEventListener('click', () => {
      if (b.dataset.p === 'note') { s.p1 = 2; s.p2 = 1; s.income = 10; }
      else { s.p1 = 1; s.p2 = 2; s.income = 10; }
      renderSim3(container);
    });
  });

  update();
}

// --- SIM 4: MODÜL 5 GRAFİĞİ — BİREYSEL TALEP EĞRİSİ (HAREKET VS KAYMA) ---
function renderSim4(container) {
  const s = state.sim4;
  container.innerHTML = `
    <div class="graph-id-bar">
      <div class="graph-id-left">
        <span class="badge badge-gold">MODÜL 5 GRAFİĞİ</span>
        <span>Bireysel Talep Eğrisi: Kendi Fiyatıyla Eğri Üzerinde Hareket vs. Diğer Faktörlerle Kayma</span>
        <span class="badge badge-sky">Ders Notu Sayfa 11–12</span>
      </div>
      <div class="graph-id-actions">
        <button class="mini-jump-btn" id="s4-go-mod">📘 Modül 5 Konu Anlatımını Aç</button>
      </div>
    </div>

    <div class="sim-grid">
      <div class="sim-controls">
        <div class="control-group">
          <label class="control-label"><span>Malın Kendi Fiyatı Pₓ (Sayfa 12)</span><span class="control-val" id="s4-px-v">${s.px} TL</span></label>
          <input type="range" id="s4-px" min="1" max="9" step="0.5" value="${s.px}">
        </div>
        <div class="control-group">
          <label class="control-label"><span>1) Gelir I [Baz: 100] (Sayfa 11)</span><span class="control-val" id="s4-i-v">${s.income} TL</span></label>
          <input type="range" id="s4-i" min="60" max="140" step="10" value="${s.income}">
        </div>
        <div class="control-group">
          <label class="control-label">Mal Türü (Gelir Etkisi)</label>
          <select class="sim-select" id="s4-itype">
            <option value="normal" ${s.incomeType === 'normal' ? 'selected' : ''}>Normal Mal (I ↑ ⇒ Sağa Kayar)</option>
            <option value="inferior" ${s.incomeType === 'inferior' ? 'selected' : ''}>Düşük / İnferior Mal (I ↑ ⇒ Sola Kayar)</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label"><span>2) Diğer Mal Fiyatı Pᵧ [Baz: 5] (Sayfa 11)</span><span class="control-val" id="s4-py-v">${s.py} TL</span></label>
          <input type="range" id="s4-py" min="2" max="8" step="1" value="${s.py}">
        </div>
        <div class="control-group">
          <label class="control-label">İlişkili Mal Türü</label>
          <select class="sim-select" id="s4-rtype">
            <option value="substitute" ${s.relatedType === 'substitute' ? 'selected' : ''}>İkame Mal (Pᵧ ↑ ⇒ Sağa Kayar)</option>
            <option value="complement" ${s.relatedType === 'complement' ? 'selected' : ''}>Tamamlayıcı Mal (Pᵧ ↑ ⇒ Sola Kayar)</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label"><span>3) Tercih Değişimi (Sayfa 11 Yulaf Örn.)</span><span class="control-val" id="s4-t-v">${s.taste >= 0 ? '+' + s.taste : s.taste}</span></label>
          <input type="range" id="s4-t" min="-3" max="3" step="1" value="${s.taste}">
        </div>
        <button class="btn" id="s4-reset">↺ Baz Duruma Sıfırla</button>
      </div>

      <div class="sim-canvas-card">
        <div class="embedded-graph-header" style="margin-bottom:10px;">
          <span class="embedded-graph-title">📊 Canlı Grafik: Bireysel Talep Eğrisi (dₓ) Hareket &amp; Kayma</span>
          <span class="embedded-graph-mod">Modül 5 • Ders Notu Sayfa 11–12</span>
        </div>
        <div class="svg-frame" id="s4-svg-wrap"></div>
        <div class="kpi-row" id="s4-kpis"></div>
        <div class="callout callout-sky" id="s4-diag" style="margin-top:12px;"></div>
      </div>
    </div>
  `;

  document.getElementById('s4-go-mod').addEventListener('click', () => jumpToModule('m5'));

  const update = () => {
    const incDelta = (s.income - 100) * 0.08 * (s.incomeType === 'normal' ? 1 : -1);
    const pyDelta = (s.py - 5) * 0.9 * (s.relatedType === 'substitute' ? 1 : -1);
    const tasteDelta = s.taste * 1.2;
    const totalShift = incDelta + pyDelta + tasteDelta;

    const qBase = p => 20 - 1.5 * p;
    const qNew = p => 20 + totalShift - 1.5 * p;

    const W = 620, H = 360, pad = { l: 48, r: 24, t: 28, b: 40 };
    const maxX = 28, maxY = 12;
    const { sx, sy, grid, axes } = svgGridAxes(W, H, pad, maxX, maxY, 'Qₓ (Miktar)', 'Pₓ (Fiyat)', 4, 2);

    const drawCurve = (fn, color, dashed) => {
      let d = '';
      for (let p = 0.5; p <= 11; p += 0.5) {
        const q = fn(p);
        if (q >= 0 && q <= maxX) {
          d += (d === '' ? 'M' : 'L') + `${sx(q).toFixed(1)},${sy(p).toFixed(1)} `;
        }
      }
      return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${dashed ? 2 : 3}" ${dashed ? 'stroke-dasharray="6,4"' : ''}/>`;
    };

    const baseCurve = drawCurve(qBase, 'rgba(56,189,248,0.55)', true);
    const curCurve = drawCurve(qNew, '#d4af37', false);

    const qBazPt = Math.max(0, Math.min(maxX, qBase(4)));
    const qCurPt = Math.max(0, Math.min(maxX, qNew(s.px)));

    const pts = `
      <circle cx="${sx(qBazPt)}" cy="${sy(4)}" r="5" fill="#38bdf8" stroke="#fff" stroke-width="1.2"/>
      <text x="${sx(qBazPt) + 8}" y="${sy(4) - 6}" fill="#38bdf8" font-size="11" font-family="JetBrains Mono">Baz (Q=${qBazPt.toFixed(1)}, P=4)</text>
      <circle cx="${sx(qCurPt)}" cy="${sy(s.px)}" r="6" fill="#2ea06b" stroke="#fff" stroke-width="1.5"/>
      <text x="${sx(qCurPt) + 8}" y="${sy(s.px) - 8}" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">Güncel (Q=${qCurPt.toFixed(1)}, P=${s.px})</text>
    `;

    document.getElementById('s4-svg-wrap').innerHTML = `<svg viewBox="0 0 ${W} ${H}">${grid}${axes}${baseCurve}${curCurve}${pts}</svg>`;

    const shiftStatus = Math.abs(totalShift) < 0.05 ? 'Kayma Yok (dₓ Sabit)' : (totalShift > 0 ? `Sağa Kayma (+${totalShift.toFixed(1)})` : `Sola Kayma (${totalShift.toFixed(1)})`);
    const moveStatus = s.px === 4 ? 'Fiyat Sabit (Pₓ=4)' : (s.px < 4 ? 'Eğri Üzerinde Aşağı-Sağa Hareket' : 'Eğri Üzerinde Yukarı-Sola Hareket');

    document.getElementById('s4-kpis').innerHTML = `
      <div class="kpi-box"><div class="kpi-label">Ait Olduğu Modül</div><div class="kpi-value" style="font-size:13px;color:var(--accent-sky);">Modül 5 (Sayfa 11–12)</div></div>
      <div class="kpi-box"><div class="kpi-label">Güncel Talep Miktarı</div><div class="kpi-value" style="color:var(--accent-emerald);">${qCurPt.toFixed(1)} br</div></div>
      <div class="kpi-box"><div class="kpi-label">Eğri Üzerinde Hareket</div><div class="kpi-value" style="font-size:13px;">${moveStatus}</div></div>
      <div class="kpi-box"><div class="kpi-label">Eğri Kayması</div><div class="kpi-value" style="font-size:13px;color:var(--accent-gold);">${shiftStatus}</div></div>
    `;

    document.getElementById('s4-diag').innerHTML = `
      <div class="callout-title">🔍 [Modül 5] Teşhis: Hareket mi, Kayma mı?</div>
      <p style="font-size:13.5px;color:var(--text-secondary);">
        ${Math.abs(totalShift) < 0.05 && s.px !== 4 ? 'Yalnızca malın kendi fiyatı (Pₓ) değiştiği için talep eğrisi <strong>KAYMAZ</strong>; aynı dₓ eğrisi üzerinde hareket edilir (Sayfa 12).' : ''}
        ${Math.abs(totalShift) >= 0.05 ? `Gelir, Pᵧ veya tercih değiştiği için talep eğrisi <strong>${totalShift > 0 ? 'SAĞA' : 'SOLA'} KAYDI</strong> (dₓ → dₓ', Sayfa 11).` : ''}
        ${Math.abs(totalShift) < 0.05 && s.px === 4 ? 'Baz durumdasınız. Pₓ sürgüsünü oynatarak eğri üzerinde hareketi; I, Pᵧ veya Tercih sürgülerini oynatarak eğrinin kaymasını gözlemleyin.' : ''}
      </p>
    `;
  };

  ['s4-px', 's4-i', 's4-itype', 's4-py', 's4-rtype', 's4-t'].forEach(id => {
    document.getElementById(id).addEventListener('input', e => {
      if (id === 's4-px') { s.px = parseFloat(e.target.value); document.getElementById('s4-px-v').textContent = `${s.px} TL`; }
      else if (id === 's4-i') { s.income = parseFloat(e.target.value); document.getElementById('s4-i-v').textContent = `${s.income} TL`; }
      else if (id === 's4-itype') s.incomeType = e.target.value;
      else if (id === 's4-py') { s.py = parseFloat(e.target.value); document.getElementById('s4-py-v').textContent = `${s.py} TL`; }
      else if (id === 's4-rtype') s.relatedType = e.target.value;
      else if (id === 's4-t') { s.taste = parseFloat(e.target.value); document.getElementById('s4-t-v').textContent = s.taste >= 0 ? `+${s.taste}` : s.taste; }
      update();
    });
  });

  document.getElementById('s4-reset').addEventListener('click', () => {
    state.sim4 = { px: 4, income: 100, py: 5, taste: 0, incomeType: 'normal', relatedType: 'substitute' };
    renderSim4(container);
  });

  update();
}

// ==========================================
// 3. UYGULAMA & ÇÖZÜCÜ KAMPI (MODÜL ETİKETLİ + GÖMÜLÜ GRAFİKLİ)
// ==========================================
function renderPracticeView(stage) {
  const sets = [
    { id: 'all', label: 'Tümü (10 Problem)' },
    { id: 'm1', label: '📘 Modül 1 Soruları: Tercihler & Rasyonalite (P1, P3)' },
    { id: 'm3', label: '📘 Modül 3 Soruları: MİO & Özel Eğriler (P4–P7)' },
    { id: 'm4', label: '📘 Modül 4 Soruları: Tam İkame & Lagrange (P2, P8–P10)' }
  ];

  const list = MIKRO_PROBLEMS.filter(p => state.practiceFilter === 'all' || p.moduleId === state.practiceFilter);

  stage.innerHTML = `
    <div class="stage-header">
      <div class="stage-kicker">UYGULAMA NOTLARI SAYFA 1–9 • MODÜL &amp; GRAFİK EŞLEŞTİRMELİ</div>
      <h1 class="stage-title">Uygulama &amp; Çözücü Kampı (10 Problem)</h1>
      <p class="stage-desc">Her uygulama sorusunun üstünde hangi Ders Modülüne ait olduğu belirtilmiştir; sorunun grafiğini doğrudan kart içinde görebilir veya canlı simülatörde açabilirsin.</p>
    </div>

    <div class="subtabs">
      ${sets.map(s => `<button class="subtab-btn ${state.practiceFilter === s.id ? 'active' : ''}" data-filter="${s.id}">${s.label}</button>`).join('')}
    </div>

    ${list.map(p => {
      const hCount = state.hintsOpen[p.id] || 0;
      const solOpen = !!state.solutionsOpen[p.id];
      const isSolved = !!state.solvedProblems[p.id];
      return `
        <article class="problem-card ${isSolved ? 'solved' : ''}">
          <div class="graph-id-bar" style="margin-bottom:10px;">
            <div class="graph-id-left">
              <span class="badge badge-gold">${p.moduleLabel}</span>
              <span class="badge badge-sky">${p.pageRef}</span>
            </div>
            <div class="graph-id-actions">
              <button class="mini-jump-btn" data-p-mod="${p.moduleId}">📘 ${p.moduleLabel.split(':')[0]} Konu Anlatımına Git</button>
              <button class="mini-jump-btn" data-p-sim="${p.simId}" data-p-preset="${p.simPreset}">🎛️ Bu Sorunun Grafiğini Simülatörde Aç →</button>
            </div>
          </div>

          <div class="problem-header">
            <div>
              <h3 style="font-size:17px;color:var(--text-primary);">${p.title}</h3>
            </div>
            <button class="btn ${isSolved ? 'btn-emerald' : ''}" data-solve="${p.id}">
              ${isSolved ? '✓ Çözüldü' : '○ Çözüldü İşaretle'}
            </button>
          </div>

          <p style="font-size:14.5px;color:var(--text-secondary);">${p.statement}</p>

          ${p.graphHtml || ''}

          <div class="problem-actions">
            <button class="btn btn-gold" data-hint="${p.id}" ${hCount >= 5 ? 'disabled' : ''}>
              💡 İpucu Al (${hCount}/5)
            </button>
            <button class="btn" data-sol="${p.id}">
              ${solOpen ? '🙈 Çözümü Gizle' : '✅ Tam Çözümü Göster'}
            </button>
          </div>

          ${hCount > 0 ? `
            <div class="hint-ladder">
              ${p.hints.slice(0, hCount).map(h => `<div class="hint-step">${h}</div>`).join('')}
            </div>
          ` : ''}

          ${solOpen ? `
            <div class="solution-box">
              <h4>Adım Adım Tam Çözüm (${p.moduleLabel})</h4>
              ${p.solution}
            </div>
          ` : ''}
        </article>
      `;
    }).join('')}
  `;

  stage.querySelectorAll('.subtab-btn').forEach(b => {
    b.addEventListener('click', () => { state.practiceFilter = b.dataset.filter; renderPracticeView(stage); });
  });
  stage.querySelectorAll('[data-p-mod]').forEach(b => {
    b.addEventListener('click', () => jumpToModule(b.dataset.pMod));
  });
  stage.querySelectorAll('[data-p-sim]').forEach(b => {
    b.addEventListener('click', () => jumpToSim(b.dataset.pSim, b.dataset.pPreset));
  });
  stage.querySelectorAll('[data-hint]').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.dataset.hint;
      state.hintsOpen[id] = Math.min(5, (state.hintsOpen[id] || 0) + 1);
      renderPracticeView(stage);
    });
  });
  stage.querySelectorAll('[data-sol]').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.dataset.sol;
      state.solutionsOpen[id] = !state.solutionsOpen[id];
      renderPracticeView(stage);
    });
  });
  stage.querySelectorAll('[data-solve]').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.dataset.solve;
      state.solvedProblems[id] = !state.solvedProblems[id];
      saveState();
      updateProgressUI();
      renderPracticeView(stage);
    });
  });
}

// ==========================================
// 4. GERÇEK ELEŞTİRİ & SINAV TUZAKLARI (5 KART - MODÜL BAĞLANTILI)
// ==========================================
function renderCritiquesView(stage) {
  stage.innerHTML = `
    <div class="stage-header">
      <div class="stage-kicker">MATEMATİKSEL DENETİM &amp; SINAV KORUMASI</div>
      <h1 class="stage-title">5 Gerçek Eleştiri &amp; Sınav Tuzağı</h1>
      <p class="stage-desc">21 sayfalık el yazısı notlarda tespit edilen 5 kritik matematiksel/kavramsal düzeltme ve ait oldukları ders modülleri.</p>
    </div>

    ${MIKRO_CRITIQUES.map(c => `
      <article class="card">
        <div class="card-title" style="justify-content:space-between;">
          <span>${c.title}</span>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            <span class="badge badge-crimson">${c.ref}</span>
            <button class="mini-jump-btn" data-c-mod="${c.moduleId}">📘 İlgili Modüle Git →</button>
          </div>
        </div>

        <div class="grid-2">
          <div class="callout callout-crimson" style="margin:0;">
            <div class="callout-title">📝 Nottaki Yazım &amp; Risk</div>
            <p style="font-size:13.5px;color:var(--text-secondary);margin-bottom:8px;"><strong>Nottaki İfade:</strong> ${c.noteText}</p>
            <p style="font-size:13.5px;color:#fecaca;"><strong>Neden Dikkat Edilmeli?</strong> ${c.mathError}</p>
          </div>
          <div class="callout callout-emerald" style="margin:0;">
            <div class="callout-title">✅ Tam Puanlık Doğru Çözüm / Kural</div>
            <div style="font-size:13.5px;color:var(--text-secondary);line-height:1.65;">${c.correctProof}</div>
          </div>
        </div>
      </article>
    `).join('')}
  `;

  stage.querySelectorAll('[data-c-mod]').forEach(b => {
    b.addEventListener('click', () => jumpToModule(b.dataset.cMod));
  });
}

// ==========================================
// 5. 15 SORULUK SINAV & KAVRAM TESTİ
// ==========================================
function renderQuizView(stage) {
  const answeredCount = Object.keys(state.quizAnswers).length;
  const correctCount = MIKRO_QUIZ.reduce((acc, q, idx) => acc + (state.quizAnswers[idx] === q.answer ? 1 : 0), 0);

  stage.innerHTML = `
    <div class="stage-header">
      <div class="stage-kicker">SINAV SİMÜLASYONU • 15 SORU (MODÜL ETİKETLİ)</div>
      <h1 class="stage-title">İKT201 Kavram &amp; Sınav Testi</h1>
      <p class="stage-desc">Her sorunun başında hangi modüle ([Modül 1]–[Modül 5]) ait olduğu belirtilmiştir.</p>
    </div>

    <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
      <div>
        <strong style="font-size:16px;color:var(--accent-gold);">Skor: ${correctCount} / ${MIKRO_QUIZ.length}</strong>
        <span style="color:var(--text-secondary);font-size:13.5px;margin-left:10px;">(Cevaplanan: ${answeredCount}/${MIKRO_QUIZ.length})</span>
      </div>
      <button class="btn" id="quiz-reset">↺ Testi Sıfırla</button>
    </div>

    ${MIKRO_QUIZ.map((item, qIdx) => {
      const chosen = state.quizAnswers[qIdx];
      const isAnswered = chosen !== undefined;
      return `
        <article class="quiz-card">
          <div style="font-weight:600;font-size:15px;color:var(--text-primary);">${item.q}</div>
          <div class="quiz-options">
            ${item.options.map((opt, oIdx) => {
              let cls = 'quiz-opt';
              if (isAnswered) {
                if (oIdx === item.answer) cls += ' correct';
                else if (oIdx === chosen) cls += ' wrong';
              }
              return `<button class="${cls}" data-q="${qIdx}" data-o="${oIdx}" ${isAnswered ? 'disabled' : ''}>${String.fromCharCode(65 + oIdx)}) ${opt}</button>`;
            }).join('')}
          </div>
          ${isAnswered ? `
            <div class="quiz-explanation">
              <strong>${chosen === item.answer ? '✅ Doğru!' : '❌ Yanlış.'}</strong> ${item.explanation}
            </div>
          ` : ''}
        </article>
      `;
    }).join('')}
  `;

  stage.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qIdx = parseInt(btn.dataset.q, 10);
      const oIdx = parseInt(btn.dataset.o, 10);
      state.quizAnswers[qIdx] = oIdx;
      saveState();
      updateProgressUI();
      renderQuizView(stage);
    });
  });

  document.getElementById('quiz-reset').addEventListener('click', () => {
    state.quizAnswers = {};
    saveState();
    updateProgressUI();
    renderQuizView(stage);
  });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.mode = btn.dataset.mode;
      syncHeaderButtons();
      renderSidebar();
      renderStage();
      window.scrollTo(0, 0);
    });
  });

  document.querySelectorAll('.shortcut-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.mode = btn.dataset.jump;
      syncHeaderButtons();
      renderSidebar();
      renderStage();
      window.scrollTo(0, 0);
    });
  });

  renderSidebar();
  renderStage();
});
