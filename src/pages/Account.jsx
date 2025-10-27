import React from 'react';
import { useUser } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { products } from '../data/products.jsx';

const Account = () => {
  const { user, likes, logout } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const likedProducts = products.filter(p => likes.includes(p.id));

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl mb-4">Account</h1>
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2>Welcome, {user.email} ({user.role})</h2>
          <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded mt-2">Logout</button>
        </div>
        {user.role === 'admin' && <Link to="/admin" className="bg-blue-600 text-white px-4 py-2 rounded block mb-4">Go to Admin Dashboard</Link>}
        <div className="bg-white p-6 rounded shadow">
          <h2>Liked Products ({likes.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {likedProducts.map(product => (
              <div key={product.id} className="border p-2 rounded">
                <img src={product.image} alt={product.title} className="w-full h-20 object-cover mb-2" />
                <p className="text-sm">{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;



