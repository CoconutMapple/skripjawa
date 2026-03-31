// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Smartwatch", harga: 3000000 },
  { id: 5, nama: "Headphone", harga: 1500000 }
];

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
  console.log(`✅ Produk "${nama}" berhasil ditambahkan!`);
}

// **Menghapus Produk dengan Rest Parameter dan Destructuring**
function hapusProduk(...ids) {
  ids.forEach(id => {
    const index = produkList.findIndex(produk => produk.id === id);
    if (index !== -1) {
      const { nama } = produkList[index]; // Destructuring
      produkList = produkList.filter(produk => produk.id !== id);
      console.log(`🗑️ Produk "${nama}" (ID: ${id}) berhasil dihapus!`);
    } else {
      console.log(`❌ Produk dengan ID ${id} tidak ditemukan!`);
    }
  });
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("\n📦 DAFTAR SEMUA PRODUK:");
  console.log("=".repeat(50));
  
  if (produkList.length === 0) {
    console.log("Tidak ada produk tersedia.");
    return;
  }
  
  produkList.forEach(({ id, nama, harga }) => {
    // Destructuring untuk mengambil property
    const hargaFormat = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(harga);
    
    console.log(`ID: ${id} | Nama: ${nama} | Harga: ${hargaFormat}`);
  });
  
  console.log("=".repeat(50));
  console.log(`Total Produk: ${produkList.length}\n`);
}

// **Event Handler menggunakan Event Listener**
const eventHandler = {
  tambah: (id, nama, harga) => {
    tambahProduk(id, nama, harga);
    tampilkanProduk();
  },
  
  hapus: (...ids) => {
    hapusProduk(...ids);
    tampilkanProduk();
  },
  
  tampilkan: () => {
    tampilkanProduk();
  }
};

// **Simulasi Event Listener (dalam environment Node.js)**
// Jika di browser, bisa menggunakan addEventListener pada button

console.log("🚀 SISTEM MANAJEMEN PRODUK TOKO ONLINE\n");

// Tampilkan produk awal
console.log("📋 PRODUK AWAL:");
tampilkanProduk();

// Contoh penggunaan: Menambahkan produk baru
console.log("\n➕ MENAMBAH PRODUK:");
eventHandler.tambah(6, "Keyboard Gaming", 850000);

// Contoh penggunaan: Menghapus produk (bisa hapus multiple sekaligus)
console.log("\n➖ MENGHAPUS PRODUK:");
eventHandler.hapus(2, 4); // Hapus Smartphone dan Smartwatch

// Tampilkan produk setelah perubahan
console.log("\n📊 PRODUK AKHIR:");
eventHandler.tampilkan();

// **Contoh implementasi dengan HTML (untuk referensi)**
/*
<!DOCTYPE html>
<html>
<head>
    <title>Manajemen Produk</title>
</head>
<body>
    <h1>Sistem Manajemen Produk</h1>
    
    <div>
        <h2>Tambah Produk</h2>
        <input type="number" id="produkId" placeholder="ID">
        <input type="text" id="produkNama" placeholder="Nama Produk">
        <input type="number" id="produkHarga" placeholder="Harga">
        <button id="btnTambah">Tambah Produk</button>
    </div>
    
    <div>
        <h2>Hapus Produk</h2>
        <input type="number" id="hapusId" placeholder="ID Produk">
        <button id="btnHapus">Hapus Produk</button>
    </div>
    
    <button id="btnTampilkan">Tampilkan Semua Produk</button>
    
    <div id="output"></div>

    <script src="manajemen_produk_browser.js"></script>
</body>
</html>
*/
