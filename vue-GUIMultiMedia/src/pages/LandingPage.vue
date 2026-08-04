<!-- <template>
 <main>
 <h1>Selamat Datang di Onlineshop Sekolah</h1>
 <p>Belanja gampang, sekolah senang.</p>
 </main>
</template> -->
<template>
  <div class="landing-wrapper">
    <!-- Navigation Bar --> 
    <!-- <header class="navbar">
      <div class="brand-logo">SMK Yadika Soreang — Onlineshop</div>
      <nav class="nav-links">
        <RouterLink to="/" class="nav-item">Landing</RouterLink>
        <RouterLink to="/product" class="nav-item">Product</RouterLink>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
        <RouterLink to="/contact" class="nav-item">Contact</RouterLink>
      </nav>
    </header>

     1. Hero Section (Gradasi Sunset: Coral to Teal) -->
    <section class="hero-card">
      <h1 class="hero-title">Lengkapi Kebutuhan Sekolahmu Tanpa Ribet!</h1>
      <p class="hero-subtitle">
        Temukan seragam, atribut, dan alat tulis berkualitas dengan harga terbaik.
      </p>

      <!-- Tombol RouterLink Berbentuk Pil -->
      <RouterLink to="/product" class="cta-button">
        Jelajahi Produk
      </RouterLink>
    </section>

    <!-- 2. Fitur Section (3 Kartu Bayangan + Hover) -->
    <section class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">⚡</span>
        <h3 class="feature-title">Proses Cepat</h3>
        <p class="feature-desc">Pesanan langsung diproses dan siap diambil di koperasi sekolah.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🏷️</span>
        <h3 class="feature-title">Diskon Siswa</h3>
        <p class="feature-desc">Harga khusus ramah kantong yang disesuaikan untuk pelajar.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🚚</span>
        <h3 class="feature-title">Bebas Ongkir</h3>
        <p class="feature-desc">Ambil pesanan secara gratis tanpa biaya pengiriman tambahan.</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-text">
      © 2026 SMK Yadika Soreang — Onlineshop Sekolah
    </footer>
  </div>
</template>

<style scoped>
/* Container Utama */
.landing-wrapper {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  color: #2d3748;
}

/* Header & Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 20px;
}

.brand-logo {
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a202c;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  text-decoration: none;
  color: #0d9488;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: #0f766e;
}

/* 1. HERO SECTION (Gradasi Beda: Sunset Coral ke Emerald Teal) */
.hero-card {
  background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 40%, #0d9488 100%);
  border-radius: 20px;
  padding: 70px 30px;
  text-align: center;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(255, 126, 95, 0.25);
}

.hero-title {
  font-size: 2.1rem;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1rem;
  opacity: 0.95;
  margin-bottom: 30px;
}

/* Tombol CTA Form Pil (Border Radius 999px + Shadow) */
.cta-button {
  display: inline-block;
  background-color: #ffffff;
  color: #0d9488;
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.95rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  
  /* Efek Smooth Transition untuk Hover */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Effect Tombol Terangkat */
.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
  background-color: #f0fdfa;
}

/* 2. FEATURES GRID (Flex Layout + Gap) */
.features-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 40px;
}

/* Kartu Fitur (Bayangan Lengkung + Hover) */
.feature-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px 24px;
  flex: 1;
  min-width: 240px;
  max-width: 310px;
  text-align: center;
  
  /* Efek Bayangan (Box-Shadow) Soft */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
  border: 1px solid #f1f5f9;
  
  /* Animasi Transisi Hover */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Effect Kartu Terangkat */
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px -10px rgba(13, 148, 136, 0.15);
  border-color: #ccfbf1;
}

.feature-icon {
  font-size: 2rem;
  display: inline-block;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
}

/* Footer */
.footer-text {
  text-align: center;
  font-size: 0.8rem;
  color: #94a3b8;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}
</style>