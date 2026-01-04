import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
