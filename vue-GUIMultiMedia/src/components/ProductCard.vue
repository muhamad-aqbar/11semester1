src/components/ProductCard.vue (dikembangkan — lengkapi bagian bergaris)
<script setup>
import { ref } from 'vue'
 
defineProps(['nama', 'harga', 'gambar'])
 
const gambarDipilih = ref(null)
 
function bukaPreview(src) {
  gambarDipilih.value = src // isi: src gambar yang diklik
}
 
function tutupPreview() {
  gambarDipilih.value = null
}
</script>
 
<template>
  <div class="card">
    <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" />
    <h3>{{ nama }}</h3>
    <p>$ {{ harga.toLocaleString('id-ID') }}</p>
  </div>
 
  <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
    <img :src="gambarDipilih" class="preview-besar" />
  </div>
</template>
 
<style scoped>
.preview-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex; align-items: center; justify-content: center;
}
.preview-besar { max-width: 80%; max-height: 80%; border-radius: 8px; }
</style>
