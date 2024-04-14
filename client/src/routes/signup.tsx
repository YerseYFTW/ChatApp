import React, { useState } from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { AuthService } from "@genezio/auth";



const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await AuthService.getInstance().register(email, password, name);
      console.log("Register Success", response);
  
      navigate("/login");
    } catch (error: any) {
      console.log(error);
      alert("An error has occured");
    }
    setLoading(false);
  };

  return (
    <div>
      
    <form onSubmit={handleSubmit} className='login-form'>
    <p>Signup page</p>
      <div>
        <label htmlFor="name"><b>Name:</b></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email"><b>Email:</b></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password"><b>Password:</b></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{ loading ? "Loading..." : "Sign Up" }</button>
      <button onClick={() => navigate('/')}>Go to login</button>
    </form>
    </div>
  );
};

export default Signup;


