// GTÜ İKT201 Mikroiktisat I — 21 Sayfalık El Yazısı Ders (12) ve Uygulama (9) Notları Veri Külliyatı
// Tüm grafikler ve uygulama soruları doğrudan ait oldukları Modül (Modül 1–5) ve Sayfa numaralarıyla etiketlenmiştir.

const MIKRO_MODULES = [
  {
    id: 'm1',
    number: 'Modül 1',
    pages: 'Ders Notu Sayfa 1–2',
    simId: 'sim1',
    simLabel: 'Modül 1 & 3 Grafiği: Tercih Yönü & Kayıtsızlık Eğrileri',
    relatedProblems: ['p1', 'p3'],
    title: 'Tercihler, Tercih İlişkileri ve Rasyonalite Aksiyomları',
    summary: 'Zayıf tercih (≿), kesin tercih (≻) ve kayıtsızlık (∼) ilişkileri; Tamlık ve Geçişkenlik aksiyomları; geçişkenlik ispatları ve Sayfa 2 ÖDEV tam çözümü.',
    sections: [
      {
        title: '1. Temel Tercih İlişkileri ve Rasyonalite Şeması (Sayfa 1)',
        badge: 'Modül 1 • Sayfa 1',
        badgeType: 'gold',
        html: `
          <ul class="clean-list">
            <li><strong>Zayıf Tercih (x ≿ y):</strong> "x'i y'ye tercih ederim ama y de verirseniz sorun değil (x, en az y kadar iyidir)."<br><span class="muted-note">Mantıksal karşılığı: <code>x ≿ y ⇔ x ≻ y veya x ∼ y</code></span></li>
            <li><strong>Kesin Tercih (x ≻ y):</strong> "x'i y'ye kesinlikle tercih ederim; y verirseniz kabul etmem."<br><span class="muted-note">Mantıksal karşılığı: <code>x ≻ y ⇔ x ≿ y ama y ≿̸ x</code> (notta ayrıca <code>x ≁ y</code> şeklinde ifade edilir).</span></li>
            <li><strong>Kayıtsızlık (x ∼ y):</strong> "x ve y arasında kararsızım / ikisi de benim için fark etmez."<br><span class="muted-note">Mantıksal karşılığı: <code>x ∼ y ⇔ x ≿ y ve y ≿ x</code></span></li>
          </ul>
          <div class="embedded-graph-grid" style="margin-top:14px;">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 1.1: Rasyonel Geçişkenlik vs. Tercih Döngüsü</span>
                <span class="embedded-graph-mod">Modül 1 • Ders S.1 &amp; Uyg. S.1</span>
              </div>
              <svg viewBox="0 0 520 170">
                <rect x="12" y="14" width="235" height="142" rx="8" fill="rgba(46,160,107,0.08)" stroke="rgba(46,160,107,0.35)"/>
                <text x="130" y="34" fill="#2ea06b" font-size="12" font-weight="700" text-anchor="middle">✓ Rasyonel Zincir (Geçişken)</text>
                <circle cx="55" cy="95" r="18" fill="#181b22" stroke="#2ea06b" stroke-width="2"/>
                <text x="55" y="99" fill="#f4f1ea" font-size="13" font-weight="700" text-anchor="middle">x</text>
                <circle cx="130" cy="95" r="18" fill="#181b22" stroke="#2ea06b" stroke-width="2"/>
                <text x="130" y="99" fill="#f4f1ea" font-size="13" font-weight="700" text-anchor="middle">y</text>
                <circle cx="205" cy="95" r="18" fill="#181b22" stroke="#2ea06b" stroke-width="2"/>
                <text x="205" y="99" fill="#f4f1ea" font-size="13" font-weight="700" text-anchor="middle">z</text>
                <line x1="75" y1="95" x2="108" y2="95" stroke="#2ea06b" stroke-width="2"/>
                <text x="92" y="87" fill="#b5b3ad" font-size="11" text-anchor="middle">x ≿ y</text>
                <line x1="150" y1="95" x2="183" y2="95" stroke="#2ea06b" stroke-width="2"/>
                <text x="167" y="87" fill="#b5b3ad" font-size="11" text-anchor="middle">y ≿ z</text>
                <path d="M 55 117 Q 130 152 205 117" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="4,3"/>
                <text x="130" y="146" fill="#d4af37" font-size="11.5" font-weight="700" text-anchor="middle">⇒ x ≿ z (Tutarlı)</text>

                <rect x="273" y="14" width="235" height="142" rx="8" fill="rgba(224,62,82,0.08)" stroke="rgba(224,62,82,0.35)"/>
                <text x="390" y="34" fill="#e03e52" font-size="12" font-weight="700" text-anchor="middle">✗ İrrasyonel Döngü (Alice - Uyg. P1)</text>
                <circle cx="335" cy="78" r="16" fill="#181b22" stroke="#e03e52" stroke-width="2"/>
                <text x="335" y="82" fill="#f4f1ea" font-size="12" font-weight="700" text-anchor="middle">A</text>
                <circle cx="445" cy="78" r="16" fill="#181b22" stroke="#e03e52" stroke-width="2"/>
                <text x="445" y="82" fill="#f4f1ea" font-size="12" font-weight="700" text-anchor="middle">B</text>
                <circle cx="390" cy="134" r="16" fill="#181b22" stroke="#e03e52" stroke-width="2"/>
                <text x="390" y="138" fill="#f4f1ea" font-size="12" font-weight="700" text-anchor="middle">C</text>
                <line x1="354" y1="78" x2="426" y2="78" stroke="#e03e52" stroke-width="2"/>
                <text x="390" y="70" fill="#fecaca" font-size="10.5" text-anchor="middle">A ≻ B</text>
                <line x1="435" y1="92" x2="403" y2="122" stroke="#e03e52" stroke-width="2"/>
                <text x="434" y="114" fill="#fecaca" font-size="10.5">B ≻ C</text>
                <line x1="377" y1="122" x2="345" y2="92" stroke="#e03e52" stroke-width="2"/>
                <text x="336" y="114" fill="#fecaca" font-size="10.5">C ≻ A ✗</text>
              </svg>
              <div class="embedded-graph-caption">Sol: Modül 1 (Sayfa 1) rasyonel geçişkenlik zinciri. Sağ: Modül 1 Uygulama Problem 1 (Alice'in 3 sepeti) geçişkenlik ihlali döngüsü.</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Rasyonalite Aksiyomları (Tamlık & Geçişkenlik)',
        badge: 'Modül 1 • Aksiyomlar',
        badgeType: 'emerald',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">Bir tüketicinin zayıf tercih ilişkisi (≿) aşağıdaki <strong>iki koşulu</strong> aynı anda sağlıyorsa o tüketici <strong>rasyonel</strong> kabul edilir:</p>
          <div class="math-box">
            1. Tamlık (Completeness): Her x, y alternatifi için x ≿ y veya y ≿ x (ya da ikisi birden) geçerlidir. Tüketici "karşılaştıramam" demez.<br>
            2. Geçişkenlik (Transitivity): x ≿ y ve y ≿ z ise x ≿ z olur. Tercihler kendi içinde tutarlıdır, döngü (A ≻ B ≻ C ≻ A) içermez.
          </div>
        `
      },
      {
        title: '3. İspat 1 (Sayfa 1) & İspat 2 (Sayfa 2) — Geçişkenlik Teoremleri',
        badge: 'Modül 1 • İspatlar',
        badgeType: 'sky',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;margin-bottom:8px;"><strong>Teorem 1 (Sayfa 1):</strong> ≿ rasyonel ise kayıtsızlık ilişkisi (∼) de geçişkendir: <code>(x ∼ y ve y ∼ z) ⇒ x ∼ z</code>.</p>
          <div class="math-box">
            x ∼ y ⇒ (x ≿ y ve y ≿ x)<br>
            y ∼ z ⇒ (y ≿ z ve z ≿ y)<br>
            ≿ geçişken olduğundan: (x ≿ y ve y ≿ z) ⇒ x ≿ z; ayrıca (z ≿ y ve y ≿ x) ⇒ z ≿ x.<br>
            Hem x ≿ z hem z ≿ x sağlandığından tanım gereği <strong>x ∼ z</strong> elde edilir. ∎
          </div>
          <p style="color:var(--text-secondary);font-size:14.5px;margin:10px 0 6px;"><strong>Teorem 2 (Sayfa 2):</strong> ≿ rasyonel ise kesin tercih (≻) de geçişkendir: <code>(x ≻ y ve y ≻ z) ⇒ x ≻ z</code>.</p>
          <div class="callout callout-crimson">
            <div class="callout-title">🚨 Gerçek Eleştiri #1 — Nottaki İspat Eksikliği (Modül 1 • Sayfa 2)</div>
            <p style="font-size:13.5px;color:var(--text-secondary);">El yazısı notta <code>x ≁ y</code> ve <code>y ≁ z</code>'den doğrudan "geçişkenlikten <code>x ≁ z</code>" yazılmıştır. Ancak <strong>kayıtsız olmama (≁) ilişkisi geçişken değildir!</strong> (Örn: x ≁ y ve y ≁ x iken x ∼ x doğrudur). Tam puanlık doğru ispat <strong>Olmayana Ergi (Çelişki)</strong> ile yapılır:</p>
            <div class="math-box" style="margin-top:8px;">
              1) x ≿ y ve y ≿ z ⇒ ≿ geçişkenliğinden x ≿ z.<br>
              2) z ≿̸ x olduğunu gösterelim: Tersini varsayalım ⇒ z ≿ x olsun.<br>
              3) y ≿ z ve z ≿ x olduğundan ≿ geçişkenliğinden y ≿ x çıkar.<br>
              4) Oysa x ≻ y verilmişti (yani y ≿̸ x). <strong>Çelişki!</strong> Demek ki z ≿̸ x.<br>
              5) Sonuç: x ≿ z ve z ≿̸ x ⇒ <strong>x ≻ z</strong>. ∎
            </div>
          </div>
        `
      },
      {
        title: '4. Sayfa 2 ÖDEV Tam Çözümü: x ≻ y ≿ z ⇒ x ≻ z',
        badge: 'Modül 1 • Ödev Çözümü',
        badgeType: 'emerald',
        html: `
          <div class="callout callout-emerald">
            <div class="callout-title">✅ Notta Açık Bırakılan Ödevin Eksiksiz Çözümü (Sayfa 2)</div>
            <p style="font-size:14px;color:var(--text-secondary);margin-bottom:8px;"><strong>Soru:</strong> ≿ rasyonel olsun. Eğer <code>x ≻ y</code> ve <code>y ≿ z</code> ise <code>x ≻ z</code> olduğunu ispatlayınız.</p>
            <div class="math-box">
              Adım 1 (Zayıf Tercih Kısmı): x ≻ y ⇒ x ≿ y. Elimizde y ≿ z de var. ≿'nin geçişkenliğinden <strong>x ≿ z</strong> elde edilir.<br>
              Adım 2 (Olmayana Ergi ile Kesinlik Kısmı): z ≿̸ x olduğunu göstermeliyiz. Tersini varsayalım: <strong>z ≿ x</strong> olsun.<br>
              Adım 3: y ≿ z ve varsayımımız z ≿ x olduğundan, ≿'nin geçişkenliğinden <strong>y ≿ x</strong> sonucu çıkar.<br>
              Adım 4 (Çelişki): Başlangıçta x ≻ y (yani y ≿̸ x) verilmişti. y ≿ x ile çelişir!<br>
              Adım 5 (Sonuç): Varsayım yanlıştır, yani z ≿̸ x. Dolayısıyla x ≿ z ve z ≿̸ x ⇒ <strong>x ≻ z</strong>. ∎
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'm2',
    number: 'Modül 2',
    pages: 'Ders Notu Sayfa 2–3',
    simId: 'sim1',
    simLabel: 'Modül 2 & 3 Grafiği: Fayda Düzeyleri & Kayıtsızlık Haritası',
    relatedProblems: ['p1'],
    title: 'Fayda Fonksiyonu ve Monotonik Dönüşümler',
    summary: 'Ceteris Paribus varsayımı, Temsil Teoremi, faydanın sıralı (ordinal) doğası, monotonik dönüşüm örnekleri ve Sayfa 3 KENDİN ÇÖZ tam çözümü.',
    sections: [
      {
        title: '1. Fayda Kavramı, Ceteris Paribus ve Temsil Teoremi (Sayfa 2)',
        badge: 'Modül 2 • Sayfa 2',
        badgeType: 'gold',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;"><strong>Fayda:</strong> İnsanların ekonomik faaliyetleri ile ihtiyaçlarının karşılanmasından dolayı aldıkları haz veya memnuniyettir. Tüm mikroiktisat analizleri <strong>Ceteris Paribus</strong> (diğer tüm değişkenler sabit — notta sehven "Cateris Paribus" yazılmıştır) varsayımı altında yapılır.</p>
          <div class="math-box">
            x ≿ y ⇔ U(x) ≥ U(y)   |   x ≻ y ⇔ U(x) > U(y)   |   x ∼ y ⇔ U(x) = U(y)
          </div>
          <p style="color:var(--text-secondary);font-size:14.5px;"><strong>Sıralı (Ordinal) İlişki Uyarısı:</strong> Örneğin <code>U(x) = 6</code> ve <code>U(y) = 2</code> ise <em>"x'i y'ye kesin tercih ederim"</em> deriz; ancak <strong>"x'i y'ye 3 kat fazla tercih ederim" DEMEYİZ!</strong></p>
        `
      },
      {
        title: '2. Monotonik Dönüşümler Grafiği ve Sayfa 3 KENDİN ÇÖZ Tam Çözümü',
        badge: 'Modül 2 • Sayfa 3 Grafiği',
        badgeType: 'emerald',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">Tercih ilişkilerini gösteren tek bir fayda fonksiyonu yoktur. Artan (pozitif) bir monotonik dönüşüm sepetlerin sıralamasını değiştirmez:</p>
          <div class="embedded-graph-grid">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 2.1: Monotonik Dönüşümler Altında Sıralamanın Korunması</span>
                <span class="embedded-graph-mod">Modül 2 • Ders Notu Sayfa 3</span>
              </div>
              <svg viewBox="0 0 540 175">
                <text x="95" y="24" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">U = x₁·x₂</text>
                <rect x="35" y="95" width="32" height="50" fill="rgba(56,189,248,0.35)" stroke="#38bdf8"/>
                <text x="51" y="90" fill="#f4f1ea" font-size="11" text-anchor="middle">4</text>
                <text x="51" y="162" fill="#b5b3ad" font-size="10.5" text-anchor="middle">(4,1)</text>
                <rect x="79" y="70" width="32" height="75" fill="rgba(46,160,107,0.55)" stroke="#2ea06b"/>
                <text x="95" y="64" fill="#2ea06b" font-size="11.5" font-weight="700" text-anchor="middle">6 (En İyi)</text>
                <text x="95" y="162" fill="#f4f1ea" font-size="10.5" font-weight="700" text-anchor="middle">(2,3)</text>
                <rect x="123" y="95" width="32" height="50" fill="rgba(56,189,248,0.35)" stroke="#38bdf8"/>
                <text x="139" y="90" fill="#f4f1ea" font-size="11" text-anchor="middle">4</text>
                <text x="139" y="162" fill="#b5b3ad" font-size="10.5" text-anchor="middle">(2,2)</text>

                <text x="270" y="24" fill="#d4af37" font-size="12" font-weight="700" text-anchor="middle">V = U² = (x₁·x₂)²</text>
                <rect x="210" y="100" width="32" height="45" fill="rgba(212,175,55,0.3)" stroke="#d4af37"/>
                <text x="226" y="94" fill="#f4f1ea" font-size="11" text-anchor="middle">16</text>
                <text x="226" y="162" fill="#b5b3ad" font-size="10.5" text-anchor="middle">(4,1)</text>
                <rect x="254" y="55" width="32" height="90" fill="rgba(46,160,107,0.55)" stroke="#2ea06b"/>
                <text x="270" y="49" fill="#2ea06b" font-size="11.5" font-weight="700" text-anchor="middle">36 (En İyi)</text>
                <text x="270" y="162" fill="#f4f1ea" font-size="10.5" font-weight="700" text-anchor="middle">(2,3)</text>
                <rect x="298" y="100" width="32" height="45" fill="rgba(212,175,55,0.3)" stroke="#d4af37"/>
                <text x="314" y="94" fill="#f4f1ea" font-size="11" text-anchor="middle">16</text>
                <text x="314" y="162" fill="#b5b3ad" font-size="10.5" text-anchor="middle">(2,2)</text>

                <text x="445" y="24" fill="#2ea06b" font-size="12" font-weight="700" text-anchor="middle">W = 2U + 10 (Kendin Çöz)</text>
                <rect x="385" y="85" width="32" height="60" fill="rgba(56,189,248,0.35)" stroke="#38bdf8"/>
                <text x="401" y="79" fill="#f4f1ea" font-size="11" text-anchor="middle">18</text>
                <text x="401" y="162" fill="#b5b3ad" font-size="10.5" text-anchor="middle">(4,1)</text>
                <rect x="429" y="62" width="32" height="83" fill="rgba(46,160,107,0.65)" stroke="#2ea06b"/>
                <text x="445" y="56" fill="#2ea06b" font-size="11.5" font-weight="700" text-anchor="middle">22 (En İyi)</text>
                <text x="445" y="162" fill="#f4f1ea" font-size="10.5" font-weight="700" text-anchor="middle">(2,3)</text>
                <rect x="473" y="85" width="32" height="60" fill="rgba(56,189,248,0.35)" stroke="#38bdf8"/>
                <text x="489" y="79" fill="#f4f1ea" font-size="11" text-anchor="middle">18</text>
                <text x="489" y="162" fill="#b5b3ad" font-size="10.5" text-anchor="middle">(2,2)</text>
              </svg>
              <div class="embedded-graph-caption">Modül 2 (Sayfa 3): Her üç fonksiyonda da sıralama <strong>(2,3) ≻ (4,1) ∼ (2,2)</strong> olarak birebir korunur.</div>
            </div>
          </div>
          <div class="callout callout-emerald">
            <div class="callout-title">✅ Sayfa 3 "KENDİN ÇÖZ" Tam Çözümü: W = 2U + 10</div>
            <div class="math-box">
              W(4,1) = 2(4) + 10 = <strong>18</strong>  |  W(2,3) = 2(6) + 10 = <strong>22</strong>  |  W(2,2) = 2(4) + 10 = <strong>18</strong><br>
              Sonuç: 22 > 18 = 18 ⇒ <strong>(2,3) ≻ (4,1) ∼ (2,2)</strong> sıralaması birebir korunur!
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'm3',
    number: 'Modül 3',
    pages: 'Ders Notu Sayfa 4–6',
    simId: 'sim1',
    simLabel: 'Modül 3 Canlı Grafiği: Kayıtsızlık Eğrisi & MİO Teğeti Simülatörü',
    relatedProblems: ['p4', 'p5', 'p6', 'p7'],
    title: 'Kayıtsızlık Eğrileri, Haritası, MİO ve Özel Fayda Fonksiyonları',
    summary: 'U=x·y kayıtsızlık haritası, azalan MİO ve dışbükeylik, Tam İkame, Tam Tamamlayıcı, Cobb-Douglas ve MİO = MU₁/MU₂ türetimi.',
    sections: [
      {
        title: '1. Kayıtsızlık Eğrisi ve Kayıtsızlık Haritası Grafikleri (Sayfa 4)',
        badge: 'Modül 3 • Sayfa 4 Grafikleri',
        badgeType: 'gold',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">İki malın aynı faydayı sağlayan tüm kombinasyonlarını birleştiren eğriye <strong>kayıtsızlık eğrisi</strong> denir. Sağ yukarı çıkıldıkça fayda artar: <code>U₃ > U₂ > U₁</code>.</p>
          <div class="embedded-graph-grid">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 3.1: U(x,y) = x·y = 12 Kayıtsızlık Eğrisi (A, B, C, D)</span>
                <span class="embedded-graph-mod">Modül 3 • Ders Notu Sayfa 4</span>
              </div>
              <svg viewBox="0 0 320 220">
                <line x1="40" y1="20" x2="40" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="40" y1="185" x2="295" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <text x="45" y="18" fill="#d4af37" font-size="11" font-weight="700">Hamburger (Y)</text>
                <text x="290" y="202" fill="#d4af37" font-size="11" font-weight="700" text-anchor="end">İçecek (X)</text>
                <path d="M 65 35 Q 95 110 140 135 T 245 162" fill="none" stroke="#d4af37" stroke-width="2.5"/>
                <circle cx="72" cy="48" r="4.5" fill="#2ea06b"/><text x="80" y="46" fill="#f4f1ea" font-size="11">A(2,6)</text>
                <circle cx="105" cy="88" r="4.5" fill="#2ea06b"/><text x="113" y="86" fill="#f4f1ea" font-size="11">B(3,4)</text>
                <circle cx="142" cy="118" r="4.5" fill="#2ea06b"/><text x="150" y="116" fill="#f4f1ea" font-size="11">C(4,3)</text>
                <circle cx="215" cy="150" r="4.5" fill="#2ea06b"/><text x="220" y="145" fill="#f4f1ea" font-size="11">D(6,2)</text>
                <text x="235" y="172" fill="#d4af37" font-size="11" font-weight="700">U = 12</text>
              </svg>
              <div class="embedded-graph-caption">Modül 3 (Sayfa 4 Sağ Üst): U(A)=2·6=12, U(B)=3·4=12, U(C)=4·3=12, U(D)=6·2=12. Farklı mal kombinasyonlarında fayda aynıdır.</div>
            </div>

            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 3.2: Kayıtsızlık Eğrisi Haritası (F, A-B-C-D, E)</span>
                <span class="embedded-graph-mod">Modül 3 • Ders Notu Sayfa 4</span>
              </div>
              <svg viewBox="0 0 320 220">
                <line x1="40" y1="20" x2="40" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="40" y1="185" x2="295" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <path d="M 55 85 Q 95 145 210 172" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>
                <path d="M 68 48 Q 115 120 240 155" fill="none" stroke="#d4af37" stroke-width="2.5"/>
                <path d="M 95 30 Q 150 95 270 132" fill="none" stroke="#2ea06b" stroke-width="2.2"/>
                <circle cx="105" cy="136" r="4.5" fill="#38bdf8"/><text x="85" y="154" fill="#38bdf8" font-size="10.5">F(3,2) ⇒ U₁=6</text>
                <circle cx="105" cy="95" r="4.5" fill="#d4af37"/><text x="114" y="95" fill="#d4af37" font-size="10.5">B(3,4) ⇒ U₂=12</text>
                <circle cx="172" cy="82" r="4.5" fill="#2ea06b"/><text x="180" y="80" fill="#2ea06b" font-size="10.5">E(5,4) ⇒ U₃=20</text>
              </svg>
              <div class="embedded-graph-caption">Modül 3 (Sayfa 4 Sağ Alt): Orijinden sağ-yukarı uzaklaştıkça fayda artar: <strong>U₃(20) &gt; U₂(12) &gt; U₁(6)</strong>.</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Marjinal İkame Oranı (MİO) ve Dengeli Tüketim Grafikleri (Sayfa 5)',
        badge: 'Modül 3 • Sayfa 5 Grafikleri',
        badgeType: 'crimson',
        html: `
          <div class="callout callout-crimson">
            <div class="callout-title">🚨 Gerçek Eleştiri #2 — MİO Tanımındaki Yön Sürçmesi (Modül 3 • Sayfa 5)</div>
            <p style="font-size:13.5px;color:var(--text-secondary);">El yazısı notta "mallardan birinin tüketimi <strong>1 br azaldığında</strong> diğer maldan ne kadar <strong>vazgeçmesi</strong> gerektiği" yazılmıştır. Doğrusu: <strong>Yatay eksendeki malın (x₁) tüketimi 1 birim artırıldığında, aynı faydayı koruyabilmek için dikey eksendeki maldan (x₂) kaç birim vazgeçilmesi gerektiğini gösteren orandır.</strong></p>
          </div>
          <div class="embedded-graph-grid">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 3.3: Azalan MİO Basamakları (A → B → C → D)</span>
                <span class="embedded-graph-mod">Modül 3 • Ders Notu Sayfa 5 Sol</span>
              </div>
              <svg viewBox="0 0 320 220">
                <line x1="40" y1="20" x2="40" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="40" y1="185" x2="295" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <path d="M 70 45 L 110 95 L 150 125 L 230 155" fill="none" stroke="#d4af37" stroke-width="2.5"/>
                <polyline points="70,45 70,95 110,95" fill="none" stroke="#e03e52" stroke-width="1.5" stroke-dasharray="3,2"/>
                <text x="48" y="75" fill="#e03e52" font-size="10.5">-2H</text><text x="84" y="108" fill="#e03e52" font-size="10">+1İ</text>
                <polyline points="110,95 110,125 150,125" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
                <text x="90" y="114" fill="#38bdf8" font-size="10.5">-1H</text><text x="125" y="137" fill="#38bdf8" font-size="10">+1İ</text>
                <polyline points="150,125 150,155 230,155" fill="none" stroke="#2ea06b" stroke-width="1.5" stroke-dasharray="3,2"/>
                <text x="130" y="145" fill="#2ea06b" font-size="10.5">-1H</text><text x="182" y="168" fill="#2ea06b" font-size="10">+2İ</text>
                <circle cx="70" cy="45" r="4" fill="#f4f1ea"/><circle cx="110" cy="95" r="4" fill="#f4f1ea"/>
                <circle cx="150" cy="125" r="4" fill="#f4f1ea"/><circle cx="230" cy="155" r="4" fill="#f4f1ea"/>
              </svg>
              <div class="embedded-graph-caption">Modül 3 (Sayfa 5 Sol): A→B |MİO|=2, B→C |MİO|=1, C→D |MİO|=0.5. İçecek arttıkça vazgeçilen hamburger azalır (Azalan MİO).</div>
            </div>

            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 3.4: Rasyonel Bireyde Dengeli Tüketim G(4,4)</span>
                <span class="embedded-graph-mod">Modül 3 • Ders Notu Sayfa 5 Sağ</span>
              </div>
              <svg viewBox="0 0 320 220">
                <line x1="40" y1="20" x2="40" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="40" y1="185" x2="295" y2="185" stroke="#b5b3ad" stroke-width="1.5"/>
                <path d="M 70 48 Q 120 130 230 155" fill="none" stroke="#d4af37" stroke-width="2.2"/>
                <path d="M 92 34 Q 145 105 260 135" fill="none" stroke="#2ea06b" stroke-width="2.5"/>
                <line x1="70" y1="48" x2="230" y2="155" stroke="rgba(255,255,255,0.25)" stroke-dasharray="4,3"/>
                <circle cx="70" cy="48" r="4.5" fill="#d4af37"/><text x="78" y="46" fill="#d4af37" font-size="10.5">A(2,6)</text>
                <circle cx="230" cy="155" r="4.5" fill="#d4af37"/><text x="215" y="145" fill="#d4af37" font-size="10.5">D(6,2) U₁=12</text>
                <circle cx="148" cy="88" r="5.5" fill="#2ea06b" stroke="#fff"/><text x="156" y="84" fill="#2ea06b" font-size="11" font-weight="700">G(4,4) ⇒ U₂=16</text>
              </svg>
              <div class="embedded-graph-caption">Modül 3 (Sayfa 5 Sağ Üst): Uç sepetler A(2,6) ve D(6,2) U₁=12 verirken, dengeli sepet G(4,4) U₂=16 &gt; 12 sağlar.</div>
            </div>
          </div>
        `
      },
      {
        title: '3. Özel Fayda Fonksiyonları Grafikleri ve MİO Türetimi (Sayfa 6)',
        badge: 'Modül 3 • Sayfa 6 Grafikleri',
        badgeType: 'sky',
        html: `
          <div class="embedded-graph-grid">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 3.5: Tam İkame Mallar (Kola – Pepsi)</span>
                <span class="embedded-graph-mod">Modül 3 • Sayfa 6 Sol Üst</span>
              </div>
              <svg viewBox="0 0 260 180">
                <line x1="35" y1="18" x2="35" y2="150" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="35" y1="150" x2="235" y2="150" stroke="#b5b3ad" stroke-width="1.5"/>
                <text x="40" y="22" fill="#d4af37" font-size="10.5">Kola</text>
                <text x="230" y="166" fill="#d4af37" font-size="10.5" text-anchor="end">Pepsi</text>
                <line x1="35" y1="105" x2="105" y2="150" stroke="#38bdf8" stroke-width="2"/>
                <line x1="35" y1="75" x2="150" y2="150" stroke="#d4af37" stroke-width="2.2"/>
                <line x1="35" y1="45" x2="195" y2="150" stroke="#2ea06b" stroke-width="2.4"/>
                <text x="60" y="140" fill="#38bdf8" font-size="10">U₁</text>
                <text x="95" y="128" fill="#d4af37" font-size="10">U₂</text>
                <text x="145" y="110" fill="#2ea06b" font-size="10">U₃ (U₃&gt;U₂&gt;U₁)</text>
              </svg>
              <div class="embedded-graph-caption">Modül 3 (Sayfa 6): Birbirinin yerine sabit oranda geçen mallar. Eğim (MİO) sabittir.</div>
            </div>

            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 3.6: Tam Tamamlayıcı (Sağ – Sol Ayakkabı)</span>
                <span class="embedded-graph-mod">Modül 3 • Sayfa 6 Sol Orta</span>
              </div>
              <svg viewBox="0 0 260 180">
                <line x1="35" y1="18" x2="35" y2="150" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="35" y1="150" x2="235" y2="150" stroke="#b5b3ad" stroke-width="1.5"/>
                <text x="40" y="22" fill="#d4af37" font-size="10.5">Sağ Ayakkabı</text>
                <text x="235" y="166" fill="#d4af37" font-size="10.5" text-anchor="end">Sol Ayakkabı</text>
                <polyline points="65,35 65,125 210,125" fill="none" stroke="#38bdf8" stroke-width="2"/>
                <polyline points="95,30 95,95 215,95" fill="none" stroke="#d4af37" stroke-width="2.2"/>
                <polyline points="125,25 125,65 220,65" fill="none" stroke="#2ea06b" stroke-width="2.4"/>
                <circle cx="65" cy="125" r="3.5" fill="#38bdf8"/><circle cx="95" cy="95" r="3.5" fill="#d4af37"/><circle cx="125" cy="65" r="3.5" fill="#2ea06b"/>
                <text x="195" y="60" fill="#2ea06b" font-size="10">3 &gt; 2 &gt; 1</text>
              </svg>
              <div class="embedded-graph-caption">Modül 3 (Sayfa 6): L-tipi eğriler. 1 sol ayakkabının yanına 1 sağ ayakkabı olmalı; tek başına fazlası faydayı artırmaz.</div>
            </div>
          </div>
          <div class="callout callout-crimson" style="margin-top:12px;">
            <div class="callout-title">🚨 Gerçek Eleştiri #3 — Toplam Diferansiyel İndis Düzeltmesi (Modül 3 • Sayfa 6)</div>
            <div class="math-box" style="margin-top:6px;">
              Nottaki Hatalı İndis: (DU/Dx₁)·Dx₂ + (DU/Dx)·Dx₂ = 0<br>
              Doğru Kısmi Türev Formu: dU = (∂U/∂x₁)·dx₁ + (∂U/∂x₂)·dx₂ = 0  ⇒  MİO₁,₂ = -dx₂/dx₁ |<sub>dU=0</sub> = <strong>MU₁ / MU₂</strong><br>
              Sayfa 6 Örneği: U(x₁, x₂) = x₁¹/² · x₂² ⇒ MU₁ = (1/2)x₁⁻¹/²x₂², MU₂ = 2x₁¹/²x₂ ⇒ MİO = <strong>x₂ / (4x₁)</strong>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'm4',
    number: 'Modül 4',
    pages: 'Ders Notu Sayfa 7–10',
    simId: 'sim2',
    simLabel: 'Modül 4 Canlı Grafiği: Bütçe Kısıtı, Köşe Çözüm & Lagrange Simülatörü',
    relatedProblems: ['p2', 'p8', 'p9', 'p10'],
    title: 'Bütçe Kısıtı ve Fayda Maksimizasyonu (Köşe & Lagrange)',
    summary: 'Bütçe doğrusu, eğim -Pₓ/Pᵧ, Hamburger-Soda, Kalemler, Elma-Üzüm Suyu, Sağ-Sol Eldiven ve U=x³y Lagrange tam çözümü.',
    sections: [
      {
        title: '1. Bütçe Kısıtı ve Fırsat Maliyeti Grafikleri (Sayfa 7–8)',
        badge: 'Modül 4 • Sayfa 7–8 Grafikleri',
        badgeType: 'gold',
        html: `
          <div class="math-box">
            • Bütçe Kısıtı Eşitsizliği (Satın Alınabilir Alan): Pₓ·x + Pᵧ·y ≤ I   |   Bütçe Doğrusu: Pₓ·x + Pᵧ·y = I<br>
            • Eksen Kesim Noktaları: Yatay (I/Pₓ, 0), Dikey (0, I/Pᵧ)   |   Eğim: m = <strong>-Pₓ / Pᵧ</strong> (fırsat maliyeti)
          </div>
          <div class="embedded-graph-grid">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 4.1: Bütçe Kısıtı Alanı ve Fayda Teğetliği</span>
                <span class="embedded-graph-mod">Modül 4 • Ders Notu Sayfa 7</span>
              </div>
              <svg viewBox="0 0 320 210">
                <polygon points="45,45 45,175 235,175" fill="rgba(56,189,248,0.12)"/>
                <line x1="45" y1="20" x2="45" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="45" y1="175" x2="285" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="45" y1="45" x2="235" y2="175" stroke="#38bdf8" stroke-width="2.5"/>
                <path d="M 80 35 Q 130 110 245 145" fill="none" stroke="#d4af37" stroke-width="2.3"/>
                <circle cx="140" cy="110" r="5" fill="#2ea06b" stroke="#fff"/>
                <text x="12" y="50" fill="#38bdf8" font-size="10.5">I/Pᵧ</text>
                <text x="225" y="192" fill="#38bdf8" font-size="10.5">I/Pₓ</text>
                <text x="150" y="105" fill="#2ea06b" font-size="10.5" font-weight="700">Optimum (MİO = Pₓ/Pᵧ)</text>
              </svg>
              <div class="embedded-graph-caption">Modül 4 (Sayfa 7): Taralı üçgen satın alınabilir bütçe kümesidir; teğet nokta faydayı maksimize eder.</div>
            </div>

            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 4.2: Hamburger (P=4) &amp; Soda (P=2), I=100</span>
                <span class="embedded-graph-mod">Modül 4 • Ders Notu Sayfa 8</span>
              </div>
              <svg viewBox="0 0 320 210">
                <line x1="45" y1="20" x2="45" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="45" y1="175" x2="285" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <text x="52" y="25" fill="#d4af37" font-size="10.5">H (Hamburger)</text>
                <text x="280" y="192" fill="#d4af37" font-size="10.5" text-anchor="end">S (Soda)</text>
                <line x1="45" y1="55" x2="235" y2="175" stroke="#2ea06b" stroke-width="2.6"/>
                <circle cx="45" cy="55" r="4.5" fill="#d4af37"/><text x="53" y="56" fill="#f4f1ea" font-size="10.5">(0, 25)</text>
                <circle cx="235" cy="175" r="4.5" fill="#d4af37"/><text x="215" y="165" fill="#f4f1ea" font-size="10.5">(50, 0)</text>
                <text x="145" y="102" fill="#2ea06b" font-size="11" font-weight="700">4H + 2S = 100 (m = -1/2)</text>
              </svg>
              <div class="embedded-graph-caption">Modül 4 (Sayfa 8 Sol Alt): 1 hamburger için 2 sodadan vazgeçilir. Tükenmez/Dolma kalem örneğinde (3T+4D=30) T*=10, D*=0 seçilir.</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Tam İkame, Tam Tamamlayıcı ve Lagrange Çözümleri (Sayfa 9–10)',
        badge: 'Modül 4 • Sayfa 9–10',
        badgeType: 'emerald',
        html: `
          <div class="grid-2">
            <div class="callout callout-gold" style="margin:0;">
              <div class="callout-title">🍎 Elma Suyu (E) &amp; Üzüm Suyu (Ü) — Sayfa 9 Sol</div>
              <div class="math-box">
                U(E,Ü) = 4E + 3Ü  |  6E + 5Ü = 120<br>
                • Sadece E (Ü=0): E = 20 ⇒ U₁ = 20×4 = <strong>80</strong><br>
                • Sadece Ü (E=0): Ü = 24 ⇒ U₂ = 24×3 = <strong>72</strong><br>
                Sonuç: <strong>E* = 20, Ü* = 0</strong> (Köşe Çözümü)
              </div>
            </div>
            <div class="callout callout-sky" style="margin:0;">
              <div class="callout-title">🧤 Sağ &amp; Sol Eldiven — Sayfa 9 Sağ</div>
              <div class="math-box">
                U = min{sağ, sol}  |  10·sağ + 10·sol = 60<br>
                • Optimum Koşul: <strong>sağ = sol</strong><br>
                • 20·sağ = 60 ⇒ <strong>sağ* = 3, sol* = 3</strong>
              </div>
            </div>
          </div>
          <div class="math-box" style="margin-top:14px;">
            <strong>Sayfa 10 Lagrange Çözümü:</strong> U(x, y) = x³ · y, Pₓ = 1, Pᵧ = 2, I = 80 ⇒ Kısıt: x + 2y = 80<br>
            ℒ(x, y, λ) = x³·y + λ(80 - x - 2y)<br>
            (1) ∂ℒ/∂x = 3x²y - λ = 0 ⇒ λ = 3x²y   |   (2) ∂ℒ/∂y = x³ - 2λ = 0 ⇒ λ = x³/2<br>
            (1) = (2): 3x²y = x³/2 ⇒ <strong>x = 6y</strong>  ⇒  6y + 2y = 80 ⇒ <strong>y* = 10, x* = 60</strong> (U* = 2,160,000)
          </div>
        `
      }
    ]
  },
  {
    id: 'm5',
    number: 'Modül 5',
    pages: 'Ders Notu Sayfa 11–12',
    simId: 'sim4',
    simLabel: 'Modül 5 Canlı Grafiği: Bireysel Talep Eğrisi Hareket vs. Kayma Simülatörü',
    relatedProblems: [],
    title: 'Bireysel Talep Eğrileri: Eğri Üzerinde Hareket vs. Kayma',
    summary: 'Talep eğrisinin türetilmesi, Talep Yasası, kendi fiyatı değiştiğinde eğri üzerinde hareket; gelir, diğer mal fiyatı ve tercih değiştiğinde kayma.',
    sections: [
      {
        title: '1. Talep Eğrisi Üzerinde Hareket vs. Kayma Grafikleri (Sayfa 11–12)',
        badge: 'Modül 5 • Sayfa 11–12 Grafikleri',
        badgeType: 'emerald',
        html: `
          <div class="embedded-graph-grid">
            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 5.1: Kendi Fiyatı (Pₓ) Düşünce Eğri Üzerinde Hareket</span>
                <span class="embedded-graph-mod">Modül 5 • Ders Notu Sayfa 12</span>
              </div>
              <svg viewBox="0 0 320 210">
                <line x1="45" y1="20" x2="45" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="45" y1="175" x2="285" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <text x="20" y="26" fill="#d4af37" font-size="11" font-weight="700">Pₓ</text>
                <text x="280" y="192" fill="#d4af37" font-size="11" font-weight="700" text-anchor="end">Qₓ</text>
                <line x1="65" y1="40" x2="245" y2="155" stroke="#d4af37" stroke-width="2.6"/>
                <text x="255" y="158" fill="#d4af37" font-size="11" font-weight="700">dₓ</text>
                <line x1="45" y1="72" x2="115" y2="72" stroke="rgba(255,255,255,0.3)" stroke-dasharray="3,3"/>
                <line x1="115" y1="72" x2="115" y2="175" stroke="rgba(255,255,255,0.3)" stroke-dasharray="3,3"/>
                <line x1="45" y1="118" x2="187" y2="118" stroke="rgba(255,255,255,0.3)" stroke-dasharray="3,3"/>
                <line x1="187" y1="118" x2="187" y2="175" stroke="rgba(255,255,255,0.3)" stroke-dasharray="3,3"/>
                <circle cx="115" cy="72" r="4.5" fill="#38bdf8"/><circle cx="187" cy="118" r="5" fill="#2ea06b"/>
                <text x="22" y="76" fill="#38bdf8" font-size="10.5">P₁</text><text x="22" y="122" fill="#2ea06b" font-size="10.5">P₂</text>
                <text x="115" y="190" fill="#38bdf8" font-size="10.5" text-anchor="middle">Q₁</text><text x="187" y="190" fill="#2ea06b" font-size="10.5" text-anchor="middle">Q₂</text>
                <text x="165" y="88" fill="#2ea06b" font-size="10.5" font-weight="700">↘ Aşağı Hareket</text>
              </svg>
              <div class="embedded-graph-caption">Modül 5 (Sayfa 12): x'in fiyatı düşerse (P₁→P₂) talep eğrisi sağa/sola KAYMAZ; aynı dₓ eğrisi üzerinde aşağı yönlü hareket eder.</div>
            </div>

            <div class="embedded-graph-card">
              <div class="embedded-graph-header">
                <span class="embedded-graph-title">📊 Grafik 5.2: Gelir, Pᵧ ve Tercih Değişimiyle Eğrinin Kayması</span>
                <span class="embedded-graph-mod">Modül 5 • Ders Notu Sayfa 11</span>
              </div>
              <svg viewBox="0 0 320 210">
                <line x1="45" y1="20" x2="45" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="45" y1="175" x2="285" y2="175" stroke="#b5b3ad" stroke-width="1.5"/>
                <line x1="65" y1="55" x2="205" y2="155" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="4,3"/>
                <line x1="110" y1="40" x2="255" y2="145" stroke="#2ea06b" stroke-width="2.6"/>
                <line x1="48" y1="82" x2="155" y2="162" stroke="#e03e52" stroke-width="2"/>
                <text x="212" y="160" fill="#38bdf8" font-size="10.5">dₓ (Baz)</text>
                <text x="260" y="148" fill="#2ea06b" font-size="10.5" font-weight="700">dₓ' (Sağa)</text>
                <text x="160" y="167" fill="#e03e52" font-size="10.5">dₓ'' (Sola)</text>
                <text x="175" y="75" fill="#2ea06b" font-size="10.5">→ Normal Mal (I↑) / İkame (Pᵧ↑) / Tercih↑</text>
                <text x="60" y="150" fill="#e03e52" font-size="10">← Düşük Mal (I↑) / Tamamlayıcı (Pᵧ↑)</text>
              </svg>
              <div class="embedded-graph-caption">Modül 5 (Sayfa 11): 1) Gelir artışı (Normal→Sağa, Düşük→Sola), 2) Pᵧ artışı (İkame→Sağa, Tamamlayıcı→Sola), 3) Tercih artışı (Yulaf lapası→Sağa).</div>
            </div>
          </div>
        `
      }
    ]
  }
];

const MIKRO_PROBLEMS = [
  {
    id: 'p1',
    moduleId: 'm1',
    moduleLabel: 'Modül 1: Tercihler & Rasyonalite',
    pageRef: 'Uygulama Notu Sayfa 1',
    simId: 'sim1',
    simPreset: 'not',
    set: 'Modül 1 Soruları',
    title: 'Problem 1 — Alice\'in 3 Sepeti (Rasyonalite & Döngü)',
    statement: 'Alice\'in önünde 3 meyve sepeti var: <strong>A(2 elma, 3 muz)</strong>, <strong>B(1 elma, 4 muz)</strong>, <strong>C(3 elma, 2 muz)</strong>. Alice\'in tercihleri: <code>A ≻ B</code>, <code>B ≻ C</code> ve <code>C ≻ A</code>. <br>a) Alice rasyonel midir? b) Hangi aksiyom ihlal ediliyor? c) Bu tercihlere bir fayda fonksiyonu önerebilir miyiz?',
    graphHtml: `
      <div class="embedded-graph-card" style="margin-top:12px;">
        <div class="embedded-graph-header">
          <span class="embedded-graph-title">📊 Problem 1 Grafiği: Alice'in A(2,3), B(1,4), C(3,2) Sepetleri ve Döngü</span>
          <span class="embedded-graph-mod">Modül 1 • Uygulama Sayfa 1</span>
        </div>
        <svg viewBox="0 0 460 155">
          <line x1="40" y1="15" x2="40" y2="135" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="40" y1="135" x2="220" y2="135" stroke="#b5b3ad" stroke-width="1.5"/>
          <text x="45" y="22" fill="#d4af37" font-size="10.5">Muz</text>
          <text x="215" y="148" fill="#d4af37" font-size="10.5" text-anchor="end">Elma</text>
          <circle cx="80" cy="40" r="5" fill="#38bdf8"/><text x="88" y="43" fill="#f4f1ea" font-size="10.5">B(1,4)</text>
          <circle cx="120" cy="68" r="5" fill="#d4af37"/><text x="128" y="71" fill="#f4f1ea" font-size="10.5">A(2,3)</text>
          <circle cx="165" cy="96" r="5" fill="#2ea06b"/><text x="173" y="99" fill="#f4f1ea" font-size="10.5">C(3,2)</text>
          <text x="335" y="45" fill="#e03e52" font-size="12" font-weight="700" text-anchor="middle">Döngü: A ≻ B ≻ C ≻ A (İrrasyonel)</text>
          <text x="335" y="78" fill="#2ea06b" font-size="11.5" text-anchor="middle">Düzeltme: C ≻ A yerine A ≻ C olmalı</text>
          <text x="335" y="105" fill="#d4af37" font-size="11.5" font-family="JetBrains Mono" text-anchor="middle">U(A)=3 &gt; U(B)=2 &gt; U(C)=1</text>
        </svg>
      </div>
    `,
    hints: [
      'İpucu 1 (Tamlık Kontrolü): Alice tüm sepet çiftlerini (A-B, B-C, C-A) karşılaştırabiliyor mu?',
      'İpucu 2 (Geçişkenlik Kontrolü): A ≻ B ve B ≻ C ise rasyonel bir tüketicide A ile C arasındaki ilişki ne olmalıydı?',
      'İpucu 3 (Çelişkiyi Yakala): Geçişkenlik A ≻ C gerektirirken Alice C ≻ A diyor. Bu bir tercih döngüsüdür.',
      'İpucu 4 (Fayda Fonksiyonu): Eğer U(A) > U(B) > U(C) ve aynı anda U(C) > U(A) yazılsaydı, U(A) > U(A) gibi imkânsız bir eşitsizlik çıkardı.',
      'İpucu 5 (Tam Çözüm Yapısı): a) Rasyonel değil; b) Geçişkenlik aksiyomu ihlal ediliyor; c) Döngü varken fayda fonksiyonu yazılamaz, ancak C ≻ A yerine A ≻ C yapılırsa U(A)=3 > U(B)=2 > U(C)=1 atanabilir.'
    ],
    solution: `
      <div class="math-box">
        a) <strong>Rasyonel değildir.</strong> Tüm ikili karşılaştırmalar yapılabildiği için Tamlık sağlanır ancak tutarlılık yoktur.<br>
        b) <strong>Geçişkenlik (Transitivity)</strong> koşulu ihlal edilmektedir. A ≻ B ve B ≻ C olduğundan <code>A ≻ C</code> olmalıydı; oysa <code>C ≻ A</code> verilmiştir.<br>
        c) Rasyonel olmayan (döngüsel) tercihler bir fayda fonksiyonu ile temsil edilemez. Tercihler <code>A ≻ B ≻ C</code> şeklinde rasyonel hale getirilirse <strong>U(A)=3, U(B)=2, U(C)=1</strong> atanabilir.
      </div>
    `
  },
  {
    id: 'p2',
    moduleId: 'm4',
    moduleLabel: 'Modül 4: Bütçe Kısıtı & Tam İkame Maksimizasyonu',
    pageRef: 'Uygulama Notu Sayfa 2',
    simId: 'sim3',
    simPreset: 'note',
    set: 'Modül 4 Soruları',
    title: 'Problem 2 — Deniz & Efe: Elma (x₁) ve Muz (x₂) Tam İkame Seçimi',
    statement: 'Deniz\'in fayda fonksiyonu <code>U<sub>D</sub>(x₁, x₂) = x₁ + 2x₂</code>, Efe\'nin fayda fonksiyonu <code>U<sub>E</sub>(x₁, x₂) = 2x₁ + 3x₂</code>. Elma fiyatı <code>P₁ = $2</code>, muz fiyatı <code>P₂ = $1</code> ve gelir <code>I = $10</code>.<br>a) İki tüketici için de hangi mal daha değerlidir? b) Her biri ne kadar elma ve muz alır?',
    graphHtml: `
      <div class="embedded-graph-card" style="margin-top:12px;">
        <div class="embedded-graph-header">
          <span class="embedded-graph-title">📊 Problem 2 Grafiği: Deniz &amp; Efe Bütçe Doğrusu (2x₁ + x₂ = 10) ve Köşe Çözüm (0, 10)</span>
          <span class="embedded-graph-mod">Modül 4 • Uygulama Sayfa 2</span>
        </div>
        <svg viewBox="0 0 460 165">
          <line x1="45" y1="15" x2="45" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="45" y1="140" x2="230" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <text x="50" y="24" fill="#d4af37" font-size="10.5">Muz (x₂)</text>
          <text x="225" y="154" fill="#d4af37" font-size="10.5" text-anchor="end">Elma (x₁)</text>
          <line x1="45" y1="30" x2="145" y2="140" stroke="#38bdf8" stroke-width="2.5"/>
          <line x1="45" y1="30" x2="205" y2="140" stroke="#d4af37" stroke-width="2" stroke-dasharray="5,3"/>
          <circle cx="45" cy="30" r="5.5" fill="#2ea06b" stroke="#fff"/>
          <text x="55" y="34" fill="#2ea06b" font-size="11" font-weight="700">Optimum (0, 10)</text>
          <text x="145" y="154" fill="#38bdf8" font-size="10" text-anchor="middle">5</text>
          <text x="245" y="55" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">Deniz: MU₂/P₂ = 2/1 = 2 &gt; MU₁/P₁ = 0.5</text>
          <text x="245" y="80" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">Efe:   MU₂/P₂ = 3/1 = 3 &gt; MU₁/P₁ = 1.0</text>
          <text x="245" y="110" fill="#2ea06b" font-size="11.5" font-weight="700">⇒ İkisi de 0 Elma, 10 Muz alır!</text>
        </svg>
      </div>
    `,
    hints: [
      'İpucu 1 (Marjinal Faydalar): Deniz için MU₁ = 1, MU₂ = 2; Efe için MU₁ = 2, MU₂ = 3. Katsayısı büyük olan malın marjinal faydası daha yüksektir.',
      'İpucu 2 (Sınav Tuzağı!): Tam ikame mallarda sadece MU₂ > MU₁ olması tek başına bütün geliri x₂\'ye harcamak için YETERLİ DEĞİLDİR!',
      'İpucu 3 (Doğru Kriter): 1 dolar başına düşen marjinal faydayı (MU₁/P₁ ile MU₂/P₂) karşılaştırmalısın.',
      'İpucu 4 (Hesapla): Deniz: MU₁/P₁ = 1/2 = 0.5 ve MU₂/P₂ = 2/1 = 2. Efe: MU₁/P₁ = 2/2 = 1 ve MU₂/P₂ = 3/1 = 3.',
      'İpucu 5 (Optimal Sepet): İkisi için de muzun dolar başına faydası büyük olduğundan tüm $10 bütçeyi $1\'lık muza harcarlar: (0 elma, 10 muz).'
    ],
    solution: `
      <div class="math-box">
        a) Her iki tüketici için de muzun marjinal faydası elmadan büyüktür (2 > 1 ve 3 > 2); dolayısıyla <strong>muz</strong> daha değerlidir.<br><br>
        b) 1 Dolar Başına Marjinal Fayda (MU / P) Karşılaştırması:<br>
        • Deniz: MU₁/P₁ = 1/2 = 0.5  &lt;  MU₂/P₂ = 2/1 = <strong>2</strong>  ⇒  Tamamı muz: <strong>(0 elma, 10 muz)</strong>, U<sub>D</sub> = 20.<br>
        • Efe:   MU₁/P₁ = 2/2 = 1.0  &lt;  MU₂/P₂ = 3/1 = <strong>3</strong>  ⇒  Tamamı muz: <strong>(0 elma, 10 muz)</strong>, U<sub>E</sub> = 30.
      </div>
    `
  },
  {
    id: 'p3',
    moduleId: 'm1',
    moduleLabel: 'Modül 1: Tercihler & Rasyonalite',
    pageRef: 'Uygulama Notu Sayfa 3',
    simId: 'sim1',
    simPreset: 'not',
    set: 'Modül 1 Soruları',
    title: 'Problem 3 — Annie & David: Sarı Boya Tonları',
    statement: 'David\'in boya tercihleri: <code>Sarı 1 ≻ {Sarı 2, Sarı 3, Sarı 4}</code> ve <code>Sarı 6 ≻ Sarı 5 ≻ Sarı 1</code>. Dükkanda en sevdiği <strong>Sarı 6</strong> kalmadığı için <strong>Sarı 5</strong> alıp duvarı boyarlar. Fakat sonra David <strong>Sarı 3</strong> alıp yeniden boyamakta ısrar eder. David rasyonel midir?',
    graphHtml: `
      <div class="embedded-graph-card" style="margin-top:12px;">
        <div class="embedded-graph-header">
          <span class="embedded-graph-title">📊 Problem 3 Şeması: David'in Sarı Boya Tercih Sıralaması ve Geçişkenlik İhlali</span>
          <span class="embedded-graph-mod">Modül 1 • Uygulama Sayfa 3</span>
        </div>
        <svg viewBox="0 0 480 110">
          <rect x="18" y="30" width="75" height="42" rx="6" fill="rgba(255,255,255,0.05)" stroke="#787773" stroke-dasharray="4,3"/>
          <text x="55" y="50" fill="#787773" font-size="11" text-anchor="middle">Sarı 6 (Yok)</text>
          <text x="108" y="55" fill="#d4af37" font-size="14" font-weight="700">≻</text>
          <rect x="122" y="30" width="85" height="42" rx="6" fill="rgba(46,160,107,0.18)" stroke="#2ea06b" stroke-width="2"/>
          <text x="164" y="55" fill="#2ea06b" font-size="11.5" font-weight="700" text-anchor="middle">Sarı 5 (Seçilen)</text>
          <text x="220" y="55" fill="#d4af37" font-size="14" font-weight="700">≻</text>
          <rect x="235" y="30" width="75" height="42" rx="6" fill="#181b22" stroke="#38bdf8"/>
          <text x="272" y="55" fill="#38bdf8" font-size="11.5" text-anchor="middle">Sarı 1</text>
          <text x="323" y="55" fill="#d4af37" font-size="14" font-weight="700">≻</text>
          <rect x="338" y="30" width="122" height="42" rx="6" fill="rgba(224,62,82,0.16)" stroke="#e03e52"/>
          <text x="399" y="55" fill="#e03e52" font-size="11" font-weight="700" text-anchor="middle">{Sarı 2, Sarı 3, Sarı 4}</text>
          <text x="240" y="95" fill="#fecaca" font-size="11" text-anchor="middle">Geçişkenlik gereği Sarı 5 ≻ Sarı 3 iken Sarı 3'e dönmek İRRASYONELDİR!</text>
        </svg>
      </div>
    `,
    hints: [
      'İpucu 1 (Sıralamayı Birleştir): Verilen iki bilgiyi tek zincirde birleştir: Sarı 6 ≻ Sarı 5 ≻ Sarı 1 ≻ {Sarı 2, 3, 4}.',
      'İpucu 2 (Geçişkenlik Uygula): Sarı 5 ≻ Sarı 1 ve Sarı 1 ≻ Sarı 3 olduğuna göre, Sarı 5 ile Sarı 3 arasındaki sıralama ne olmalıdır?',
      'İpucu 3 (İhlal Edilen İlke): Sarı 6\'nın stokta olmaması (ulaşılamaz olması), kalan seçenekler olan Sarı 5 ile Sarı 3 arasındaki tercihi değiştirmemelidir.',
      'İpucu 4 (Kavramsal Ad): Bu durum hem Geçişkenlik hem de İlgisiz Alternatiflerin Bağımsızlığı (IIA) ihlalidir.',
      'İpucu 5 (Sonuç): Hayır, David rasyonel değildir; Sarı 5 zaten Sarı 3\'ten kesinlikle üstündür.'
    ],
    solution: `
      <div class="math-box">
        Birleştirilmiş Tercih Zinciri: Sarı 6 ≻ <strong>Sarı 5</strong> ≻ Sarı 1 ≻ {Sarı 2, <strong>Sarı 3</strong>, Sarı 4}<br><br>
        • <strong>Rasyonel Değildir!</strong> Geçişkenlik gereği Sarı 5 ≻ Sarı 1 ve Sarı 1 ≻ Sarı 3 ⇒ <strong>Sarı 5 ≻ Sarı 3</strong> olmalıdır.<br>
        • Sarı 6\'nın stokta bulunmaması, mevcut alternatifler (Sarı 5 ve Sarı 3) arasındaki sıralamayı değiştiremez.
      </div>
    `
  },
  {
    id: 'p4',
    moduleId: 'm3',
    moduleLabel: 'Modül 3: Kayıtsızlık Eğrileri & MİO',
    pageRef: 'Uygulama Notu Sayfa 4 (Sol)',
    simId: 'sim1',
    simPreset: 'not',
    set: 'Modül 3 Soruları',
    title: 'Problem 4 — Noktasal MİO Hesabı: U(x₁, x₂) = x₁ · x₂',
    statement: 'Fayda fonksiyonu <code>U(x₁, x₂) = x₁ · x₂</code> olan bir tüketicinin <strong>A(1, 7)</strong> ve <strong>B(5, 5)</strong> noktalarındaki Marjinal İkame Oranını (MİO) hesaplayınız.',
    graphHtml: `
      <div class="embedded-graph-card" style="margin-top:12px;">
        <div class="embedded-graph-header">
          <span class="embedded-graph-title">📊 Problem 4 Grafiği: A(1,7) ve B(5,5) Noktalarında MİO Teğetleri</span>
          <span class="embedded-graph-mod">Modül 3 • Uygulama Sayfa 4 Sol</span>
        </div>
        <svg viewBox="0 0 460 165">
          <line x1="45" y1="15" x2="45" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="45" y1="140" x2="235" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <path d="M 65 28 Q 95 110 210 130" fill="none" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 85 22 Q 135 85 225 112" fill="none" stroke="#d4af37" stroke-width="2.3"/>
          <circle cx="68" cy="36" r="4.5" fill="#e03e52"/><text x="76" y="36" fill="#f4f1ea" font-size="10.5">A(1,7) ⇒ MİO=7</text>
          <circle cx="142" cy="78" r="4.5" fill="#2ea06b"/><text x="150" y="76" fill="#f4f1ea" font-size="10.5">B(5,5) ⇒ MİO=1</text>
          <text x="250" y="55" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">MİO = MU₁ / MU₂ = x₂ / x₁</text>
          <text x="250" y="82" fill="#e03e52" font-size="11.5" font-family="JetBrains Mono">• A(1,7): MİO = 7 / 1 = 7</text>
          <text x="250" y="106" fill="#2ea06b" font-size="11.5" font-family="JetBrains Mono">• B(5,5): MİO = 5 / 5 = 1</text>
        </svg>
      </div>
    `,
    hints: [
      'İpucu 1 (Formül): MİO = MU₁ / MU₂ = (∂U/∂x₁) / (∂U/∂x₂).',
      'İpucu 2 (Kısmi Türevler): x₁\'e göre türev alırken x₂ sabit tutulur: MU₁ = x₂. x₂\'ye göre türevde x₁ sabit: MU₂ = x₁.',
      'İpucu 3 (Genel MİO): MİO(x₁, x₂) = x₂ / x₁.',
      'İpucu 4 (A Noktası): x₁ = 1, x₂ = 7 değerlerini x₂ / x₁ formülüne koy.',
      'İpucu 5 (B Noktası): x₁ = 5, x₂ = 5 için MİO = 5 / 5 = 1.'
    ],
    solution: `
      <div class="math-box">
        U(x₁, x₂) = x₁ · x₂  ⇒  MU₁ = x₂, MU₂ = x₁  ⇒  MİO = <strong>x₂ / x₁</strong><br>
        • A(1, 7) noktasında: MİO<sub>(1,7)</sub> = 7 / 1 = <strong>7</strong><br>
        • B(5, 5) noktasında: MİO<sub>(5,5)</sub> = 5 / 5 = <strong>1</strong>
      </div>
    `
  },
  {
    id: 'p5',
    moduleId: 'm3',
    moduleLabel: 'Modül 3: Kayıtsızlık Eğrileri & MİO',
    pageRef: 'Uygulama Notu Sayfa 4 (Sağ)',
    simId: 'sim1',
    simPreset: 'not',
    set: 'Modül 3 Soruları',
    title: 'Problem 5 — Cebirsel MİO Hesabı (1): U(x₁, x₂) = x₁³ · x₂¹/²',
    statement: '<code>U(x₁, x₂) = x₁³ · x₂<sup>1/2</sup></code> fayda fonksiyonu için MİO formülünü türetiniz.',
    graphHtml: '',
    hints: [
      'İpucu 1: Kuvvet kuralını hatırla: d(xⁿ)/dx = n·xⁿ⁻¹.',
      'İpucu 2: MU₁ = ∂U/∂x₁ = 3x₁² · x₂¹/².',
      'İpucu 3: MU₂ = ∂U/∂x₂ = (1/2) · x₁³ · x₂⁻¹/².',
      'İpucu 4: MİO = MU₁ / MU₂ oranını yazarken tabanları aynı olan terimlerin üslerini çıkar: x₂¹/² / x₂⁻¹/² = x₂¹.',
      'İpucu 5: Katsayıları böl: 3 / (1/2) = 6; x₁² / x₁³ = 1/x₁. Sonuç: 6x₂ / x₁.'
    ],
    solution: `
      <div class="math-box">
        MU₁ = 3 · x₁² · x₂¹/²   |   MU₂ = (1/2) · x₁³ · x₂⁻¹/²<br>
        MİO = MU₁ / MU₂ = (3 / 0.5) · (x₁²⁻³) · (x₂¹/²⁻⁽⁻¹/²⁾) = <strong>6x₂ / x₁</strong>
      </div>
    `
  },
  {
    id: 'p6',
    moduleId: 'm3',
    moduleLabel: 'Modül 3: Kayıtsızlık Eğrileri & MİO',
    pageRef: 'Uygulama Notu Sayfa 5 (Sol)',
    simId: 'sim1',
    simPreset: 'not',
    set: 'Modül 3 Soruları',
    title: 'Problem 6 — Cebirsel MİO Hesabı (2): U(x₁, x₂) = x₁¹/² · x₂¹/⁴',
    statement: '<code>U(x₁, x₂) = x₁<sup>1/2</sup> · x₂<sup>1/4</sup></code> fayda fonksiyonu için MİO formülünü bulunuz.',
    graphHtml: '',
    hints: [
      'İpucu 1: MU₁ için x₁¹/² teriminin türevini al: (1/2)·x₁⁻¹/².',
      'İpucu 2: MU₂ için x₂¹/⁴ teriminin türevini al: (1/4)·x₂⁻³/⁴.',
      'İpucu 3: MİO = [(1/2)·x₁⁻¹/²·x₂¹/⁴] / [(1/4)·x₁¹/²·x₂⁻³/⁴].',
      'İpucu 4: (1/2) / (1/4) = 2. Üsleri düzenle: x₁⁻¹/²⁻¹/² = x₁⁻¹ ve x₂¹/⁴⁺³/⁴ = x₂¹.',
      'İpucu 5: Kısa yol (Cobb-Douglas x₁ᵃx₂ᵇ): MİO = (a/b)·(x₂/x₁) = ((1/2)/(1/4))·(x₂/x₁) = 2x₂ / x₁.'
    ],
    solution: `
      <div class="math-box">
        MU₁ = (1/2) · x₁⁻¹/² · x₂¹/⁴   |   MU₂ = (1/4) · x₁¹/² · x₂⁻³/⁴<br>
        MİO = [(1/2) / (1/4)] · x₁⁻¹/²⁻¹/² · x₂¹/⁴⁺³/⁴ = <strong>2x₂ / x₁</strong>
      </div>
    `
  },
  {
    id: 'p7',
    moduleId: 'm3',
    moduleLabel: 'Modül 3: Kayıtsızlık Eğrileri & Özel Tercihler',
    pageRef: 'Uygulama Notu Sayfa 5, 6 ve 7',
    simId: 'sim1',
    simPreset: 'jeans',
    set: 'Modül 3 Soruları',
    title: 'Problem 7 — 4 Farklı Tercih Senaryosu İçin Kayıtsızlık Eğrisi & Fayda Fonksiyonu',
    statement: 'Aşağıdaki 4 senaryo için kayıtsızlık eğrisi şeklini, tercih yönünü ve fayda fonksiyonunu belirleyiniz:<br>① Simit (x) ve Kahve (y) — ikisi birlikte daha zevkli (İyi Mallar)<br>② Dondurma (x) seviyor, Mantar (y) nefret ediyor (Kötü Mal)<br>③ Gevrek (x) seviyor, Yulaf (y) nötr (Nötr Mal)<br>④ Her 1 Jeans (x) için 3 Tişört (y) alıyor (Tam Tamamlayıcı)',
    graphHtml: `
      <div class="embedded-graph-grid" style="margin-top:12px;">
        <div class="embedded-graph-card">
          <div class="embedded-graph-header">
            <span class="embedded-graph-title">📊 ① Simit–Kahve (U = x·y)</span>
            <span class="embedded-graph-mod">Modül 3 • Uyg. S.5 Sağ</span>
          </div>
          <svg viewBox="0 0 220 145">
            <line x1="30" y1="15" x2="30" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <line x1="30" y1="120" x2="195" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <path d="M 48 28 Q 85 95 175 110" fill="none" stroke="#d4af37" stroke-width="2.3"/>
            <line x1="65" y1="95" x2="135" y2="40" stroke="#2ea06b" stroke-width="2"/>
            <text x="142" y="38" fill="#2ea06b" font-size="10.5" font-weight="700">Tercih ↗</text>
            <text x="35" y="24" fill="#b5b3ad" font-size="10">Kahve (y)</text><text x="190" y="135" fill="#b5b3ad" font-size="10" text-anchor="end">Simit (x)</text>
          </svg>
        </div>
        <div class="embedded-graph-card">
          <div class="embedded-graph-header">
            <span class="embedded-graph-title">📊 ② Dondurma–Mantar (U = x - y)</span>
            <span class="embedded-graph-mod">Modül 3 • Uyg. S.6 Sol</span>
          </div>
          <svg viewBox="0 0 220 145">
            <line x1="30" y1="15" x2="30" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <line x1="30" y1="120" x2="195" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <line x1="45" y1="108" x2="165" y2="28" stroke="#d4af37" stroke-width="2.3"/>
            <line x1="60" y1="35" x2="140" y2="95" stroke="#e03e52" stroke-width="2"/>
            <text x="145" y="102" fill="#e03e52" font-size="10.5" font-weight="700">Tercih ↘</text>
            <text x="35" y="24" fill="#b5b3ad" font-size="10">Mantar (y)</text><text x="190" y="135" fill="#b5b3ad" font-size="10" text-anchor="end">Dondurma (x)</text>
          </svg>
        </div>
        <div class="embedded-graph-card">
          <div class="embedded-graph-header">
            <span class="embedded-graph-title">📊 ③ Gevrek–Yulaf (U = x)</span>
            <span class="embedded-graph-mod">Modül 3 • Uyg. S.6 Sağ</span>
          </div>
          <svg viewBox="0 0 220 145">
            <line x1="30" y1="15" x2="30" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <line x1="30" y1="120" x2="195" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <line x1="95" y1="22" x2="95" y2="120" stroke="#d4af37" stroke-width="2.4"/>
            <line x1="55" y1="70" x2="155" y2="70" stroke="#38bdf8" stroke-width="2"/>
            <text x="160" y="73" fill="#38bdf8" font-size="10.5" font-weight="700">→</text>
            <text x="35" y="24" fill="#b5b3ad" font-size="10">Yulaf (y)</text><text x="190" y="135" fill="#b5b3ad" font-size="10" text-anchor="end">Gevrek (x)</text>
          </svg>
        </div>
        <div class="embedded-graph-card">
          <div class="embedded-graph-header">
            <span class="embedded-graph-title">📊 ④ Jeans–Tişört min(3x, y)</span>
            <span class="embedded-graph-mod">Modül 3 • Uyg. S.7</span>
          </div>
          <svg viewBox="0 0 220 145">
            <line x1="30" y1="15" x2="30" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <line x1="30" y1="120" x2="195" y2="120" stroke="#b5b3ad" stroke-width="1.5"/>
            <polyline points="80,25 80,82 180,82" fill="none" stroke="#d4af37" stroke-width="2.4"/>
            <line x1="30" y1="120" x2="145" y2="35" stroke="#2ea06b" stroke-width="2"/>
            <text x="135" y="30" fill="#2ea06b" font-size="10" font-weight="700">y=3x (↗)</text>
            <text x="35" y="24" fill="#b5b3ad" font-size="10">Tişört (y)</text><text x="190" y="135" fill="#b5b3ad" font-size="10" text-anchor="end">Jeans (x)</text>
          </svg>
        </div>
      </div>
    `,
    hints: [
      'İpucu 1 (Simit-Kahve): İkisi de iyi mal ve birlikte daha zevkli ⇒ Klasik orijine dışbükey eğri (Cobb-Douglas), tercih yönü sağ-yukarı (↗).',
      'İpucu 2 (Dondurma-Mantar): Mantar (y) kötü mal! Mantar arttıkça aynı faydada kalmak için dondurma (x) da artmalı ⇒ Pozitif eğimli doğru/eğri.',
      'İpucu 3 (Kötü Mal Tercih Yönü): Daha çok dondurma, daha az mantar istenir ⇒ Tercih yönü sağ-aşağı (↘)!',
      'İpucu 4 (Gevrek-Yulaf): Yulaf (y) nötr olduğundan miktarı faydayı değiştirmez ⇒ x eksenine dik (düşey) doğrular, tercih yönü sağa (→).',
      'İpucu 5 (Jeans-Tişört Sınav Tuzağı): (x=1, y=3) köşe noktasıdır; min içindeki terimler eşitlenmeli: 3x = y ⇒ U(x,y) = min(3x, y). Sakın min(x, 3y) yazma!'
    ],
    solution: `
      <div class="math-box">
        ① <strong>Simit (x) &amp; Kahve (y):</strong> Orijine dışbükey eğri | Tercih yönü: Sağ-Yukarı (↗) | U(x,y) = <strong>x · y</strong><br>
        ② <strong>Dondurma (x) &amp; Mantar (y — Kötü Mal):</strong> Pozitif eğimli doğru | Tercih yönü: Sağ-Aşağı (↘) | U(x,y) = <strong>x - y</strong><br>
        ③ <strong>Gevrek (x) &amp; Yulaf (y — Nötr Mal):</strong> Düşey (x eksenine dik) doğrular | Tercih yönü: Sağa (→) | U(x,y) = <strong>x</strong><br>
        ④ <strong>1 Jeans (x) + 3 Tişört (y — Tam Tamamlayıcı):</strong> L-tipi (köşeler y = 3x üzerinde) | Tercih yönü: Sağ-Yukarı (↗) | U(x,y) = <strong>min(3x, y)</strong>
      </div>
    `
  },
  {
    id: 'p8',
    moduleId: 'm4',
    moduleLabel: 'Modül 4: Cobb-Douglas & Lagrange Maksimizasyonu',
    pageRef: 'Uygulama Notu Sayfa 8 (Sol)',
    simId: 'sim2',
    simPreset: 'p9',
    set: 'Modül 4 Soruları',
    title: 'Problem 8 — Cobb-Douglas Üslerinin Ekonomik Anlamı ve Bütçe Payları',
    statement: '<code>U(x₁, x₂) = A · x₁<sup>α</sup> · x₂<sup>β</sup></code> fonksiyonunda α ve β üsleri ne anlama gelir? <code>U = x₁<sup>0.5</sup>x₂<sup>0.5</sup></code> ile <code>U = x₁<sup>0.7</sup>x₂<sup>0.3</sup></code> tüketim davranışını nasıl değiştirir?',
    graphHtml: '',
    hints: [
      'İpucu 1: Cobb-Douglas fonksiyonunda üsler malların tüketici gözündeki göreceli önemini gösterir.',
      'İpucu 2: Optimumda MİO = P₁/P₂ yazılırsa: (α/β)·(x₂/x₁) = P₁/P₂ ⇒ P₁x₁ / P₂x₂ = α / β.',
      'İpucu 3: Bütçe kısıtıyla birleştirince 1. mala ayrılan harcama payı α/(α+β), 2. mala ayrılan pay β/(α+β) olur.',
      'İpucu 4: α=0.5, β=0.5 için α+β = 1 olduğundan bütçenin %50\'si x₁\'e, %50\'si x₂\'ye gider.',
      'İpucu 5: α=0.7, β=0.3 için bütçenin %70\'i x₁\'e, %30\'u x₂\'ye ayrılır.'
    ],
    solution: `
      <div class="math-box">
        • Genel Kural: x₁\'e ayrılan bütçe payı = <strong>α / (α + β)</strong>, x₂\'ye ayrılan pay = <strong>β / (α + β)</strong>.<br>
        • <code>U = x₁<sup>0.5</sup> x₂<sup>0.5</sup></code> ⇒ Bütçe eşit ikiye bölünür (<strong>%50 x₁ – %50 x₂</strong>).<br>
        • <code>U = x₁<sup>0.7</sup> x₂<sup>0.3</sup></code> ⇒ Bütçenin büyük kısmı (<strong>%70\'i</strong>) x₁ malına, %30\'u x₂ malına ayrılır.
      </div>
    `
  },
  {
    id: 'p9',
    moduleId: 'm4',
    moduleLabel: 'Modül 4: Cobb-Douglas & Lagrange Maksimizasyonu',
    pageRef: 'Uygulama Notu Sayfa 8–9',
    simId: 'sim2',
    simPreset: 'p9',
    set: 'Modül 4 Soruları',
    title: 'Problem 9 — Lagrange ile Fayda Maksimizasyonu (I = 100)',
    statement: '<code>U(x₁, x₂) = x₁<sup>0.5</sup> · x₂<sup>0.5</sup></code>, elma fiyatı <code>P₁ = 2</code>, muz fiyatı <code>P₂ = 1</code>, gelir <code>I = 100</code>. Lagrange yöntemiyle optimal sepeti (x₁*, x₂*) bulunuz.',
    graphHtml: `
      <div class="embedded-graph-card" style="margin-top:12px;">
        <div class="embedded-graph-header">
          <span class="embedded-graph-title">📊 Problem 9 Grafiği: 2x₁ + x₂ = 100 Bütçe Doğrusu ve (25, 50) Lagrange Dengesi</span>
          <span class="embedded-graph-mod">Modül 4 • Uygulama Sayfa 8–9</span>
        </div>
        <svg viewBox="0 0 460 165">
          <line x1="45" y1="15" x2="45" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="45" y1="140" x2="235" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="45" y1="30" x2="215" y2="140" stroke="#38bdf8" stroke-width="2.4"/>
          <path d="M 75 24 Q 130 85 225 112" fill="none" stroke="#d4af37" stroke-width="2.4"/>
          <circle cx="130" cy="85" r="5.5" fill="#2ea06b" stroke="#fff"/>
          <text x="138" y="80" fill="#2ea06b" font-size="11" font-weight="700">E*(25, 50)</text>
          <text x="20" y="34" fill="#38bdf8" font-size="10">100</text><text x="215" y="153" fill="#38bdf8" font-size="10" text-anchor="middle">50</text>
          <text x="255" y="55" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">Kısıt: 2x₁ + x₂ = 100</text>
          <text x="255" y="80" fill="#d4af37" font-size="11.5" font-family="JetBrains Mono">Teğetlik: x₂ = 2x₁</text>
          <text x="255" y="105" fill="#2ea06b" font-size="11.5" font-weight="700" font-family="JetBrains Mono">⇒ x₁* = 25 Elma, x₂* = 50 Muz</text>
        </svg>
      </div>
    `,
    hints: [
      'İpucu 1 (Bütçe Kısıtı): 2x₁ + x₂ = 100.',
      'İpucu 2 (Lagrange Kurulumu): ℒ = x₁⁰·⁵x₂⁰·⁵ + λ(100 - 2x₁ - x₂).',
      'İpucu 3 (BDK): ∂ℒ/∂x₁ = 0.5x₁⁻⁰·⁵x₂⁰·⁵ - 2λ = 0 ve ∂ℒ/∂x₂ = 0.5x₁⁰·⁵x₂⁻⁰·⁵ - λ = 0.',
      'İpucu 4 (λ Eşitleme): (0.5x₁⁻⁰·⁵x₂⁰·⁵)/2 = 0.5x₁⁰·⁵x₂⁻⁰·⁵ ⇒ x₂ = 2x₁.',
      'İpucu 5 (Sonuç): 2x₁ + 2x₁ = 100 ⇒ 4x₁ = 100 ⇒ x₁* = 25 elma, x₂* = 50 muz.'
    ],
    solution: `
      <div class="math-box">
        ℒ(x₁, x₂, λ) = x₁⁰·⁵ · x₂⁰·⁵ + λ(100 - 2x₁ - x₂)<br>
        (1) = (2) ⇒ x₂ / 2 = x₁  ⇒  <strong>x₂ = 2x₁</strong><br>
        Bütçede yerine koy: 2x₁ + (2x₁) = 100 ⇒ 4x₁ = 100 ⇒ <strong>x₁* = 25 elma</strong>, <strong>x₂* = 50 muz</strong>.
      </div>
    `
  },
  {
    id: 'p10',
    moduleId: 'm4',
    moduleLabel: 'Modül 4: Cobb-Douglas & Lagrange Maksimizasyonu',
    pageRef: 'Uygulama Notu Sayfa 9 (Sağ)',
    simId: 'sim2',
    simPreset: 'p10',
    set: 'Modül 4 Soruları',
    title: 'Problem 10 — Lagrange ile Fayda Maksimizasyonu (I = 30)',
    statement: '<code>U(x, y) = x<sup>1/2</sup> · y<sup>1/2</sup></code>, <code>Pₓ = 2</code>, <code>Pᵧ = 1</code>, <code>I = 30</code>. Lagrange yöntemiyle optimal sepeti (x*, y*) bulunuz.',
    graphHtml: `
      <div class="embedded-graph-card" style="margin-top:12px;">
        <div class="embedded-graph-header">
          <span class="embedded-graph-title">📊 Problem 10 Grafiği: 2x + y = 30 Bütçe Doğrusu ve (7.5, 15) Lagrange Dengesi</span>
          <span class="embedded-graph-mod">Modül 4 • Uygulama Sayfa 9 Sağ</span>
        </div>
        <svg viewBox="0 0 460 165">
          <line x1="45" y1="15" x2="45" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="45" y1="140" x2="235" y2="140" stroke="#b5b3ad" stroke-width="1.5"/>
          <line x1="45" y1="30" x2="215" y2="140" stroke="#38bdf8" stroke-width="2.4"/>
          <path d="M 75 24 Q 130 85 225 112" fill="none" stroke="#d4af37" stroke-width="2.4"/>
          <circle cx="130" cy="85" r="5.5" fill="#2ea06b" stroke="#fff"/>
          <text x="138" y="80" fill="#2ea06b" font-size="11" font-weight="700">E*(7.5, 15)</text>
          <text x="22" y="34" fill="#38bdf8" font-size="10">30</text><text x="215" y="153" fill="#38bdf8" font-size="10" text-anchor="middle">15</text>
          <text x="255" y="55" fill="#f4f1ea" font-size="11.5" font-family="JetBrains Mono">Kısıt: 2x + y = 30</text>
          <text x="255" y="80" fill="#d4af37" font-size="11.5" font-family="JetBrains Mono">Teğetlik: y = 2x ⇒ 4x = 30</text>
          <text x="255" y="105" fill="#2ea06b" font-size="11.5" font-weight="700" font-family="JetBrains Mono">⇒ x* = 7.5, y* = 15</text>
        </svg>
      </div>
    `,
    hints: [
      'İpucu 1 (Kısıt): 2x + y = 30.',
      'İpucu 2 (Lagrange): ℒ = x¹/²y¹/² + λ(30 - 2x - y).',
      'İpucu 3 (Teğetlik Koşulu): MİO = Pₓ/Pᵧ ⇒ y/x = 2/1 ⇒ y = 2x.',
      'İpucu 4 (Kısıta Yaz): 2x + 2x = 30 ⇒ 4x = 30.',
      'İpucu 5 (Çözüm): x* = 7.5 ve y* = 15.'
    ],
    solution: `
      <div class="math-box">
        ℒ(x, y, λ) = x¹/² · y¹/² + λ(30 - 2x - y)<br>
        BDK: MİO = y/x = Pₓ/Pᵧ = 2/1  ⇒  <strong>y = 2x</strong><br>
        Kısıt: 2x + (2x) = 30 ⇒ 4x = 30 ⇒ <strong>x* = 7.5</strong>, <strong>y* = 15</strong>.
      </div>
    `
  }
];

const MIKRO_CRITIQUES = [
  {
    id: 'c1',
    moduleId: 'm1',
    ref: 'Modül 1 • Ders Notu Sayfa 2',
    title: '1. Kesin Tercih (≻) Geçişkenlik İspatı Eksikliği',
    noteText: 'x ≻ y ⇒ (x ≿ y ama x ≁ y) ve y ≻ z ⇒ (y ≿ z ama y ≁ z) yazılıp sağ kolda doğrudan "geçişkenlikten x ≁ z" denmiş.',
    mathError: 'Kayıtsız olmama (≁) ilişkisi geçişken DEĞİLDİR! Örnek: x ≁ y ve y ≁ x iken x ∼ x doğrudur. Sınavda bu adımdan puan kırılır.',
    correctProof: `
      1. x ≿ y ve y ≿ z olduğundan ≿'nin geçişkenliğinden x ≿ z elde edilir.<br>
      2. x ≻ z olması için z ≿̸ x olduğunu göstermeliyiz. <strong>Olmayana Ergi:</strong> Tersini varsayalım: z ≿ x olsun.<br>
      3. y ≿ z ve z ≿ x olduğundan ≿'nin geçişkenliğinden y ≿ x çıkar.<br>
      4. Oysa x ≻ y verilmişti (yani y ≿̸ x). <strong>Çelişki!</strong> O halde z ≿̸ x doğrudur. ⇒ <strong>x ≻ z</strong>. ∎
    `
  },
  {
    id: 'c2',
    moduleId: 'm3',
    ref: 'Modül 3 • Ders Notu Sayfa 5 (ve Modül 2 Sayfa 2)',
    title: '2. Marjinal İkame Oranı (MİO / MRS) Tanımındaki Yön Sürçmesi',
    noteText: '"Tüketicinin tükettiği mallardan birinin tüketimini 1 br azaldığında aynı fayda düzeyini koruyabilmek için diğer maldan ne kadar vazgeçmesi gerektiğini gösteren oran." (Ek yazım: Sayfa 2 "Cateris Paribus").',
    mathError: 'İki mal da iyi malsa, birinin tüketimi azaldığında aynı faydada kalmak için diğerinden vazgeçilmez; diğerinin tüketimi ARTIRILIR!',
    correctProof: `
      <strong>Doğru Tanım:</strong> Yatay eksendeki malın (x₁) tüketimi <strong>1 birim artırıldığında</strong>, aynı fayda düzeyini (kayıtsızlık eğrisini) koruyabilmek için dikey eksendeki maldan (x₂) <strong>kaç birim vazgeçilmesi</strong> gerektiğini gösteren orandır.<br>
      <em>(Yazım Düzeltmesi: "Cateris Paribus" → doğrusu <strong>Ceteris Paribus</strong>.)</em>
    `
  },
  {
    id: 'c3',
    moduleId: 'm3',
    ref: 'Modül 3 • Ders Notu Sayfa 6',
    title: '3. Toplam Diferansiyel ve MİO Türetimindeki İndis Kayması',
    noteText: '(DU / Dx₁) · Dx₂ + (DU / Dx) · Dx₂ = 0 şeklinde yazılmış.',
    mathError: 'İlk terimde dx₂ yerine dx₁, ikinci terimde dx yerine dx₂ olmalı ve çok değişkenli fonksiyon olduğu için kısmi türev sembolü (∂) kullanılmalıdır.',
    correctProof: `
      dU = (∂U/∂x₁)·dx₁ + (∂U/∂x₂)·dx₂ = 0<br>
      ⇒ MİO<sub>x₁,x₂</sub> = -dx₂/dx₁ |<sub>dU=0</sub> = (∂U/∂x₁) / (∂U/∂x₂) = <strong>MU₁ / MU₂</strong>
    `
  },
  {
    id: 'c4',
    moduleId: 'm4',
    ref: 'Modül 4 • Uygulama Notu Sayfa 2 (Problem 2)',
    title: '4. Tam İkame Mallarda "Sadece Katsayıya (MU) Bakma" Tuzağı (Deniz & Efe)',
    noteText: 'Deniz (U_D = x₁ + 2x₂) ve Efe (U_E = 2x₁ + 3x₂) için muzun (x₂) katsayısı daha büyük olduğu için "muz daha değerli, bütün geliri muzda kullanır: (0,10)" denmiş.',
    mathError: 'Soruda P₁=$2, P₂=$1 verildiği için muz hem daha yüksek MU\'ya sahip hem de daha ucuzdur; sonuç (0,10) doğrudur. ANCAK sınavda tek başına MU₂ > MU₁ olması yeterli değildir! Fiyatlar P₁=$1, P₂=$2 verilseydi büyük katsayılı malı seçmek YANLIŞ olurdu.',
    correctProof: `
      <strong>Doğru Kriter — 1 Dolar Başına Düşen Marjinal Fayda (MU / P):</strong><br>
      • P₁=$2, P₂=$1 iken Efe: MU₁/P₁ = 2/2 = 1 &lt; MU₂/P₂ = 3/1 = 3 ⇒ (0, 10), U=30.<br>
      • <strong>Sınav Tuzağı:</strong> P₁=$1, P₂=$2 olsaydı Efe için muz hâlâ daha değerli (3&gt;2) ama MU₁/P₁ = 2/1 = 2 &gt; MU₂/P₂ = 3/2 = 1.5 olacağından Efe <strong>(10, 0)</strong> seçerdi (U=20 &gt; 15)!
    `
  },
  {
    id: 'c5',
    moduleId: 'm3',
    ref: 'Modül 3 • Uygulama Notu Sayfa 7 (Problem 7-④)',
    title: '5. Tam Tamamlayıcı (Leontief) Katsayı Kuralı — Jeans & Tişört Tuzağı',
    noteText: 'Alice her 1 jeans (x) için 3 tişört (y) alır ⇒ U(x,y) = min(3x, y) → 3x = y.',
    mathError: 'Öğrencilerin sınavda en sık yaptığı hata, "1 jeans, 3 tişört" cümlesini doğrudan sayılarla çarpıp yanlışlıkla min(x, 3y) yazmaktır.',
    correctProof: `
      <strong>Kontrol Testi (Köşe Noktası Testi):</strong><br>
      1 jeans ve 3 tişört sepeti <strong>(x=1, y=3)</strong> bir köşe noktasıdır. Köşe noktalarında min içindeki iki ifade birbirine eşit olmalıdır:<br>
      • Doğru: <code>3x = y</code> ⇒ 3(1) = 3 ✓ ⇒ <strong>U(x,y) = min(3x, y)</strong> veya <code>min(x, y/3)</code>.<br>
      • Yanlış: <code>x = 3y</code> ⇒ 1 = 3(3) = 9 ✗ (Bu 1 tişörte 3 jeans demektir!).
    `
  }
];

const MIKRO_QUIZ = [
  {
    q: '1. [Modül 1] Bir zayıf tercih ilişkisinin (≿) rasyonel sayılabilmesi için hangi iki aksiyomu sağlaması gerekir?',
    options: ['Süreklilik ve Dışbükeylik', 'Tamlık ve Geçişkenlik', 'Monotonluk ve Simetri', 'Azalan MİO ve Doyumsuzluk'],
    answer: 1,
    explanation: 'Rasyonalite aksiyomları Tamlık (Completeness) ve Geçişkenliktir (Transitivity).'
  },
  {
    q: '2. [Modül 1] Ders Notu Sayfa 2\'deki kesin tercih geçişkenliği ispatında neden "x ≁ y ve y ≁ z ⇒ x ≁ z" yazılamaz?',
    options: ['Kayıtsız olmama (≁) ilişkisi geçişken değildir', 'Kesin tercih tam değildir', 'Fayda fonksiyonu türevlenebilir değildir', 'Zayıf tercih simetrik olduğu için'],
    answer: 0,
    explanation: 'x ≁ y ve y ≁ x iken x ∼ x doğrudur; yani ≁ geçişken değildir. İspat Olmayana Ergi ile z ≿̸ x gösterilerek yapılır.'
  },
  {
    q: '3. [Modül 2] U(x) = 6 ve U(y) = 2 ise ordinal (sıralı) fayda kuramına göre aşağıdakilerden hangisi YANLIŞTIR?',
    options: ['x ≻ y', 'x ≿ y', 'x\'i y\'ye 3 kat fazla tercih ederim', 'V(x) = 2U(x) + 10 dönüşümü sıralamayı korur'],
    answer: 2,
    explanation: 'Fayda sıralı (ordinal) bir kavramdır; yalnızca sıralama bildirir, "3 kat fazla" gibi kardinal oranlar kurulamaz.'
  },
  {
    q: '4. [Modül 2] U(x₁, x₂) = x₁ · x₂ için V = U² ve W = 2U + 10 dönüşümleri uygulandığında (4,1), (2,3), (2,2) sepetlerinin sıralaması nasıl değişir?',
    options: ['Tam tersine döner', '(2,3) ile (4,1) eşitlenir', 'Sıralama hiç değişmez: (2,3) ≻ (4,1) ∼ (2,2)', 'W negatif olur'],
    answer: 2,
    explanation: 'Pozitif (artan) monotonik dönüşümler tercih sıralamasını birebir korur: W(2,3)=22 > W(4,1)=18 = W(2,2)=18.'
  },
  {
    q: '5. [Modül 3] Kayıtsızlık eğrisi üzerinde A(2,6) noktasından B(3,4) noktasına geçerken |MİO| değeri kaçtır?',
    options: ['0.5', '1', '2', '4'],
    answer: 2,
    explanation: '1 birim daha fazla x₁ için 2 birim x₂\'den vazgeçilmiştir: |Δx₂/Δx₁| = |4-6| / |3-2| = 2.'
  },
  {
    q: '6. [Modül 3] U(x, y) = x · y için A(2,6) ve D(6,2) noktaları U=12 eğrisindeyken, ortalamaları G(4,4) noktasının faydası kaçtır ve bu neyi gösterir?',
    options: ['U=12, doğrusal eğri', 'U=16 > 12, dışbükeylik ve dengeli tüketimin üstünlüğü', 'U=8 < 12, içbükeylik', 'U=24, tam tamamlayıcılık'],
    answer: 1,
    explanation: 'G(4,4) ⇒ 4×4 = 16 > 12. Bu durum azalan MİO ve dışbükeyliği (dengeli sepetin uç sepete tercih edilmesini) gösterir.'
  },
  {
    q: '7. [Modül 3] U(x₁, x₂) = x₁³ · x₂¹/² fayda fonksiyonunun MİO formülü aşağıdakilerden hangisidir?',
    options: ['6x₂ / x₁', 'x₂ / (6x₁)', '3x₁ / x₂', '2x₂ / x₁'],
    answer: 0,
    explanation: 'MU₁ = 3x₁²x₂¹/², MU₂ = (1/2)x₁³x₂⁻¹/² ⇒ MU₁/MU₂ = 6x₂/x₁.'
  },
  {
    q: '8. [Modül 3] Bir tüketici dondurmayı (x) seviyor, mantardan (y) nefret ediyorsa (kötü mal) kayıtsızlık eğrisi ve tercih yönü nasıldır?',
    options: ['Negatif eğimli, sağ-yukarı', 'Pozitif eğimli, sağ-aşağı (↘)', 'Düşey doğru, sağa (→)', 'L-tipi, sağ-yukarı'],
    answer: 1,
    explanation: 'Kötü mal arttıkça faydayı sabit tutmak için iyi mal da artmalı (pozitif eğim); daha az kötü mal ve daha çok iyi mal için tercih yönü sağ-aşağıdır (↘).'
  },
  {
    q: '9. [Modül 3] Alice her 1 jeans (x) için 3 tişört (y) giyiyorsa doğru Leontief fayda fonksiyonu hangisidir?',
    options: ['U(x,y) = min(x, 3y)', 'U(x,y) = min(3x, y)', 'U(x,y) = 3x + y', 'U(x,y) = x³y'],
    answer: 1,
    explanation: 'Köşe noktası (x=1, y=3) için 3x = y sağlanmalıdır: 3(1) = 3 ⇒ U(x,y) = min(3x, y).'
  },
  {
    q: '10. [Modül 4] U_E = 2x₁ + 3x₂ (tam ikame), I = $10 ve fiyatlar P₁ = $1, P₂ = $2 ise Efe\'nin optimal sepeti nedir?',
    options: ['(0, 5)', '(10, 0)', '(5, 2.5)', '(0, 10)'],
    answer: 1,
    explanation: 'MU₁/P₁ = 2/1 = 2 > MU₂/P₂ = 3/2 = 1.5 olduğundan Efe tüm gelirini x₁\'e harcar: (10, 0).'
  },
  {
    q: '11. [Modül 4] U(x₁, x₂) = x₁⁰·⁷ · x₂⁰·³ fayda fonksiyonuna sahip bir tüketici gelirinin yüzde kaçını x₁ malına ayırır?',
    options: ['%30', '%50', '%70', '%100'],
    answer: 2,
    explanation: 'Cobb-Douglas\'ta x₁ bütçe payı α/(α+β) = 0.7 / (0.7+0.3) = %70\'tir.'
  },
  {
    q: '12. [Modül 4] U(x, y) = x³ · y, Pₓ = 1, Pᵧ = 2, I = 80 için Lagrange çözümüyle (x*, y*) nedir?',
    options: ['(20, 30)', '(40, 20)', '(60, 10)', '(10, 35)'],
    answer: 2,
    explanation: 'MİO = 3y/x = Pₓ/Pᵧ = 1/2 ⇒ x = 6y. Kısıt: 6y + 2y = 80 ⇒ y*=10, x*=60.'
  },
  {
    q: '13. [Modül 4] U(x₁, x₂) = x₁⁰·⁵ · x₂⁰·⁵, P₁ = 2, P₂ = 1, I = 100 için optimal sepet nedir?',
    options: ['(25, 50)', '(50, 25)', '(20, 60)', '(30, 40)'],
    answer: 0,
    explanation: 'Eşit üsler bütçeyi %50-%50 böler: P₁x₁ = 50 ⇒ x₁*=25; P₂x₂ = 50 ⇒ x₂*=50.'
  },
  {
    q: '14. [Modül 5] Bir malın kendi fiyatı (Pₓ) düştüğünde bireysel talep eğrisinde ne gözlemlenir?',
    options: ['Talep eğrisi sağa kayar', 'Talep eğrisi sola kayar', 'Aynı talep eğrisi üzerinde aşağı-sağa hareket edilir', 'Talep eğrisi dikey konuma gelir'],
    answer: 2,
    explanation: 'Malın kendi fiyatı değiştiğinde talep eğrisi kaymaz; aynı eğri üzerinde hareket edilir.'
  },
  {
    q: '15. [Modül 5] X ve Y tamamlayıcı mallar iken Y malının fiyatı (Pᵧ) artarsa X malının talep eğrisi nasıl etkilenir?',
    options: ['Sağa kayar', 'Sola kayar', 'Eğri üzerinde yukarı hareket edilir', 'Değişmez'],
    answer: 1,
    explanation: 'Tamamlayıcı malın fiyatı artınca Y kullanımı düşer, onunla birlikte tüketilen X\'in talep eğrisi sola kayar.'
  }
];
