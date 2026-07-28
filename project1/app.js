import { router } from "./router.js";
const namasekolah = "SMKN Rodok - Rodok";

// Jalankan router setiap kali hash di URL berubah (user klik menu)
window.addEventListener("hashchange", () => router(namasekolah));

// Jalankan router pertama kali saat halaman pertama dibuka
window.addEventListener("DOMContentLoaded", () => router(namasekolah));
