 <!-- <template>
 <main>
 <h1>Produk Kami</h1>
 <p>(kartu produk akan kita tambahkan di Tahap 8)</p>
 </main>
</template>  -->

<!-- <script setup>
import ProductCard from '../components/ProductCard.vue'
const daftarProduk = [
 { id: 1, nama: 'BMW-e36', harga: 75000, gambar:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfQeRzIggKxrEJmKbgw8lyiHb9jlCsOyVfUxqD3wHUw&s=10' },
 { id: 2, nama: 'BMW-e46', harga: 35000, gambar:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCXEO-RxvaXFXzNKvhP0elJd39A5Jc9NuNFOz1YN4lQ&s=10' },
 { id: 3, nama: 'Tas Sekolah', harga: 120000, gambar:
'https://placehold.co/150' },
]
</script>
<template>
 <main>
 <h1>Produk Kami</h1>
 <div class="grid">
 <ProductCard
 v-for="produk in daftarProduk"
 :key="produk.id"
 :nama="produk.nama"
 :harga="produk.harga"
 :gambar="produk.gambar"
 />
 </div>
 </main>
</template>
<style scoped>
.grid {
 display: flex;
 gap: 16px;
 flex-wrap: wrap;
}
</style> -->

<script setup>
import ProductCard from '../components/ProductCard.vue'
// import tasSekolah from '../assets/tas-sekolah.jpg'

const daftarProduk = [
  { id: 1, nama: 'BMW-e36', harga: 75000, gambar:
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfQeRzIggKxrEJmKbgw8lyiHb9jlCsOyVfUxqD3wHUw&s=10' },
  { id: 2, nama: 'BMW-e46', harga: 35000, gambar:
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCXEO-RxvaXFXzNKvhP0elJd39A5Jc9NuNFOz1YN4lQ&s=10' },
  { id: 3, nama: 'BMW-m4', harga: 120000, gambar: 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSludwxe_o3kwxKtL4lQuE1CvbuLvYFGqvrzHBjoZbD0g&s=10'
   },
]
</script>

<template>
  <main>
    <h1>Produk Kami</h1>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>