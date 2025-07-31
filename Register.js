// src/pages/Register.js
/*import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'student'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" className="block w-full p-2 mb-2 border" />
      <input name="email" onChange={handleChange} placeholder="Email" className="block w-full p-2 mb-2 border" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="block w-full p-2 mb-2 border" />
      <select name="role" onChange={handleChange} className="block w-full p-2 mb-2 border">
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
    </form>
  );
}

export default Register;
*/


/*import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" className="block w-full p-2 mb-2 border" />
      <input name="email" onChange={handleChange} placeholder="Email" className="block w-full p-2 mb-2 border" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="block w-full p-2 mb-2 border" />
      <select name="role" onChange={handleChange} className="block w-full p-2 mb-2 border">
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
    </form>
  );
}

export default Register;
*/


import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" className="block w-full p-2 mb-2 border" />
      <input name="email" onChange={handleChange} placeholder="Email" className="block w-full p-2 mb-2 border" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="block w-full p-2 mb-2 border" />
      <select name="role" onChange={handleChange} className="block w-full p-2 mb-2 border">
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
    </form>
  );
}

export default Register;

