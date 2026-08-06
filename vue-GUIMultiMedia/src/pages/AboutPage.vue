<!-- <template>
 <main>
 <h1>About we</h1>
 <p>Kami berdiri sejak tahun 2017 .</p>
 </main>
</template> -->

<script setup>
import TeamCard from '../components/TeamCard.vue'

// Data anggota tim -> dipakai oleh v-for di bawah
// Boleh diganti dengan nama asli anggota kelompok kalian
const daftarTim = [
  {
    id: 1,
    nama: 'Muhamad akbar',
    jabatan: 'Pendiri & Owner',
    foto: ''
  },
  {
    id: 2,
    nama: 'Raka Pratama',
    jabatan: 'Manajer Operasional',
    foto: ''
  },
  {
    id: 3,
    nama: 'Dinda Lestari',
    jabatan: 'Kurator Produk',
    foto: ''
  }
]
</script>

<template>
  <div class="about-page">
    <!-- Banner Tentang Kami -->
    <section class="banner">
      <h1>Short story ℬ𝒶𝓇𝓈𝓈_𝒮𝒽ℴ𝓅 </h1>
      <p>Kenali lebih dekat cerita dan orang-orang di balik toko </p>
    </section>

    <!-- Bagian Cerita Kami: 2 kolom (teks & gambar) -->
    <section class="cerita-kami">
      <div class="cerita-kami__teks">
        <h2>About we</h2>
        <p>
         Pada tahun 2017 saya merintis toko saya karna saya sedang krisis ekonomi jadi saya mulai belajar untuk membangun usaha kecil-kecilan karna untuk membantu ekonomi keluarga saya, saya merintis dari awal jualan mobil bekas yang suda tua dan sampai sekarang sudah makin maju karna saya terus berjuang untuk membersarkan toko ini dan sekarang sudah memeilik beberapa cabang
         <br>
        
         <br>
            Dan sekarang saya memiliki karyawan yang telah menemani usaha saya dari saat sasya merintis sampai sekarang dan kami dari dulu sampai
          Hari ini, kami tetap berpegang pada nilai yang sama sejak awal:
          jujur soal produk, ramah ke pelanggan, dan selalu berusaha
          menghadirkan pilihan terbaik untuk kalian. <br>
        </p>
      </div>

      <!-- <div class="cerita-kami__gambar">
        <img
        src="https://chatgpt.com/s/m_6a748545ca0c8191aa5ccbbfc3ad1e23
       "
          alt="Foto toko kami"
        />
      </div> -->
    </section>

    <!-- Bagian Tim Kami -->
    <section class="tim-kami">
      <h2>Tim Kami</h2>
      <div class="tim-kami__grid">
        <TeamCard
          v-for="anggota in daftarTim"
          :key="anggota.id"
          :nama="anggota.nama"
          :jabatan="anggota.jabatan"
          :foto="anggota.foto"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  font-family: 'Poppins', sans-serif;
  color: #333333;
}

/* Warna banner disamakan dengan tema Landing Page (ganti sesuai warna kalian) */
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
  font-size: 1rem;
  opacity: 0.9;
}

/* Cerita Kami: layout 2 kolom */
.cerita-kami {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 60px 40px;
  max-width: 1100px;
  margin: 0 auto;
  color: white;
}

.cerita-kami__teks {
  flex: 1; /* kolom teks & gambar berbagi lebar merata */
}

.cerita-kami__teks h2 {
  margin-top: 0;
  color: #782688;
}

.cerita-kami__teks p {
  line-height: 1.7;
}

.cerita-kami__gambar {
  flex: 1;
}

.cerita-kami__gambar img {
  width: 100%;
  border-radius: 12px;
  display: block;
}

/* Tim Kami */
.tim-kami {
  padding: 20px 40px 80px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.tim-kami h2 {
  color: #691515;
  margin-bottom: 30px;
}

.tim-kami__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

/* Responsif: kolom Cerita Kami jadi tumpuk di layar kecil */
@media (max-width: 700px) {
  .cerita-kami {
    flex-direction: column;
  }
}
</style>