import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Stores from "./pages/Stores";
import Franchise from "./pages/Franchise";
import About from "./pages/About";

// 临时页面组件
const Order = () => (
  <div className="container mt-4">
    <h2>在线点餐</h2>
    <p>该功能正在开发中...</p>
  </div>
);

// 临时管理后台组件
const Admin = () => (
  <div className="container mt-4">
    <h2>管理后台</h2>
    <p>请登录以继续...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
