import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='hidden sm:block'>
          <img className="w-full h-full object cover" src={"https://i.imgur.com/CKyx7bg.png"}/>
        </div>
        <div className='bg-white-800 flex flex-col justify-center'>
        {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm setUser={setUser} />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}

      </div>
    </div>
    );
}

export default Login;