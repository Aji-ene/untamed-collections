import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      alert('Logged in successfully!');
      navigate('/');
    } else {
      alert('Invalid credentials. Try: admin@test.com / admin (Admin) or sub@test.com / sub (Subadmin)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border mb-4 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700">
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
        </p>
        <p className="mt-2 text-center text-xs text-gray-600">
          Demo: admin@test.com / admin (Admin) | sub@test.com / sub (Subadmin)
        </p>
      </form>
    </div>
  );
};

export default Login;


