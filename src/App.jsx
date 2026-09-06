import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f2f2f2;
        }

        .page {
          min-height: 100vh;
          padding: 55px 20px;
        }

        .todo-container {
          max-width: 900px;
          margin: auto;
          background: white;
          padding: 55px 65px;
          border-radius: 12px;
        }

        h1 {
          text-align: center;
          font-size: 48px;
          margin-bottom: 65px;
          color: #111;
        }

        .input-area {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }

        .input-area input {
          flex: 1;
          height: 75px;
          padding: 0 30px;
          border: 1px solid #ddd;
          border-radius: 12px;
          font-size: 27px;
          outline: none;
        }

        .add-btn {
          width: 155px;
          border: none;
          border-radius: 12px;
          background: #7651c7;
          color: white;
          font-size: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .todo-item {
          display: flex;
          align-items: center;
          gap: 20px;
          min-height: 65px;
          font-size: 27px;
        }

        .checkbox {
          width: 32px;
          height: 32px;
          cursor: pointer;
        }

        .todo-text {
          flex: 1;
        }

        .completed {
          text-decoration: line-through;
          color: #777;
        }

        .delete-btn {
          border: none;
          background: none;
          color: #9b2929;
          font-size: 23px;
          cursor: pointer;
        }

        @media (max-width: 700px) {
          .todo-container {
            padding: 35px 20px;
          }

          h1 {
            font-size: 36px;
          }

          .input-area input {
            font-size: 18px;
            height: 58px;
            padding: 0 15px;
          }

          .add-btn {
            width: 85px;
            font-size: 18px;
          }

          .todo-item {
            font-size: 19px;
          }
        }
      `}</style>

      <div className="page">
        <div className="todo-container">

          <h1>My Todo List</h1>

          <div className="input-area">
            <input
              type="text"
              placeholder="Add a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
            />

            <button className="add-btn" onClick={addTodo}>
              Add
            </button>
          </div>

          <div className="todo-list">
            {todos.map((todo) => (
              <div className="todo-item" key={todo.id}>

                <input
                  className="checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                <span
                  className={`todo-text ${
                    todo.completed ? "completed" : ""
                  }`}
                >
                  {todo.text}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;