import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            开发者 <span>Portfolio</span>
          </Link>
          <ul className="navbar-links">
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/portfolio">作品</Link>
            </li>
            <li>
              <Link to="/about">关于我</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
            <a href="#">Twitter</a>
          </div>
          <p className="footer-copyright">
            © 2026 开发者 Portfolio. 保留所有权利。
          </p>
        </div>
      </footer>
    </Router>
  );
};

export default App;