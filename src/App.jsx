function App() {

  function tampilkanPesan() {
    alert('Tombol berhasil diklik');  
  }
  
  return (
    <>
      <button onClick={tampilkanPesan}>Klik Saya</button>
    </>
  );
}

export default App;