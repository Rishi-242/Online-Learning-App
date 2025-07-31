/*import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
*/

// src/components/Navbar.jsx
/*import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-600">LearnIt</h1>
      <div className="space-x-6 text-gray-700 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
*/
// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 rounded-lg mb-6 flex justify-center space-x-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/register" className="hover:text-blue-400">Register</Link>
      <Link to="/login" className="hover:text-blue-400">Login</Link>
      <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
    </nav>
  );
}

export default Navbar;

