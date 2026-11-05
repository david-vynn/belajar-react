
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function UserDetail() {

    const { id } = useParams();
    
    const [user, setUser] =  useState(null);
    const [loading, setLoading] =  useState(true);
    const [error, setError] =  useState("");
    
    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${id}`
                );

                if (!response.ok) {
                    throw new Error("Gagal mengambil data pengguna");
                }
                
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchUser();
    }, [id])

    if (loading) return <h2>Loading...</h2>;
    
    if (loading) return <h2>Error: {error}</h2>;

    if (!user) return <h2>Pengguna tidak ditemukan</h2>;
    
    return (
        <>
            <h1>Detail Pengguna</h1>
            <p>{user.nama}</p>
            <p>Emal: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Telepon: {user.phone}</p>
            <p>Website: {user.website}</p>
        </>
    )

}

export default UserDetail;