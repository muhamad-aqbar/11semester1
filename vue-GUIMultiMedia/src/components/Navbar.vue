<template> 
 
 <!-- <h2>SMK Yadika Soreang - Onlineshop</h2>
 <RouterLink to="/">Landing</RouterLink> |
 <RouterLink to="/product">Product</RouterLink> |
 <RouterLink to="/about">About</RouterLink>
 </nav> -->
<header class="navbar">
      <!-- <div class="brand-logo"></div>-->
      <h1>ℬ𝒶𝓇𝓈𝓈_𝒮𝒽ℴ𝓅</h1>
      
      <nav class="nav-links">
        <RouterLink to="/" class="nav-item">Landing</RouterLink>
        <RouterLink to="/product" class="nav-item">Product</RouterLink>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
 <hr />
</template>
<script setup>

</script>
<style scoped>
nav {
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 10px 20px;

}
</style>
 