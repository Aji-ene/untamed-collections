import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Admin = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    title: '',
    artist: 'by Admin',
    price: '',
    originalPrice: 23,
    image: '',
    category: 'Funny',
    fits: '',
    colors: '',
    sizes: '',
    styles: 'Classic,Modern,Retro'
  });

  const [stats, setStats] = useState({ totalProducts: 0, totalSales: 0 });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const loadedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(loadedProducts || []);
    setStats({ totalProducts: loadedProducts.length, totalSales: Math.floor(Math.random() * 5000) });
  }, [user, navigate]);

  const addProduct = () => {
    // Convert comma-separated fields to arrays
    const productToAdd = {
      ...newProduct,
      id: Date.now(),
      inStock: true,
      likes: 0,
      fits: newProduct.fits ? newProduct.fits.split(',').map(f => f.trim()) : ['Unisex'],
      sizes: newProduct.sizes ? newProduct.sizes.split(',').map(s => s.trim()) : [],
      colors: newProduct.colors ? newProduct.colors.split(',').map(c => c.trim()) : ['#000000'],
      styles: newProduct.styles ? newProduct.styles.split(',').map(st => st.trim()) : ['Classic']
    };

    const updated = [...products, productToAdd];
    localStorage.setItem('products', JSON.stringify(updated));
    setProducts(updated);
    setStats(prev => ({ ...prev, totalProducts: updated.length }));

    // Reset form
    setNewProduct({
      title: '',
      artist: 'by Admin',
      price: '',
      originalPrice: 23,
      image: '',
      category: 'Funny',
      fits: '',
      colors: '',
      sizes: '',
      styles: 'Classic,Modern,Retro'
    });
  };

  const deleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(updated));
    setProducts(updated);
    setStats(prev => ({ ...prev, totalProducts: updated.length }));
  };

  if (!user) return <p>Loading...</p>;

  if (user.role === 'subadmin') {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl mb-4">Subadmin Dashboard (Limited Access)</h1>
          <div className="bg-white p-6 rounded shadow">
            <h2>Sales Report</h2>
            <p>Total Sales: ${stats.totalSales}</p>
            <p>Total Products: {stats.totalProducts}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (user.role !== 'admin') {
    return <div className="container mx-auto py-8 px-4"><p>Access Denied. <a href="/login">Login as Admin</a></p></div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl mb-4">Admin Dashboard</h1>

        {/* Stats */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-2">Stats</h2>
          <p>Products: {stats.totalProducts}</p>
          <p>Total Sales: ${stats.totalSales}</p>
        </div>

        {/* Add Product Form */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Add Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="Title" value={newProduct.title}
              onChange={e => setNewProduct({ ...newProduct, title: e.target.value })}
              className="border p-2 rounded" />

            <input placeholder="Price" type="number" value={newProduct.price}
              onChange={e => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })}
              className="border p-2 rounded" />

            <input placeholder="Image URL" value={newProduct.image}
              onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
              className="border p-2 rounded" />

            <input placeholder="Category" value={newProduct.category}
              onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
              className="border p-2 rounded" />

            <input placeholder="Fits (e.g. Male,Female,Unisex)"
              value={newProduct.fits}
              onChange={e => setNewProduct({ ...newProduct, fits: e.target.value })}
              className="border p-2 rounded" />

            <input placeholder="Sizes (e.g. S,M,L,XL)"
              value={newProduct.sizes}
              onChange={e => setNewProduct({ ...newProduct, sizes: e.target.value })}
              className="border p-2 rounded" />

            <input placeholder="Colors (e.g. red,#000000,blue)"
              value={newProduct.colors}
              onChange={e => setNewProduct({ ...newProduct, colors: e.target.value })}
              className="border p-2 rounded" />

            <input placeholder="Styles (e.g. Classic,Modern,Retro)"
              value={newProduct.styles}
              onChange={e => setNewProduct({ ...newProduct, styles: e.target.value })}
              className="border p-2 rounded" />
          </div>

          <button onClick={addProduct}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Add Product
          </button>
        </div>

        {/* All Products */}
        <div className="bg-white rounded shadow">
          <h2 className="p-4 border-b font-bold">All Products</h2>
          <ul className="divide-y divide-gray-200">
            {products.map(p => (
              <li key={p.id} className="p-4 flex justify-between items-center">
                <span>{p.title} - ${p.price} ({p.category})</span>
                <button onClick={() => deleteProduct(p.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
