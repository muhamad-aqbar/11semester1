<!-- <template>
 <main>
 <h1>Selamat Datang di Onlineshop Sekolah</h1>
 <p>Belanja gampang, sekolah senang.</p>
 </main>
</template> -->
<template>
  <div class="landing-page">
    <!-- HERO SECTION -->
    <section class="hero">
      <h1 class="hero-title">Mau Mobil? Beli lah di ℬ𝒶𝓇𝓈𝓈_𝒮𝒽ℴ𝓅</h1>
      <p class="hero-subtitle">
       Platform untuk mobil-mobil class atass.
      </p>
      <RouterLink to="/product" class="hero-button">
        Lihat Produk
      </RouterLink>
    </section>

    <!-- FEATURE SECTION -->
    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3 class="feature-title">Cepat & Ringan</h3>
        <p class="feature-desc">Performa optimal tanpa membebani perangkat pengguna.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3 class="feature-title">Desain Fleksibel</h3>
        <p class="feature-desc">Tampilan mudah disesuaikan dengan kebutuhan proyek kalian.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3 class="feature-title">Aman & Terpercaya</h3>
        <p class="feature-desc">Data pengguna dikelola dengan standar keamanan yang baik.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Tidak ada logic khusus untuk halaman ini,
// RouterLink otomatis tersedia karena global component dari vue-router
</script>

<style scoped>
.landing-page {
  font-family: "Segoe UI", sans-serif;
  color: #222;
}

/* ===== HERO ===== */
.hero {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.137)40%, #9c3aed49)60%, rgb(44, 20, 20)100%;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
  border-radius: 20px;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto 32px;
  opacity: 0.9;
}

.hero-button {
  display: inline-block;
  background: #fff;
  color: #0f766e;
  padding: 12px 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* ===== FEATURES ===== */
.features {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 20px;
}

.feature-card {
  background:linear-gradient(rgb(83, 39, 83)40%, rgb(68, 26, 68) 60%,black 100%);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  width: 260px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(46, 42, 42, 0.12);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 0.95rem;
  color: #cf73c8;
}
</style>