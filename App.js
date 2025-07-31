/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-600">Home</Link>
          <Link to="/register" className="mr-4 text-blue-600">Register</Link>
          <Link to="/login" className="mr-4 text-blue-600">Login</Link>
          <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <nav className="space-x-4 mb-6">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css'; // Import the custom CSS

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // ✅ this
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/



/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Dummy pages
function Home() {
  return (
    <div>
      <h1>Accessible Online Courses For All</h1>
      <p>Learn from the best instructors anytime, anywhere.</p>
      <h2>Popular Categories</h2>
      <div>
        <h3>Web Development</h3>
        <p>Explore the latest content in Web Development</p>
        <a href="https://www.youtube.com">Watch Web Dev Course on YouTube</a>
      </div>
      <div>
        <h3>Data Science</h3>
        <p>Explore the latest content in Data Science</p>
        <a href="https://www.youtube.com">Watch Data Science Course on YouTube</a>
      </div>
      <div>
        <h3>AI & ML</h3>
        <p>Explore the latest content in AI & ML</p>
        <a href="https://www.youtube.com">Watch AI & ML Course on YouTube</a>
      </div>
    </div>
  );
}

function Register() {
  return <h2>Register Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Dummy in-memory user store
const users = [];

function Home() {
  return (
    <div>
      <h1>Accessible Online Courses For All</h1>
      <p>Learn from the best instructors anytime, anywhere.</p>
    </div>
  );
}

function Register({ onRegister }) {
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'student' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(form); // Save user
    onRegister(form);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <h2>Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required /><br /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br /><br />
      <select name="role" onChange={handleChange}>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select><br /><br />
      <button type="submit">Register</button>
    </form>
  );
}

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === form.username && u.password === form.password);
    if (user) {
      onLogin(user);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br /><br />
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard({ user }) {
  if (!user) return <h2 style={{ textAlign: 'center' }}>Please login to view dashboard</h2>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome, {user.username} ({user.role})</h2>
      <h2>Popular Categories</h2>

      <div>
        <h3>Web Development</h3>
        <p>Explore the latest content in Web Development</p>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Watch Web Dev Course on YouTube</a>
      </div>

      <div>
        <h3>Data Science</h3>
        <p>Explore the latest content in Data Science</p>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Watch Data Science Course on YouTube</a>
      </div>

      <div>
        <h3>AI & ML</h3>
        <p>Explore the latest content in AI & ML</p>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Watch AI & ML Course on YouTube</a>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register onRegister={setUser} />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

