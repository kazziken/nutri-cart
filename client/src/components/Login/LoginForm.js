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
          setUser(user)
          history.push("/home");
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  return (
      <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-white-900 p-8 px-8 rounded-lg">
        <h2 className='text-4x1 dark:text-white font-bold text-center'>WELCOME</h2>
        <div className='flex flex-col text-black-400 py-2'>
          <label>
            Username
            </label>
            <input
              type="text"
              value={username}
              className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none'
              onChange={(e) => setUsername(e.target.value)}
            ></input>
         </div>
         <div className='flex flex-col text-black-400 py-2'>
          <label>
            Password
          </label>
            <input
              type="password"
              value={password}
              className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className='flex justify-between text-black-400 py-2'>
            <p><input type="checkbox"></input> Remember Me </p>
            <p> Forgot Password </p>
          </div>
          <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
          {errors.map((err) => (
            <alert key={err}>"Invalid information"</alert>
          ))}
      </form>
  );
}

export default LoginForm;