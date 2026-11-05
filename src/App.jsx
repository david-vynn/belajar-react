import Produk from "./Produk";

function App() {

  const daftarProduk = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 150000, stok: 20 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 10 },
    { id: 4, nama: "Monitor", harga: 2000000, stok: 8 },
    { id: 5, nama: "Headset", harga: 250000, stok: 0 },
  ];
  
  return (
    <>
      <h1>Daftar Produk</h1>

      {daftarProduk.map((item) => (
        <Produk
          key={item.id}
          nama={item.nama}
          harga={item.harga}
          stok={item.stok}
        />
      ))}
    </>
  );
}

export default App;