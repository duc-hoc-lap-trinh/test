import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Trang Liên Hệ - Đang Phát Triển</h1></div>} />
          <Route path="/services/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Trang Dịch Vụ - Đang Phát Triển</h1></div>} />
          <Route path="/courses/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Trang Khóa Học - Đang Phát Triển</h1></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;