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
  return `Produk "${nama}" berhasil ditambahkan!`;
}

// **Menghapus Produk dengan Rest Parameter dan Destructuring**
function hapusProduk(...ids) {
  const hasil = [];
  ids.forEach(id => {
    const index = produkList.findIndex(produk => produk.id === id);
    if (index !== -1) {
      const { nama } = produkList[index]; // Destructuring
      produkList = produkList.filter(produk => produk.id !== id);
      hasil.push(`Produk "${nama}" (ID: ${id}) berhasil dihapus!`);
    } else {
      hasil.push(`Produk dengan ID ${id} tidak ditemukan!`);
    }
  });
  return hasil.join('\n');
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  if (produkList.length === 0) {
    return "<p>Tidak ada produk tersedia.</p>";
  }
  
  let html = '<table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">';
  html += '<thead><tr><th>ID</th><th>Nama Produk</th><th>Harga</th></tr></thead><tbody>';
  
  produkList.forEach(({ id, nama, harga }) => {
    // Destructuring untuk mengambil property
    const hargaFormat = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(harga);
    
    html += `<tr><td>${id}</td><td>${nama}</td><td>${hargaFormat}</td></tr>`;
  });
  
  html += '</tbody></table>';
  html += `<p><strong>Total Produk: ${produkList.length}</strong></p>`;
  
  return html;
}

// **Event Listener untuk Browser**
document.addEventListener('DOMContentLoaded', () => {
  const btnTambah = document.getElementById('btnTambah');
  const btnHapus = document.getElementById('btnHapus');
  const btnTampilkan = document.getElementById('btnTampilkan');
  const output = document.getElementById('output');
  
  // Event Listener: Tambah Produk
  btnTambah.addEventListener('click', () => {
    const id = parseInt(document.getElementById('produkId').value);
    const nama = document.getElementById('produkNama').value;
    const harga = parseInt(document.getElementById('produkHarga').value);
    
    if (!id || !nama || !harga) {
      alert('Mohon isi semua field!');
      return;
    }
    
    const pesan = tambahProduk(id, nama, harga);
    alert(pesan);
    
    // Clear input fields
    document.getElementById('produkId').value = '';
    document.getElementById('produkNama').value = '';
    document.getElementById('produkHarga').value = '';
    
    // Auto refresh display
    output.innerHTML = tampilkanProduk();
  });
  
  // Event Listener: Hapus Produk
  btnHapus.addEventListener('click', () => {
    const idsInput = document.getElementById('hapusId').value;
    
    if (!idsInput) {
      alert('Mohon masukkan ID produk!');
      return;
    }
    
    // Support multiple IDs separated by comma
    const ids = idsInput.split(',').map(id => parseInt(id.trim()));
    const pesan = hapusProduk(...ids); // Rest parameter
    
    alert(pesan);
    document.getElementById('hapusId').value = '';
    
    // Auto refresh display
    output.innerHTML = tampilkanProduk();
  });
  
  // Event Listener: Tampilkan Semua Produk
  btnTampilkan.addEventListener('click', () => {
    output.innerHTML = tampilkanProduk();
  });
  
  // Tampilkan produk saat halaman pertama kali dimuat
  output.innerHTML = tampilkanProduk();
});
