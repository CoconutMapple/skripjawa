// Array produkToko untuk menyimpan daftar produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    const id = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
    produkToko.push({ id, nama, harga, stok });
    console.log(`Produk "${nama}" berhasil ditambahkan dengan ID ${id}`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    const index = produkToko.findIndex(p => p.id === id);
    if (index !== -1) {
        const namaHapus = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(`Produk "${namaHapus}" berhasil dihapus`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan`);
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("===== DAFTAR PRODUK TOKO =====");
    if (produkToko.length === 0) {
        console.log("Tidak ada produk tersedia");
        return;
    }
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp ${produk.harga} | Stok: ${produk.stok}`);
    });
    console.log("==============================");
}

// Testing
tampilkanProduk();
tambahProduk("Monitor", 1500000, 3);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();