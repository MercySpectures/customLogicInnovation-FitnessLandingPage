import { Link } from "react-router-dom";
import { CircleDot } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer style={{ background: "#c7d3b5", padding: "80px 5% 40px", color: "#1a2610" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, marginBottom: 80 }} className="footer-grid">
        {/* Left side */}
        <div>
          <Link to="/" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 32, color: "#1a2610", display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 32, letterSpacing: "-0.03em" }}>
            <CircleDot size={32} /> Serenium
          </Link>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#2a3a1a", marginBottom: 40, fontWeight: 400 }}>
            Join our newsletter to stay up to date on features and releases.
          </p>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200, borderBottom: "1px solid #7a8a6a", paddingBottom: 10 }}>
              <input
                placeholder="Enter your email"
                style={{ width: "100%", background: "transparent", border: "none", outline: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#1a2610" }}
              />
            </div>
            <button style={{ background: "#102011", color: "#fff", border: "none", borderRadius: "99px", padding: "14px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.25s ease" }} className="btn-primary">
              Subscribe
            </button>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#3a4a2a", lineHeight: 1.6, maxWidth: 460 }}>
            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
          </p>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", gap: "10%", flexWrap: "wrap" }} className="footer-links-container">
          <div style={{ flex: 1, minWidth: 120 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: "#1a2610", marginBottom: 32 }}>Our Services</p>
            {["Trainers", "Blog", "Plans", "Contact us"].map(l => (
              <Link key={l} to={l === "Contact us" ? "/" : `/${l.toLowerCase()}`} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4a5a3a", marginBottom: 20, textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">
                {l}
              </Link>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 120 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: "#1a2610", marginBottom: 32 }}>Follow Us</p>
            <a href="#" className="footer-link-hover" style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4a5a3a", marginBottom: 20, textDecoration: "none", transition: "color 0.2s" }}><FaFacebook size={20} color="#1a2610" /> Facebook</a>
            <a href="#" className="footer-link-hover" style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4a5a3a", marginBottom: 20, textDecoration: "none", transition: "color 0.2s" }}><FaInstagram size={20} color="#1a2610" /> Instagram</a>
            <a href="#" className="footer-link-hover" style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4a5a3a", marginBottom: 20, textDecoration: "none", transition: "color 0.2s" }}><FaXTwitter size={20} color="#1a2610" /> X</a>
            <a href="#" className="footer-link-hover" style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4a5a3a", marginBottom: 20, textDecoration: "none", transition: "color 0.2s" }}><FaLinkedin size={20} color="#1a2610" /> LinkedIn</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #aab698", paddingTop: 32, textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#4a5a3a" }}>
        ©2025, Template by <a style={{ textDecoration: "none", color: "#1a2610" }} href="https://mercyfolio.vercel.app">Mercy</a>
      </div>
    </footer>
  );
}
