import { useParams } from "react-router";

function UserDetail() {

    const { id } = useParams();
    
    return (
        <>
            <h1>Detail Pengguna</h1>
            <p>ID Pengguna: {id}</p>
        </>
    )

}

export default UserDetail;