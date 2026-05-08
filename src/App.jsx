import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trainers from "./pages/Trainers";
import Blog from "./pages/Blog";
import Plans from "./pages/Plans";
import Faq from "./pages/Faq";
import { styles } from "./styles";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { background: #e3e8d9; overflow-x: hidden; }
        ::selection { background: #b5c994; color: #1a2610; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #4a6741; border-radius: 99px; }
        .btn-primary:hover { background: #2d4020 !important; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(26,38,16,0.25); }
        .btn-outline:hover { background: #1a2610 !important; color: #f0f4e8 !important; }
        .btn-green:hover { background: #3a5231 !important; transform: translateY(-1px); }
        .btn-light-green:hover { background: #c5d9b0 !important; transform: translateY(-1px); }
        .store-btn:hover { background: rgba(255,255,255,0.18) !important; }
        .trainer-card:hover .trainer-img { transform: scale(1.04); }
        .plan-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(30,50,20,0.14) !important; }
        .blog-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(26,38,16,0.08); }
        .blog-card:hover .blog-img { transform: scale(1.05); }
        .nav-link:hover { color: #1a2610 !important; }
        .footer-link:hover { color: rgba(255,255,255,0.9) !important; }
        .footer-link-hover:hover { color: #1a2610 !important; }
        .hover-opacity:hover { opacity: 0.8; }
        .reviews-scroll::-webkit-scrollbar { display: none; }
        input:focus, textarea:focus { box-shadow: 0 0 0 2px #8a9a7a !important; border-color: transparent !important; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; text-align: center; align-items: center; }
          .hero-img { order: -1; }
          .hero-btns { justify-content: center !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          
          .stats-bar-container { flex-direction: column !important; gap: 40px !important; }
          .stats-items-col { flex-direction: column !important; align-items: center; width: 100%; gap: 32px !important; }
          .stat-item-vertical { border-right: none !important; padding-right: 0 !important; padding-bottom: 24px !important; border-bottom: 1px solid rgba(255,255,255,0.15); text-align: center !important; width: 100%; }
          .stat-item-vertical:last-child { border-bottom: none !important; padding-bottom: 0 !important; }
          .stats-text-block { padding-left: 0 !important; text-align: center; }
          
          .app-section { flex-direction: column; }
          .contact-section { flex-direction: column; }
          .contact-imgs { width: 240px !important; height: 240px !important; margin: 0 auto; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-links-container { flex-direction: column; gap: 40px !important; }
          .nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          .plans-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={styles.root}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}