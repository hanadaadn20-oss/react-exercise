import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Fadlan geli Username iyo Password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <h1>Login</h1>

          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br />

          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h1>Hello, {username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;