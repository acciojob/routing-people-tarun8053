import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime'

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false)
    }

    fetchUsers();
  }, []);

  if(loading)return(<h2>Loading...</h2>)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;