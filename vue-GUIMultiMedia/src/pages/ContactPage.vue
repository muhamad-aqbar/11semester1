<script setup>
import { ref } from 'vue'

// Form ini cukup tampilan saja, belum perlu logic kirim beneran
const nama = ref('')
const email = ref('')
const pesan = ref('')
</script>

<template>
  <div class="contact-page">
    <!-- Banner, gaya sama seperti banner About Page -->
    <section class="banner">
      <h1>Hubungi Admin kami</h1>
      <p>Ada pertanyaan atau masukan? Kami senang mendengarnya</p>
    </section>

    <!-- 2 kolom sejajar: Info Kontak & Formulir -->
    <section class="contact-content">
      <!-- Kolom kiri: Info Kontak -->
      <div class="info-kontak">
        <h2>Info Kontak</h2>

        <div class="info-item">
          <span class="info-item__ikon">📍</span>
          <div>
            <strong>Alamat</strong>
            <p>Jl. Barsshop NO.12 Kota Bandung Jawa barat </p>
          </div>
        </div>

        <div class="info-item">
          <span class="info-item__ikon">📞</span>
          <div>
            <strong>Telepon</strong>
            <p>(+62) 1207-2010</p>
          </div>
        </div>

        <div class="info-item">
          <span class="info-item__ikon">✉️</span>
          <div>
            <strong>Email</strong>
            <p>@barss_shop.com</p>
          </div>
        </div>

        <div class="info-item">
          <span class="info-item__ikon">🕒</span>
          <div>
            <strong>Jam</strong>
            <p>Senin – Sabtu, 09.00 – 18.00</p>
          </div>
        </div>
      </div>

      <!-- Kolom kanan: Formulir -->
      <div class="form-kontak">
        <h2>Kirim Pesan</h2>

        <form>
          <label for="nama">Nama</label>
          <input
            id="nama"
            v-model="nama"
            type="text"
            placeholder="Nama lengkap kamu"
          />

          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="nama@email.com"
          />

          <label for="pesan">Pesan</label>
          <textarea
            id="pesan"
            v-model="pesan"
            rows="5"
            placeholder="Tulis pesan kamu di sini..."
          ></textarea>

          <button type="button">Kirim ✈️</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  color: #333333;
}

/* Banner senada dengan About Page */
.banner {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.137)40%, #9c3aed49)60%, rgb(44, 20, 20)100%;
  color: #ffffff;
  text-align: center;
  padding: 60px 20px;
}

.banner h1 {
  margin: 0 0 8px;
  font-size: 2.2rem;
}

.banner p {
  margin: 0;
  opacity: 0.9;
}

/* Layout 2 kolom sejajar */
.contact-content {
  display: flex;
  gap: 40px;
  padding: 60px 40px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: flex-start;
}

.info-kontak,
.form-kontak {
  flex: 1;
}

.info-kontak h2,
.form-kontak h2 {
  color: #39084d;
  margin-top: 0;
}

/* Item info kontak */
.info-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 22px;
}

.info-item__ikon {
  font-size: 1.4rem;
}

.info-item strong {
  display: block;
  margin-bottom: 2px;
  color:aliceblue;
}

.info-item p {
  margin: 0;
  color: #666666;
}

/* Kartu formulir */
.form-kontak {
  background-color: #d6cccc;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.form-kontak form {
  display: flex;
  flex-direction: column;
}

.form-kontak label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 14px;
}

.form-kontak label:first-of-type {
  margin-top: 0;
}

.form-kontak input,
.form-kontak textarea {
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-kontak input:focus,
.form-kontak textarea:focus {
  border-color: #45094b;
}

.form-kontak textarea {
  resize: vertical;
}

/* Tombol pil, senada Landing Page */
.form-kontak button {
  margin-top: 20px;
  background: #520b0b;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s;
}

.form-kontak button:hover {
  background: #500000;
}

/* Responsif: kolom tumpuk di layar kecil */
@media (max-width: 700px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>