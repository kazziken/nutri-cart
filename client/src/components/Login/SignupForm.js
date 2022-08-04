import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm({ setUser }) {
    const history = useHistory();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmitSignUp(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                avatar: avatar,
                password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((user) => setUser(user));
                setUsername("")
                setAvatar("")
                setPassword("")
                setPasswordConfirmation("")
                history.push("/home");
              } else {
                res.json().then((err) => setErrors(err.errors));
            }
            
        });
    }

  return (
      <form onSubmit={handleSubmitSignUp} className="max-w-[400px] w-full mx-auto bg-white-900 p-8 px-8 rounded-lg">
        <h2 className='text-4x1 dark:text-white font-bold text-center'>Sign Up</h2>
        <div className='flex flex-col text-black-400 py-2'>
          <label>
          Username
          </label>
          <input 
          type="text"  
          name={username} 
          value={username}
          className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none' 
          onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className='flex flex-col text-black-400 py-2'>
         <label> Email </label>
          <input 
          type="text" 
          name={email} 
          value={email}
          className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none' 
          onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='flex flex-col text-black-400 py-2'>
          <label>Avatar Image URL</label>
          <input 
          type="text" 
          name={avatar} 
          value={avatar}
          className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none'
          onChange={(e) => setAvatar(e.target.value)}></input>
        </div>
        <div className='flex flex-col text-black-400 py-2'>
          <label>
            Password
          </label>
          <input 
          type="password" 
          className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none' 
          onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <label className='flex flex-col text-black-400 py-2'>
          Password Confirmation
          <input 
          type="password"
          className= 'rounded-lg bg-white-700 mt-2 p-2 focus:border-blue-500 focus:bg-white-800 focus:outline-none' 
          onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
  );
}

export default SignupForm;
