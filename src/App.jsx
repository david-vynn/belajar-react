import { useState } from "react";

function App() {
  
  const [produk, setProduk] = useState([
    { id: 1, nama: "Produk A", harga: 10000 },
    { id: 2, nama: "Produk B", harga: 20000 },
    { id: 3, nama: "Produk C", harga: 30000 },
  ]);

  const [hargaBaru, setHargaBaru] = useState("")
  const [namaProduk, setNamaProduk] = useState("")
  const [hargaProduk, setHargaProduk] = useState("")

  function handleTambahProduk() {

    if (namaProduk === "" || hargaProduk === "" || hargaProduk <= 0) {
      alert("Masukkan input yang valid")
      return;
    }

    const produkBaru = {
      id: Date.now(),
      nama: namaProduk,
      harga: Number(hargaProduk)
    };

    setProduk((prev) => [
        ...prev, produkBaru 
      ]);

    setHargaProduk("");
    setNamaProduk("");
    }

    function hapusProduk(id) {
      setProduk((prev) =>
        prev.filter((item) => item.id !== id)
      )
    }
  
    function editProduk(id) {
      if (hargaBaru === "" || hargaBaru <= 0) {
        alert("Input harga yang valid")
        return;
      }
  
      setProduk((prev) =>
        prev.map((item) =>
          item.id === id
          ? {...item, harga: Number(hargaBaru)}
          : item
        )
      );
  
      setHargaBaru("");
    } 
  
    return (
      <>
        <h1>Daftar Produk</h1>
  
        <ul>
          {produk.map((item) => (
            <li key={item.id}>
              {item.nama} - Rp {item.harga}
              <button onClick={() => hapusProduk(item.id)}>Hapus</button>
              <button onClick={() => editProduk(item.id)}>Edit</button>
            </li>
          ))}
        </ul>
  
        <input
          type="number"
          value={hargaBaru}
          onChange={(e) => setHargaBaru(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Masukkan nama produk"
          value={namaProduk}
          onChange={(e) => setNamaProduk(e.target.value)}
        />
  
        <input
          type="number"
          placeholder="Masukkan harga produk"
          value={hargaProduk}
          onChange={(e) => setHargaProduk(e.target.value)}
        />
        <button onClick={handleTambahProduk}>Tambah Produk</button>
      </>
    )
  };
    



export default App;