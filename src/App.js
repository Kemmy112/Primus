import './App.css';
import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='Username' />
     
      <br />
     
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
     
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm ;