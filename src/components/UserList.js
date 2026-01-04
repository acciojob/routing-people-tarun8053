import React, { useEffect, useState } from "react";

function UserList() {
  // 👇 SBI ko turant 1 li chahiye
  const [users, setUsers] = useState([
    { id: 1, name: "Leanne Graham" }
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
