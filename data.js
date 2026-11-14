// GTÜ İKT201 Mikroiktisat I — 21 Sayfalık El Yazısı Ders (12) ve Uygulama (9) Notları Veri Külliyatı

const MIKRO_MODULES = [
  {
    id: 'm1',
    number: 'Modül 1',
    pages: 'Ders Notu Sayfa 1–2',
    title: 'Tercihler, Tercih İlişkileri ve Rasyonalite Aksiyomları',
    summary: 'Zayıf tercih (≿), kesin tercih (≻) ve kayıtsızlık (∼) ilişkileri; Tamlık ve Geçişkenlik aksiyomları; geçişkenlik ispatları ve Sayfa 2 ÖDEV tam çözümü.',
    sections: [
      {
        title: '1. Temel Tercih İlişkileri',
        badge: 'Temel Aksiyomlar',
        badgeType: 'gold',
        html: `
          <ul class="clean-list">
            <li><strong>Zayıf Tercih (x ≿ y):</strong> "x'i y'ye tercih ederim ama y de verirseniz sorun değil (x, en az y kadar iyidir)."<br><span class="muted-note">Mantıksal karşılığı: <code>x ≿ y ⇔ x ≻ y veya x ∼ y</code></span></li>
            <li><strong>Kesin Tercih (x ≻ y):</strong> "x'i y'ye kesinlikle tercih ederim; y verirseniz kabul etmem."<br><span class="muted-note">Mantıksal karşılığı: <code>x ≻ y ⇔ x ≿ y ama y ≿̸ x</code> (notta ayrıca <code>x ≁ y</code> şeklinde ifade edilir).</span></li>
            <li><strong>Kayıtsızlık (x ∼ y):</strong> "x ve y arasında kararsızım / ikisi de benim için fark etmez."<br><span class="muted-note">Mantıksal karşılığı: <code>x ∼ y ⇔ x ≿ y ve y ≿ x</code></span></li>
          </ul>
        `
      },
      {
        title: '2. Rasyonalite Aksiyomları (Tamlık & Geçişkenlik)',
        badge: 'Rasyonalite',
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
        badge: 'İspat',
        badgeType: 'sky',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;margin-bottom:8px;"><strong>Teorem 1:</strong> ≿ rasyonel ise kayıtsızlık ilişkisi (∼) de geçişkendir: <code>(x ∼ y ve y ∼ z) ⇒ x ∼ z</code>.</p>
          <div class="math-box">
            x ∼ y ⇒ (x ≿ y ve y ≿ x)<br>
            y ∼ z ⇒ (y ≿ z ve z ≿ y)<br>
            ≿ geçişken olduğundan: (x ≿ y ve y ≿ z) ⇒ x ≿ z; ayrıca (z ≿ y ve y ≿ x) ⇒ z ≿ x.<br>
            Hem x ≿ z hem z ≿ x sağlandığından tanım gereği <strong>x ∼ z</strong> elde edilir. ∎
          </div>
          <p style="color:var(--text-secondary);font-size:14.5px;margin:10px 0 6px;"><strong>Teorem 2:</strong> ≿ rasyonel ise kesin tercih (≻) de geçişkendir: <code>(x ≻ y ve y ≻ z) ⇒ x ≻ z</code>.</p>
          <div class="callout callout-crimson">
            <div class="callout-title">🚨 Gerçek Eleştiri #1 — Nottaki İspat Eksikliği (Sayfa 2)</div>
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
        badge: 'Ödev Tam Çözüm',
        badgeType: 'emerald',
        html: `
          <div class="callout callout-emerald">
            <div class="callout-title">✅ Notta Açık Bırakılan Ödevin Eksiksiz Çözümü</div>
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
    title: 'Fayda Fonksiyonu ve Monotonik Dönüşümler',
    summary: 'Ceteris Paribus varsayımı, Temsil Teoremi, faydanın sıralı (ordinal) doğası, monotonik dönüşüm örnekleri ve Sayfa 3 KENDİN ÇÖZ tam çözümü.',
    sections: [
      {
        title: '1. Fayda Kavramı ve Ceteris Paribus',
        badge: 'Kavram',
        badgeType: 'gold',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;"><strong>Fayda:</strong> İnsanların ekonomik faaliyetleri ile ihtiyaçlarının karşılanmasından dolayı aldıkları haz veya memnuniyettir. Tüm mikroiktisat analizleri <strong>Ceteris Paribus</strong> (diğer tüm değişkenler sabit) varsayımı altında yapılır.</p>
          <div class="callout callout-sky">
            <div class="callout-title">✍️ Küçük Yazım Düzeltmesi (Sayfa 2)</div>
            <p style="font-size:13.5px;color:var(--text-secondary);">El yazısı notta "Cateris Paribus" olarak yazılan Latince terimin doğru yazımı <strong>Ceteris Paribus</strong>'tur.</p>
          </div>
        `
      },
      {
        title: '2. Temsil Teoremi ve Sıralı (Ordinal) Fayda',
        badge: 'Teorem',
        badgeType: 'sky',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">Rasyonel bir tercih ilişkisi bir <code>U(·)</code> fayda fonksiyonu ile temsil edilebilir:</p>
          <div class="math-box">
            x ≿ y ⇔ U(x) ≥ U(y)<br>
            x ≻ y ⇔ U(x) > U(y)<br>
            x ∼ y ⇔ U(x) = U(y)
          </div>
          <p style="color:var(--text-secondary);font-size:14.5px;"><strong>Sıralı (Ordinal) İlişki Uyarısı:</strong> Fayda sayıları yalnızca sıralama yapar, büyüklük oranı ölçmez. Örneğin <code>U(x) = 6</code> ve <code>U(y) = 2</code> ise <em>"x'i y'ye kesin tercih ederim"</em> deriz; ancak <strong>"x'i y'ye 3 kat fazla tercih ederim" DEMEYİZ!</strong></p>
        `
      },
      {
        title: '3. Monotonik Dönüşümler ve Sayfa 3 KENDİN ÇÖZ Tam Çözümü',
        badge: 'Kendin Çöz',
        badgeType: 'emerald',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">Tercih ilişkilerini gösteren tek bir fayda fonksiyonu yoktur. Artan (pozitif) bir monotonik dönüşüm sıralamayı değiştirmez.</p>
          <div class="math-box">
            Verilen Fonksiyon: U(x₁, x₂) = x₁ · x₂<br>
            Sepetler: A(4,1) → U = 4  |  B(2,3) → U = 6  |  C(2,2) → U = 4<br>
            Tercih Sıralaması: <strong>(2,3) ≻ (4,1) ∼ (2,2)</strong><br><br>
            Dönüşüm 1 (Nottaki Örnek): V(x₁, x₂) = (U(x₁, x₂))² = (x₁·x₂)² (U > 0 iken artan)<br>
            V(4,1) = 16  |  V(2,3) = 36  |  V(2,2) = 16  ⇒  Sıralama aynı: <strong>(2,3) ≻ (4,1) ∼ (2,2)</strong>
          </div>
          <div class="callout callout-emerald">
            <div class="callout-title">✅ Sayfa 3 "KENDİN ÇÖZ" Tam Çözümü: W = 2U + 10</div>
            <p style="font-size:14px;color:var(--text-secondary);margin-bottom:8px;"><code>W = 2U + 10</code> pozitif doğrusal (artan monotonik) bir dönüşümdür (<code>dW/dU = 2 > 0</code>). Her sepet için hesaplayalım:</p>
            <div class="math-box">
              W(4,1) = 2 · U(4,1) + 10 = 2(4) + 10 = <strong>18</strong><br>
              W(2,3) = 2 · U(2,3) + 10 = 2(6) + 10 = <strong>22</strong><br>
              W(2,2) = 2 · U(2,2) + 10 = 2(4) + 10 = <strong>18</strong><br>
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
    title: 'Kayıtsızlık Eğrileri, Haritası, MİO ve Özel Fayda Fonksiyonları',
    summary: 'U=x·y kayıtsızlık haritası, azalan MİO ve dışbükeylik, Tam İkame, Tam Tamamlayıcı, Cobb-Douglas ve MİO = MU₁/MU₂ türetimi.',
    sections: [
      {
        title: '1. Kayıtsızlık Eğrisi ve Kayıtsızlık Haritası (Sayfa 4)',
        badge: 'Grafik',
        badgeType: 'gold',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">İki malın aynı faydayı sağlayan tüm kombinasyonlarını birleştiren eğriye <strong>kayıtsızlık eğrisi</strong> denir. Sağ yukarı çıkıldıkça (daha çok mal tüketildikçe) fayda düzeyi artar: <code>U₃ > U₂ > U₁</code>.</p>
          <div class="math-box">
            Örnek: X = İçecek, Y = Hamburger, U(x, y) = x · y<br>
            • U₂ = 12 eğrisi üzerindeki noktalar: A(2,6), B(3,4), C(4,3), D(6,2)<br>
            • Alt eğri: F(3,2) ⇒ U₁ = 6<br>
            • Üst eğri: E(5,4) ⇒ U₃ = 20
          </div>
        `
      },
      {
        title: '2. Marjinal İkame Oranı (MİO / MRS) ve Azalan MİO (Sayfa 5)',
        badge: 'Kritik Tanım',
        badgeType: 'crimson',
        html: `
          <div class="callout callout-crimson">
            <div class="callout-title">🚨 Gerçek Eleştiri #2 — MİO Tanımındaki Yön Sürçmesi</div>
            <p style="font-size:13.5px;color:var(--text-secondary);">El yazısı notta "mallardan birinin tüketimi <strong>1 br azaldığında</strong> diğer maldan ne kadar <strong>vazgeçmesi</strong> gerektiği" yazılmıştır. İki mal da iyi malsa biri azalırken aynı faydada kalmak için diğerinden vazgeçilmez, diğeri <strong>artırılır</strong>! Doğru tanım: <strong>Yatay eksendeki malın (x₁) tüketimi 1 birim artırıldığında, aynı faydayı koruyabilmek için dikey eksendeki maldan (x₂) kaç birim vazgeçilmesi gerektiğini gösteren orandır.</strong></p>
          </div>
          <div class="math-box">
            U = 12 eğrisinde adım adım MİO hesabı:<br>
            • A(2,6) → B(3,4): +1 içecek için 2 hamburgerden vazgeçilir ⇒ m = (4-6)/(3-2) = -2 ⇒ |MİO| = <strong>2</strong><br>
            • B(3,4) → C(4,3): +1 içecek için 1 hamburgerden vazgeçilir ⇒ m = (3-4)/(4-3) = -1 ⇒ |MİO| = <strong>1</strong><br>
            • C(4,3) → D(6,2): +2 içecek için 1 hamburgerden (1 içecek için 0.5) vazgeçilir ⇒ |MİO| = <strong>0.5</strong>
          </div>
          <p style="color:var(--text-secondary);font-size:14.5px;"><strong>Azalan MİO ve Dışbükeylik:</strong> Rasyonel bireyde dengeli tüketim uç tüketimden daha faydalıdır. A(2,6) ve D(6,2) noktaları U₁ = 12 verirken, ortalamaları olan <strong>G(4,4)</strong> noktası <code>U₂ = 4 × 4 = 16 > 12</code> fayda sağlar.</p>
        `
      },
      {
        title: '3. Özel Fayda Fonksiyonları ve Toplam Diferansiyel ile MİO (Sayfa 6)',
        badge: 'Formüller',
        badgeType: 'sky',
        html: `
          <ul class="clean-list">
            <li><strong>Tam İkame Mallar (Kola – Pepsi):</strong> Sabit oranda birbirinin yerine geçer. Doğrusal kayıtsızlık eğrileri: <code>U(x₁, x₂) = a·x₁ + b·x₂</code> (MİO sabittir).</li>
            <li><strong>Tam Tamamlayıcı Mallar (Sağ Ayakkabı – Sol Ayakkabı):</strong> Birlikte belirli oranda tüketilir; fazlası faydayı artırmaz. L-tipi kayıtsızlık eğrileri: <code>U(x₁, x₂) = min{a·x₁, b·x₂}</code>.</li>
            <li><strong>Cobb-Douglas Fonksiyonu:</strong> <code>U(x₁, x₂) = x₁ᵃ · x₂ᵇ</code> (a > 0, b > 0). Örnekler: <code>x₁¹/² · x₂¹/²</code> ve <code>x₁ · x₂³</code>.</li>
          </ul>
          <div class="callout callout-crimson" style="margin-top:12px;">
            <div class="callout-title">🚨 Gerçek Eleştiri #3 — Toplam Diferansiyel İndis Düzeltmesi</div>
            <p style="font-size:13.5px;color:var(--text-secondary);">Notta <code>(DU/Dx₁)·Dx₂ + (DU/Dx)·Dx₂ = 0</code> yazılmıştır. Doğrusu kısmi türev (∂) ve doğru indislerle şudur:</p>
            <div class="math-box" style="margin-top:6px;">
              dU = (∂U/∂x₁)·dx₁ + (∂U/∂x₂)·dx₂ = 0  ⇒  MİO₁,₂ = -dx₂/dx₁ |<sub>dU=0</sub> = (∂U/∂x₁) / (∂U/∂x₂) = <strong>MU₁ / MU₂</strong>
            </div>
          </div>
          <div class="math-box">
            Sayfa 6 Örneği: U(x₁, x₂) = x₁¹/² · x₂²<br>
            MU₁ = ∂U/∂x₁ = (1/2)·x₁⁻¹/² · x₂²   |   MU₂ = ∂U/∂x₂ = 2·x₁¹/² · x₂<br>
            MİO = MU₁ / MU₂ = [(1/2)·x₁⁻¹/² · x₂²] / [2·x₁¹/² · x₂] = <strong>x₂ / (4x₁)</strong>
          </div>
        `
      }
    ]
  },
  {
    id: 'm4',
    number: 'Modül 4',
    pages: 'Ders Notu Sayfa 7–10',
    title: 'Bütçe Kısıtı ve Fayda Maksimizasyonu (Köşe & Lagrange)',
    summary: 'Bütçe doğrusu, eğim -Pₓ/Pᵧ, Hamburger-Soda, Kalemler, Elma-Üzüm Suyu, Sağ-Sol Eldiven ve U=x³y Lagrange tam çözümü.',
    sections: [
      {
        title: '1. Bütçe Kısıtı ve Fırsat Maliyeti (Sayfa 7–8)',
        badge: 'Bütçe',
        badgeType: 'gold',
        html: `
          <div class="math-box">
            • Bütçe Kısıtı Eşitsizliği (Satın Alınabilir Alan): Pₓ·x + Pᵧ·y ≤ I<br>
            • Bütçe Doğrusu Denklemi: Pₓ·x + Pᵧ·y = I<br>
            • Eksen Kesim Noktaları: Yatay (I/Pₓ, 0)  |  Dikey (0, I/Pᵧ)<br>
            • Bütçe Doğrusunun Eğimi: m = <strong>-Pₓ / Pᵧ</strong> (x malının y malı cinsinden fırsat maliyeti)
          </div>
          <ul class="clean-list">
            <li><strong>Örnek 1 (Hamburger & Soda):</strong> P<sub>H</sub> = 4, P<sub>S</sub> = 2, I = 100 TL ⇒ <code>4H + 2S = 100</code>. Kesim noktaları: S = 50, H = 25. Eğim <code>m = -25/50 = -1/2</code> (1 hamburger için 2 sodadan vazgeçilir).</li>
            <li><strong>Örnek 2 (Tükenmez & Dolma Kalem):</strong> P<sub>T</sub> = 3, P<sub>D</sub> = 4, I = 30 TL ⇒ <code>3T + 4D = 30</code>. Tam ikame (U = T + D) olduğundan daha ucuz olan tercih edilir: <code>D* = 0, T* = 10</code>.</li>
          </ul>
        `
      },
      {
        title: '2. Tam İkame ve Tam Tamamlayıcı Maksimizasyonu (Sayfa 9)',
        badge: 'Özel Çözümler',
        badgeType: 'emerald',
        html: `
          <div class="grid-2">
            <div class="callout callout-gold" style="margin:0;">
              <div class="callout-title">🍎 Elma Suyu (E) & Üzüm Suyu (Ü) — Tam İkame</div>
              <p style="font-size:13.5px;color:var(--text-secondary);"><code>U(E,Ü) = 4E + 3Ü</code>, <code>P<sub>E</sub> = 6</code>, <code>P<sub>Ü</sub> = 5</code>, <code>I = 120 TL</code>.</p>
              <div class="math-box">
                • Sadece E (Ü=0): E = 120/6 = 20 ⇒ U = 20×4 = <strong>80</strong><br>
                • Sadece Ü (E=0): Ü = 120/5 = 24 ⇒ U = 24×3 = <strong>72</strong><br>
                • MU<sub>E</sub>/P<sub>E</sub> = 4/6 = 0.67 > MU<sub>Ü</sub>/P<sub>Ü</sub> = 3/5 = 0.60<br>
                Sonuç: <strong>E* = 20, Ü* = 0</strong>
              </div>
            </div>
            <div class="callout callout-sky" style="margin:0;">
              <div class="callout-title">🧤 Sağ & Sol Eldiven — Tam Tamamlayıcı</div>
              <p style="font-size:13.5px;color:var(--text-secondary);"><code>U = min{sağ, sol}</code>, <code>P<sub>sağ</sub> = 10</code>, <code>P<sub>sol</sub> = 10</code>, <code>I = 60 TL</code>.</p>
              <div class="math-box">
                • Köşe (Optimum) Koşulu: <strong>sağ = sol</strong><br>
                • Bütçe: 10·sağ + 10·sol = 60<br>
                • 20·sağ = 60 ⇒ <strong>sağ* = 3, sol* = 3</strong><br>
                • Maksimum Fayda: U* = min{3, 3} = 3 çift
              </div>
            </div>
          </div>
        `
      },
      {
        title: '3. Cobb-Douglas Lagrange Çarpanı Çözümü (Sayfa 10)',
        badge: 'Lagrange',
        badgeType: 'gold',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;"><strong>Problem:</strong> <code>U(x, y) = x³ · y</code>, <code>Pₓ = 1</code>, <code>Pᵧ = 2</code>, <code>I = 80</code>. Kısıt: <code>x + 2y = 80</code>.</p>
          <div class="math-box">
            Lagrange Fonksiyonu: ℒ(x, y, λ) = x³·y + λ(80 - x - 2y)<br><br>
            Birinci Dereceden Koşullar (BDK):<br>
            (1) ∂ℒ/∂x = 3x²·y - λ = 0     ⇒  λ = 3x²·y<br>
            (2) ∂ℒ/∂y = x³ - 2λ = 0       ⇒  λ = x³ / 2<br>
            (3) ∂ℒ/∂λ = 80 - x - 2y = 0   ⇒  x + 2y = 80<br><br>
            (1) ve (2)'yi eşitleyelim (MİO = Pₓ/Pᵧ): 3x²·y = x³ / 2  ⇒  <strong>x = 6y</strong><br>
            (3)'te yerine koyalım: 6y + 2y = 80  ⇒  8y = 80  ⇒  <strong>y* = 10</strong>, <strong>x* = 60</strong><br>
            Maksimum Fayda: U* = 60³ · 10 = <strong>2,160,000</strong>
          </div>
        `
      }
    ]
  },
  {
    id: 'm5',
    number: 'Modül 5',
    pages: 'Ders Notu Sayfa 11–12',
    title: 'Bireysel Talep Eğrileri: Eğri Üzerinde Hareket vs. Kayma',
    summary: 'Talep eğrisinin türetilmesi, Talep Yasası, kendi fiyatı değiştiğinde eğri üzerinde hareket; gelir, diğer mal fiyatı ve tercih değiştiğinde kayma.',
    sections: [
      {
        title: '1. Bireysel Talep Eğrisi ve Talep Yasası (Sayfa 11–12)',
        badge: 'Talep',
        badgeType: 'gold',
        html: `
          <p style="color:var(--text-secondary);font-size:14.5px;">Kayıtsızlık eğrileri ve bütçe kısıtı kullanılarak, diğer tüm faktörler (gelir <code>I</code>, diğer malların fiyatları <code>Pᵧ</code>, tercihler) sabitken bir malın kendi fiyatı (<code>Pₓ</code>) değiştikçe tüketicinin seçtiği optimal miktarın (<code>Qₓ</code>) nasıl değiştiği bulunur.</p>
          <div class="math-box">
            Talep Yasası (Ceteris Paribus): Pₓ ↓  ⇒  Qₓ ↑  (veya Pₓ ↑  ⇒  Qₓ ↓)
          </div>
        `
      },
      {
        title: '2. Eğri Üzerinde Hareket vs. Eğrinin Kayması (Sınavda Çok Sorulur!)',
        badge: 'Hareket vs. Kayma',
        badgeType: 'emerald',
        html: `
          <div class="grid-2">
            <div class="callout callout-sky" style="margin:0;">
              <div class="callout-title">📍 Eğri Üzerinde Hareket (Sayfa 12)</div>
              <p style="font-size:13.5px;color:var(--text-secondary);"><strong>Tek Sebebi:</strong> Malın <strong>kendi fiyatının (Pₓ)</strong> değişmesidir.<br><br>Örneğin P₁ → P₂ düşerse, talep eğrisi sağa veya sola <strong>KAYMAZ</strong>! Sadece aynı talep eğrisi (dₓ) üzerinde (Q₁, P₁) noktasından (Q₂, P₂) noktasına doğru aşağı-sağa <strong>hareket edilir</strong>.</p>
            </div>
            <div class="callout callout-emerald" style="margin:0;">
              <div class="callout-title">↔️ Talep Eğrisinin Kayması (Sayfa 11)</div>
              <ul class="clean-list" style="font-size:13.5px;">
                <li><strong>1. Gelir (I ↑):</strong> Normal malda sağa kayar; düşük (inferior) malda sola kayar.</li>
                <li><strong>2. Diğer Malın Fiyatı (Pᵧ ↑):</strong> x ve y <em>ikame</em> ise x'in talebi sağa kayar; <em>tamamlayıcı</em> ise sola kayar.</li>
                <li><strong>3. Tercihlerin Değişmesi:</strong> Mal lehine değişirse (örn. sağlıklı yaşam için daha fazla yulaf lapası tüketmek) talep eğrisi sağa kayar (dₓ → dₓ').</li>
              </ul>
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
    set: 'Set 1: Tercihler & Rasyonalite (Uyg. S.1)',
    title: 'Problem 1 — Alice\'in 3 Sepeti (Rasyonalite & Döngü)',
    statement: 'Alice\'in önünde 3 meyve sepeti var: <strong>A(2 elma, 3 muz)</strong>, <strong>B(1 elma, 4 muz)</strong>, <strong>C(3 elma, 2 muz)</strong>. Alice\'in tercihleri: <code>A ≻ B</code>, <code>B ≻ C</code> ve <code>C ≻ A</code>. <br>a) Alice rasyonel midir? b) Hangi aksiyom ihlal ediliyor? c) Bu tercihlere bir fayda fonksiyonu önerebilir miyiz?',
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
        c) Rasyonel olmayan (döngüsel) tercihler bir fayda fonksiyonu ile temsil edilemez (U(A) > U(B) > U(C) > U(A) imkânsızdır). Tercihler <code>A ≻ B ≻ C</code> şeklinde rasyonel hale getirilirse örneğin <strong>U(A)=3, U(B)=2, U(C)=1</strong> atanabilir.
      </div>
    `
  },
  {
    id: 'p2',
    set: 'Set 1: Tercihler & Rasyonalite (Uyg. S.2)',
    title: 'Problem 2 — Deniz & Efe: Elma (x₁) ve Muz (x₂) Tam İkame Seçimi',
    statement: 'Deniz\'in fayda fonksiyonu <code>U<sub>D</sub>(x₁, x₂) = x₁ + 2x₂</code>, Efe\'nin fayda fonksiyonu <code>U<sub>E</sub>(x₁, x₂) = 2x₁ + 3x₂</code>. Elma fiyatı <code>P₁ = $2</code>, muz fiyatı <code>P₂ = $1</code> ve gelir <code>I = $10</code>.<br>a) İki tüketici için de hangi mal daha değerlidir? b) Her biri ne kadar elma ve muz alır?',
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
      <div class="callout callout-crimson" style="margin-top:10px;">
        <div class="callout-title">⚠️ Sınav Tuzağı Hatırlatması (Eleştiri #4)</div>
        <p style="font-size:13px;color:var(--text-secondary);">Fiyatlar <code>P₁ = $1, P₂ = $2</code> verilseydi, Efe için muz hâlâ daha değerli (3 > 2) olmasına rağmen <code>MU₁/P₁ = 2/1 = 2 &gt; MU₂/P₂ = 3/2 = 1.5</code> olacağı için Efe <strong>10 elma, 0 muz</strong> alırdı! Canlı simülatör #3\'te bunu kendin test edebilirsin.</p>
      </div>
    `
  },
  {
    id: 'p3',
    set: 'Set 1: Tercihler & Rasyonalite (Uyg. S.3)',
    title: 'Problem 3 — Annie & David: Sarı Boya Tonları',
    statement: 'David\'in boya tercihleri: <code>Sarı 1 ≻ {Sarı 2, Sarı 3, Sarı 4}</code> ve <code>Sarı 6 ≻ Sarı 5 ≻ Sarı 1</code>. Dükkanda en sevdiği <strong>Sarı 6</strong> kalmadığı için <strong>Sarı 5</strong> alıp duvarı boyarlar. Fakat sonra David <strong>Sarı 3</strong> alıp yeniden boyamakta ısrar eder. David rasyonel midir?',
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
        • Sarı 6\'nın stokta bulunmaması, mevcut alternatifler (Sarı 5 ve Sarı 3) arasındaki sıralamayı değiştiremez (<em>Geçişkenlik &amp; İlgisiz Alternatiflerin Bağımsızlığı ihlali</em>).
      </div>
    `
  },
  {
    id: 'p4',
    set: 'Set 2: MİO & Özel Eğriler (Uyg. S.4)',
    title: 'Problem 4 — Noktasal MİO Hesabı: U(x₁, x₂) = x₁ · x₂',
    statement: 'Fayda fonksiyonu <code>U(x₁, x₂) = x₁ · x₂</code> olan bir tüketicinin <strong>A(1, 7)</strong> ve <strong>B(5, 5)</strong> noktalarındaki Marjinal İkame Oranını (MİO) hesaplayınız.',
    hints: [
      'İpucu 1 (Formül): MİO = MU₁ / MU₂ = (∂U/∂x₁) / (∂U/∂x₂).',
      'İpucu 2 (Kısmi Türevler): x₁\'e göre türev alırken x₂ sabit tutulur: MU₁ = x₂. x₂\'ye göre türevde x₁ sabit: MU₂ = x₁.',
      'İpucu 3 (Genel MİO): MİO(x₁, x₂) = x₂ / x₁.',
      'İpucu 4 (A Noktası): x₁ = 1, x₂ = 7 değerlerini x₂ / x₁ formülüne koy.',
      'İpucu 5 (B Noktası): x₁ = 5, x₂ = 5 için MİO = 5 / 5 = 1. (Azalan MİO gözlemleniyor!)'
    ],
    solution: `
      <div class="math-box">
        U(x₁, x₂) = x₁ · x₂<br>
        MU₁ = ∂U/∂x₁ = x₂   |   MU₂ = ∂U/∂x₂ = x₁<br>
        MİO = MU₁ / MU₂ = <strong>x₂ / x₁</strong><br><br>
        • A(1, 7) noktasında: MİO<sub>(1,7)</sub> = 7 / 1 = <strong>7</strong><br>
        • B(5, 5) noktasında: MİO<sub>(5,5)</sub> = 5 / 5 = <strong>1</strong>
      </div>
    `
  },
  {
    id: 'p5',
    set: 'Set 2: MİO & Özel Eğriler (Uyg. S.5)',
    title: 'Problem 5 — Cebirsel MİO Hesabı (1): U(x₁, x₂) = x₁³ · x₂¹/²',
    statement: '<code>U(x₁, x₂) = x₁³ · x₂<sup>1/2</sup></code> fayda fonksiyonu için MİO formülünü türetiniz.',
    hints: [
      'İpucu 1: Kuvvet kuralını hatırla: d(xⁿ)/dx = n·xⁿ⁻¹.',
      'İpucu 2: MU₁ = ∂U/∂x₁ = 3x₁² · x₂¹/².',
      'İpucu 3: MU₂ = ∂U/∂x₂ = (1/2) · x₁³ · x₂⁻¹/².',
      'İpucu 4: MİO = MU₁ / MU₂ oranını yazarken tabanları aynı olan terimlerin üslerini çıkar: x₂¹/² / x₂⁻¹/² = x₂¹.',
      'İpucu 5: Katsayıları böl: 3 / (1/2) = 6; x₁² / x₁³ = 1/x₁. Sonuç: 6x₂ / x₁.'
    ],
    solution: `
      <div class="math-box">
        MU₁ = 3 · x₁² · x₂¹/²<br>
        MU₂ = (1/2) · x₁³ · x₂⁻¹/²<br>
        MİO = MU₁ / MU₂ = [3 · x₁² · x₂¹/²] / [(1/2) · x₁³ · x₂⁻¹/²]<br>
        MİO = (3 / 0.5) · (x₁²⁻³) · (x₂¹/²⁻⁽⁻¹/²⁾) = <strong>6x₂ / x₁</strong>
      </div>
    `
  },
  {
    id: 'p6',
    set: 'Set 2: MİO & Özel Eğriler (Uyg. S.5)',
    title: 'Problem 6 — Cebirsel MİO Hesabı (2): U(x₁, x₂) = x₁¹/² · x₂¹/⁴',
    statement: '<code>U(x₁, x₂) = x₁<sup>1/2</sup> · x₂<sup>1/4</sup></code> fayda fonksiyonu için MİO formülünü bulunuz.',
    hints: [
      'İpucu 1: MU₁ için x₁¹/² teriminin türevini al: (1/2)·x₁⁻¹/².',
      'İpucu 2: MU₂ için x₂¹/⁴ teriminin türevini al: (1/4)·x₂⁻³/⁴.',
      'İpucu 3: MİO = [(1/2)·x₁⁻¹/²·x₂¹/⁴] / [(1/4)·x₁¹/²·x₂⁻³/⁴].',
      'İpucu 4: (1/2) / (1/4) = 2. Üsleri düzenle: x₁⁻¹/²⁻¹/² = x₁⁻¹ ve x₂¹/⁴⁺³/⁴ = x₂¹.',
      'İpucu 5: Kısa yol (Cobb-Douglas x₁ᵃx₂ᵇ): MİO = (a/b)·(x₂/x₁) = ((1/2)/(1/4))·(x₂/x₁) = 2x₂ / x₁.'
    ],
    solution: `
      <div class="math-box">
        MU₁ = (1/2) · x₁⁻¹/² · x₂¹/⁴<br>
        MU₂ = (1/4) · x₁¹/² · x₂⁻³/⁴<br>
        MİO = [(1/2) / (1/4)] · x₁⁻¹/²⁻¹/² · x₂¹/⁴⁺³/⁴ = <strong>2x₂ / x₁</strong>
      </div>
    `
  },
  {
    id: 'p7',
    set: 'Set 2: MİO & Özel Eğriler (Uyg. S.6–7)',
    title: 'Problem 7 — 4 Farklı Tercih Senaryosu İçin Kayıtsızlık Eğrisi & Fayda Fonksiyonu',
    statement: 'Aşağıdaki 4 senaryo için kayıtsızlık eğrisi şeklini, tercih yönünü ve fayda fonksiyonunu belirleyiniz:<br>① Simit (x) ve Kahve (y) — ikisi birlikte daha zevkli (İyi Mallar)<br>② Dondurma (x) seviyor, Mantar (y) nefret ediyor (Kötü Mal)<br>③ Gevrek (x) seviyor, Yulaf (y) nötr (Nötr Mal)<br>④ Her 1 Jeans (x) için 3 Tişört (y) alıyor (Tam Tamamlayıcı)',
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
    set: 'Set 3: Cobb-Douglas & Lagrange (Uyg. S.8)',
    title: 'Problem 8 — Cobb-Douglas Üslerinin Ekonomik Anlamı ve Bütçe Payları',
    statement: '<code>U(x₁, x₂) = A · x₁<sup>α</sup> · x₂<sup>β</sup></code> fonksiyonunda α ve β üsleri ne anlama gelir? <code>U = x₁<sup>0.5</sup>x₂<sup>0.5</sup></code> ile <code>U = x₁<sup>0.7</sup>x₂<sup>0.3</sup></code> tüketim davranışını nasıl değiştirir?',
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
    set: 'Set 3: Cobb-Douglas & Lagrange (Uyg. S.8)',
    title: 'Problem 9 — Lagrange ile Fayda Maksimizasyonu (I = 100)',
    statement: '<code>U(x₁, x₂) = x₁<sup>0.5</sup> · x₂<sup>0.5</sup></code>, elma fiyatı <code>P₁ = 2</code>, muz fiyatı <code>P₂ = 1</code>, gelir <code>I = 100</code>. Lagrange yöntemiyle optimal sepeti (x₁*, x₂*) bulunuz.',
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
        (1) ∂ℒ/∂x₁ = 0 ⇒ λ = (0.5 · x₁⁻⁰·⁵ · x₂⁰·⁵) / 2<br>
        (2) ∂ℒ/∂x₂ = 0 ⇒ λ = 0.5 · x₁⁰·⁵ · x₂⁻⁰·⁵<br>
        (1) = (2) ⇒ x₂ / 2 = x₁  ⇒  <strong>x₂ = 2x₁</strong><br>
        Bütçede yerine koy: 2x₁ + (2x₁) = 100 ⇒ 4x₁ = 100 ⇒ <strong>x₁* = 25 elma</strong>, <strong>x₂* = 50 muz</strong>.
      </div>
    `
  },
  {
    id: 'p10',
    set: 'Set 3: Cobb-Douglas & Lagrange (Uyg. S.9)',
    title: 'Problem 10 — Lagrange ile Fayda Maksimizasyonu (I = 30)',
    statement: '<code>U(x, y) = x<sup>1/2</sup> · y<sup>1/2</sup></code>, <code>Pₓ = 2</code>, <code>Pᵧ = 1</code>, <code>I = 30</code>. Lagrange yöntemiyle optimal sepeti (x*, y*) bulunuz.',
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
    ref: 'Ders Notu Sayfa 2',
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
    ref: 'Ders Notu Sayfa 5 (ve Sayfa 2)',
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
    ref: 'Ders Notu Sayfa 6',
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
    ref: 'Uygulama Notu Sayfa 2',
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
    ref: 'Uygulama Notu Sayfa 7',
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
    q: '1. Bir zayıf tercih ilişkisinin (≿) rasyonel sayılabilmesi için hangi iki aksiyomu sağlaması gerekir?',
    options: ['Süreklilik ve Dışbükeylik', 'Tamlık ve Geçişkenlik', 'Monotonluk ve Simetri', 'Azalan MİO ve Doyumsuzluk'],
    answer: 1,
    explanation: 'Rasyonalite aksiyomları Tamlık (Completeness) ve Geçişkenliktir (Transitivity).'
  },
  {
    q: '2. Ders Notu Sayfa 2\'deki kesin tercih geçişkenliği ispatında neden "x ≁ y ve y ≁ z ⇒ x ≁ z" yazılamaz?',
    options: ['Kayıtsız olmama (≁) ilişkisi geçişken değildir', 'Kesin tercih tam değildir', 'Fayda fonksiyonu türevlenebilir değildir', 'Zayıf tercih simetrik olduğu için'],
    answer: 0,
    explanation: 'x ≁ y ve y ≁ x iken x ∼ x doğrudur; yani ≁ geçişken değildir. İspat Olmayana Ergi ile z ≿̸ x gösterilerek yapılır.'
  },
  {
    q: '3. U(x) = 6 ve U(y) = 2 ise ordinal (sıralı) fayda kuramına göre aşağıdakilerden hangisi YANLIŞTIR?',
    options: ['x ≻ y', 'x ≿ y', 'x\'i y\'ye 3 kat fazla tercih ederim', 'V(x) = 2U(x) + 10 dönüşümü sıralamayı korur'],
    answer: 2,
    explanation: 'Fayda sıralı (ordinal) bir kavramdır; yalnızca sıralama bildirir, "3 kat fazla" gibi kardinal oranlar kurulamaz.'
  },
  {
    q: '4. U(x₁, x₂) = x₁ · x₂ için V = U² ve W = 2U + 10 dönüşümleri uygulandığında (4,1), (2,3), (2,2) sepetlerinin sıralaması nasıl değişir?',
    options: ['Tam tersine döner', '(2,3) ile (4,1) eşitlenir', 'Sıralama hiç değişmez: (2,3) ≻ (4,1) ∼ (2,2)', 'W negatif olur'],
    answer: 2,
    explanation: 'Pozitif (artan) monotonik dönüşümler tercih sıralamasını birebir korur: W(2,3)=22 > W(4,1)=18 = W(2,2)=18.'
  },
  {
    q: '5. Kayıtsızlık eğrisi üzerinde A(2,6) noktasından B(3,4) noktasına geçerken |MİO| değeri kaçtır?',
    options: ['0.5', '1', '2', '4'],
    answer: 2,
    explanation: '1 birim daha fazla x₁ için 2 birim x₂\'den vazgeçilmiştir: |Δx₂/Δx₁| = |4-6| / |3-2| = 2.'
  },
  {
    q: '6. U(x, y) = x · y için A(2,6) ve D(6,2) noktaları U=12 eğrisindeyken, ortalamaları G(4,4) noktasının faydası kaçtır ve bu neyi gösterir?',
    options: ['U=12, doğrusal eğri', 'U=16 > 12, dışbükeylik ve dengeli tüketimin üstünlüğü', 'U=8 < 12, içbükeylik', 'U=24, tam tamamlayıcılık'],
    answer: 1,
    explanation: 'G(4,4) ⇒ 4×4 = 16 > 12. Bu durum azalan MİO ve dışbükeyliği (dengeli sepetin uç sepete tercih edilmesini) gösterir.'
  },
  {
    q: '7. U(x₁, x₂) = x₁³ · x₂¹/² fayda fonksiyonunun MİO formülü aşağıdakilerden hangisidir?',
    options: ['6x₂ / x₁', 'x₂ / (6x₁)', '3x₁ / x₂', '2x₂ / x₁'],
    answer: 0,
    explanation: 'MU₁ = 3x₁²x₂¹/², MU₂ = (1/2)x₁³x₂⁻¹/² ⇒ MU₁/MU₂ = 6x₂/x₁.'
  },
  {
    q: '8. Bir tüketici dondurmayı (x) seviyor, mantardan (y) nefret ediyorsa (kötü mal) kayıtsızlık eğrisi ve tercih yönü nasıldır?',
    options: ['Negatif eğimli, sağ-yukarı', 'Pozitif eğimli, sağ-aşağı (↘)', 'Düşey doğru, sağa (→)', 'L-tipi, sağ-yukarı'],
    answer: 1,
    explanation: 'Kötü mal arttıkça faydayı sabit tutmak için iyi mal da artmalı (pozitif eğim); daha az kötü mal ve daha çok iyi mal için tercih yönü sağ-aşağıdır (↘).'
  },
  {
    q: '9. Alice her 1 jeans (x) için 3 tişört (y) giyiyorsa doğru Leontief fayda fonksiyonu hangisidir?',
    options: ['U(x,y) = min(x, 3y)', 'U(x,y) = min(3x, y)', 'U(x,y) = 3x + y', 'U(x,y) = x³y'],
    answer: 1,
    explanation: 'Köşe noktası (x=1, y=3) için 3x = y sağlanmalıdır: 3(1) = 3 ⇒ U(x,y) = min(3x, y).'
  },
  {
    q: '10. U_E = 2x₁ + 3x₂ (tam ikame), I = $10 ve fiyatlar P₁ = $1, P₂ = $2 ise Efe\'nin optimal sepeti nedir?',
    options: ['(0, 5)', '(10, 0)', '(5, 2.5)', '(0, 10)'],
    answer: 1,
    explanation: 'MU₁/P₁ = 2/1 = 2 > MU₂/P₂ = 3/2 = 1.5 olduğundan Efe tüm gelirini x₁\'e harcar: (10, 0).'
  },
  {
    q: '11. U(x₁, x₂) = x₁⁰·⁷ · x₂⁰·³ fayda fonksiyonuna sahip bir tüketici gelirinin yüzde kaçını x₁ malına ayırır?',
    options: ['%30', '%50', '%70', '%100'],
    answer: 2,
    explanation: 'Cobb-Douglas\'ta x₁ bütçe payı α/(α+β) = 0.7 / (0.7+0.3) = %70\'tir.'
  },
  {
    q: '12. U(x, y) = x³ · y, Pₓ = 1, Pᵧ = 2, I = 80 için Lagrange çözümüyle (x*, y*) nedir?',
    options: ['(20, 30)', '(40, 20)', '(60, 10)', '(10, 35)'],
    answer: 2,
    explanation: 'MİO = 3y/x = Pₓ/Pᵧ = 1/2 ⇒ x = 6y. Kısıt: 6y + 2y = 80 ⇒ y*=10, x*=60.'
  },
  {
    q: '13. U(x₁, x₂) = x₁⁰·⁵ · x₂⁰·⁵, P₁ = 2, P₂ = 1, I = 100 için optimal sepet nedir?',
    options: ['(25, 50)', '(50, 25)', '(20, 60)', '(30, 40)'],
    answer: 0,
    explanation: 'Eşit üsler bütçeyi %50-%50 böler: P₁x₁ = 50 ⇒ x₁*=25; P₂x₂ = 50 ⇒ x₂*=50.'
  },
  {
    q: '14. Bir malın kendi fiyatı (Pₓ) düştüğünde bireysel talep eğrisinde ne gözlemlenir?',
    options: ['Talep eğrisi sağa kayar', 'Talep eğrisi sola kayar', 'Aynı talep eğrisi üzerinde aşağı-sağa hareket edilir', 'Talep eğrisi dikey konuma gelir'],
    answer: 2,
    explanation: 'Malın kendi fiyatı değiştiğinde talep eğrisi kaymaz; aynı eğri üzerinde hareket edilir.'
  },
  {
    q: '15. X ve Y tamamlayıcı mallar iken Y malının fiyatı (Pᵧ) artarsa X malının talep eğrisi nasıl etkilenir?',
    options: ['Sağa kayar', 'Sola kayar', 'Eğri üzerinde yukarı hareket edilir', 'Değişmez'],
    answer: 1,
    explanation: 'Tamamlayıcı malın fiyatı artınca Y kullanımı düşer, onunla birlikte tüketilen X\'in talep eğrisi sola kayar.'
  }
];
