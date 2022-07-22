import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          history.push("/home");
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
          {errors.map((err) => (
            <alert key={err}>"Invalid information"</alert>
          ))}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
