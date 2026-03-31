

### 1️⃣ **DESTRUCTURING**

Destructuring adalah cara untuk mengekstrak nilai dari array atau object ke dalam variabel terpisah.

#### Contoh dalam kode:

```javascript
// Di fungsi hapusProduk
const { nama } = produkList[index];
// Mengambil property 'nama' dari object produk
```

```javascript
// Di fungsi tampilkanProduk
produkList.forEach(({ id, nama, harga }) => {
    // Langsung ekstrak id, nama, harga dari setiap produk
    console.log(`ID: ${id} | Nama: ${nama} | Harga: ${harga}`);
});
```

**Keuntungan:**
- Kode lebih ringkas dan mudah dibaca
- Tidak perlu menulis `produk.id`, `produk.nama` berulang kali
- Lebih efisien

---

###  **SPREAD OPERATOR (...)**

Spread operator digunakan untuk "menyebarkan" elemen array atau object.

#### Contoh dalam kode:

```javascript
// Di fungsi tambahProduk
produkList = [...produkList, produkBaru];
```

**Penjelasan:**
- `...produkList` menyebarkan semua elemen array yang sudah ada
- Kemudian menambahkan `produkBaru` di akhir
- Membuat array baru tanpa mengubah array original (immutable)

**Alternatif tanpa spread operator:**
```javascript
// Cara lama (mutable - mengubah array original)
produkList.push(produkBaru);
```

**Keuntungan spread operator:**
- Immutable (tidak mengubah data original)
- Lebih aman untuk state management
- Mendukung functional programming

---

### 3️⃣ **REST PARAMETER (...)**

Rest parameter mengumpulkan argumen menjadi array.

#### Contoh dalam kode:

```javascript
function hapusProduk(...ids) {
    // ids adalah array dari semua parameter yang dikirim
    ids.forEach(id => {
        // Proses setiap id
    });
}

// Pemanggilan:
hapusProduk(2);           // ids = [2]
hapusProduk(2, 4);        // ids = [2, 4]
hapusProduk(1, 3, 5, 7);  // ids = [1, 3, 5, 7]
```

**Keuntungan:**
- Fungsi bisa menerima jumlah parameter yang fleksibel
- Tidak perlu tahu berapa banyak parameter yang akan dikirim
- Memudahkan operasi batch (hapus banyak produk sekaligus)

---

### 4️ **EVENT LISTENER*

Event Listener mendengarkan interaksi user (click, input, dll) dan menjalankan fungsi tertentu.

#### Contoh dalam kode:

```javascript
// Browser version
btnTambah.addEventListener('click', () => {
    // Kode yang dijalankan saat button diklik
    tambahProduk(id, nama, harga);
});

btnHapus.addEventListener('click', () => {
    // Kode yang dijalankan saat button hapus diklik
    hapusProduk(...ids);
});
```

**Event yang sering dipakai:**
- `click` - Saat elemen diklik
- `submit` - Saat form disubmit
- `change` - Saat input berubah
- `keyup` - Saat tombol keyboard dilepas
- `DOMContentLoaded` - Saat halaman selesai dimuat

---

## 🎯 Fitur-Fitur yang Diimplementasikan

###  1. List Data Produk Awal (Minimal 5)
```javascript
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Smartwatch", harga: 3000000 },
  { id: 5, nama: "Headphone", harga: 1500000 }
];
```

###  2. Menambahkan Produk
```javascript
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];  // Spread operator
  return `Produk "${nama}" berhasil ditambahkan!`;
}
```

**Konsep yang digunakan:**
-  Spread Operator (`...produkList`)
-  Object Shorthand (`{ id, nama, harga }` = `{ id: id, nama: nama, harga: harga }`)

###  3. Menghapus Produk
```javascript
function hapusProduk(...ids) {  // Rest parameter
  ids.forEach(id => {
    const { nama } = produkList[index];  // Destructuring
    produkList = produkList.filter(produk => produk.id !== id);
  });
}
```

**Konsep yang digunakan:**
-  Rest Parameter (`...ids`)
- Destructuring (`const { nama }`)
-  Array methods (`filter`, `findIndex`)

###  4. Menampilkan Semua Produk
```javascript
function tampilkanProduk() {
  produkList.forEach(({ id, nama, harga }) => {  // Destructuring
    console.log(`ID: ${id} | Nama: ${nama} | Harga: ${harga}`);
  });
}
```

**Konsep yang digunakan:**
-  Destructuring dalam parameter function
-  Array method (`forEach`)
- Template literals

---

## Cara Menggunakan

### Untuk Node.js (Terminal/Console):
```bash
node manajemen_produk.js
```

### Untuk Browser:
1. Buka file `index.html` di browser
2. Gunakan form untuk:
   - Tambah produk: Isi ID, nama, harga → klik "Tambah Produk"
   - Hapus produk: Isi ID (bisa multiple dengan koma) → klik "Hapus Produk"
   - Tampilkan: Klik "Refresh Tampilan Produk"

---

## Contoh Penggunaan

### Menambah 1 Produk:
```javascript
tambahProduk(6, "Mouse Gaming", 450000);
// Output: ✅ Produk "Mouse Gaming" berhasil ditambahkan!
```

### Menghapus Multiple Produk:
```javascript
hapusProduk(2, 4, 6);
// Akan menghapus produk dengan ID 2, 4, dan 6 sekaligus
// Output: 🗑️ Produk "Smartphone" (ID: 2) berhasil dihapus!
//         🗑️ Produk "Smartwatch" (ID: 4) berhasil dihapus!
//         🗑️ Produk "Mouse Gaming" (ID: 6) berhasil dihapus!
```

### Menampilkan Semua Produk:
```javascript
tampilkanProduk();
// Output: Tabel dengan semua produk yang tersisa
```

---

