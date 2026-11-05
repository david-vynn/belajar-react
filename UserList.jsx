import UsersCard from "./UserCard";

function UserList({ users }) {
    return (
        <>
            {users.map((user) => (
                <UsersCard key={user.id} user={user} />
            ))}
        </>
    );
}

export default UserList;