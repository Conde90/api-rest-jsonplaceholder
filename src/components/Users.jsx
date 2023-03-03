import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios()}, []
  );

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usuarios = await response.json();
     // console.log(usuarios);
      setUsuarios(usuarios);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className='text-center mt-5'>Users</h1>
      <Table responsive striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.suite}, {user.address.street}
              </td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Users;
