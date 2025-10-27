import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(email, password)) {
      alert('Registered and logged in successfully!');
      navigate('/');
    } else {
      alert('Email already exists. Try logging in.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
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
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded w-full hover:bg-green-700">
          Register
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

