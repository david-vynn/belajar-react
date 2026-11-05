import Produk from "./Produk";

function App() {
  return (
    <>
      <h1>Daftar Produk</h1>

      <Produk nama="Laptop" harga={7000000} stok={5} />
      <Produk nama="Mouse" harga={150000} stok={20} />
      <Produk nama="Keyboard" harga={350000} stok={0}/>
    </>
  );
}

export default App;