import React from 'react'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>Login
       <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login