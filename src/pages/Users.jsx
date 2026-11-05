import { useState, useEffect } from "react";
import { Link } from "react-router";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new error("Gagal mengambil data pengguna");
                }

                const data = await response.json();
                setUsers(data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [])

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <>
            <h1>Daftar Pengguna</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.nama}</h3>
                    <p>{user.email}</p>
                    <Link to={`/users/${user.id}`}>Lihat Detail</Link>
                </div>
            ))}
        </>
    )
}

export default Users;