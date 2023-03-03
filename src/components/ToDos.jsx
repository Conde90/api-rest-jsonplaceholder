import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function ToDos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    obtenerTodos();
  }, []);

  const obtenerTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const tasks = await response.json();
      //console.log(tasks);
      setTodos(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container py-5">
      <h1 className="text-center mt-5">ToDos</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Todo ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        {todos.map((todo) => (
          <tbody key={todo.id}>
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Completed" : "Not completed"}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default ToDos;
