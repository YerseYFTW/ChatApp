import React, { useState } from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { AuthService } from "@genezio/auth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginLoading, setLoginLoading] = useState(false);
  // @ts-ignore
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginLoading(true);
  
    try {
      await AuthService.getInstance().login(email, password);
      navigate("/chatapp");
    } catch (error: any) {
      console.log("Login Failed", error);
      alert("Login Failed");
    }
    setLoginLoading(false);
  };

  return (
    <div >
    <form onSubmit={handleLoginSubmit} className="login-form" >
      <p>Login Page</p>
      <div >
        <label htmlFor="email"><b>Email:</b> </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password"><b>Password:</b> </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{ loginLoading ? "Loading..." : "Login" } </button>
      
      <button onClick={() => navigate('/signup')}>Create an account</button>

      </form>
      </div>
  );
};

export default Login;


