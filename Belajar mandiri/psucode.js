// Program Sistem Antrean Kantin Sekolah

let namaSiswa = "Firmansyah";
let nomorAntrean = 12;

let menu = "Nasi Goreng";
let stokMenu = 5;

let totalBayar = 15000;
let metodePembayaran = "Digital";

let pembayaranBerhasil = true;
let makananSiap = true;

document.write("<h2>=== SISTEM ANTREAN KANTIN SEKOLAH ===</h2>");

document.write("<b>1. Siswa Datang ke Kantin</b><br>");
document.write("Nama Siswa : " + namaSiswa + "<br><br>");

document.write("<b>2. Mengambil Nomor Antrean</b><br>");
document.write("Nomor Antrean : " + nomorAntrean + "<br><br>");

document.write("<b>3. Menunggu Nomor Dipanggil</b><br>");
document.write("Nomor " + nomorAntrean + " dipanggil.<br><br>");

document.write("<b>4. Memilih Menu</b><br>");
document.write("Menu : " + menu + "<br><br>");

if (stokMenu > 0) {

    document.write("<b>5. Cek Stok Menu</b><br>");
    document.write("Menu tersedia.<br><br>");

    document.write("<b>6. Pembayaran</b><br>");
    document.write("Total Bayar : Rp " + totalBayar + "<br>");
    document.write("Metode Pembayaran : " + metodePembayaran + "<br><br>");

    if (pembayaranBerhasil) {

        document.write("Pembayaran Berhasil.<br>");
        document.write("Bukti pembayaran dicetak.<br><br>");

        stokMenu--;

        document.write("<b>7. Menyiapkan Makanan</b><br>");

        if (makananSiap) {

            document.write("Makanan sudah siap.<br>");
            document.write("Silakan ambil pesanan.<br><br>");

        } else {

            document.write("Makanan masih diproses.<br><br>");

        }

    } else {

        document.write("Pembayaran gagal.<br>");
        document.write("Silakan ulangi pembayaran.<br>");

    }

} else {

    document.write("<b>Menu Habis</b><br>");
    document.write("Silakan memilih menu lain.<br>");

}

document.write("<b>Sisa Stok :</b> " + stokMenu + "<br><br>");

document.write("<h3>=== PROSES SELESAI ===</h3>");