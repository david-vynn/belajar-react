import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);
  
  function tambah() {
    setCount(count + 1)
  }

  function kurang() {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return 0
    })
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App;