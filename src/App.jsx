import { useState, useEffect } from "react";
import UserList from "../Userlist";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if(!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }
  
  return (
    <>
      <h1>Daftar Pengguna</h1>

      <input
        type="text" 
        placeholder="Cari nama pengguna..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && filteredUsers.length === 0 ? (
        <p>Pengguna tidak ditemukan</p>
      ) : (
        <UserList users={filteredUsers}/>
      )}
      
    </>
  )
}

export default App;