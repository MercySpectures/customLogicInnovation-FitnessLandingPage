import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircleDot } from "lucide-react";
import { styles } from "../styles";

const NAV_LINKS = ["Trainers", "Blog", "Plans", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      ...styles.nav,
      background: scrolled ? "rgba(240,244,232,0.97)" : "rgba(240,244,232,0.85)",
      borderBottom: scrolled ? "1px solid rgba(100,120,60,0.12)" : "none",
    }}>
      <Link to="/" style={styles.logo}>
        <CircleDot size={24} /> Serenium
      </Link>
      <ul style={styles.navLinks} className="nav-links">
        {NAV_LINKS.map(l => (
          <li key={l}>
            <Link to={`/${l.toLowerCase()}`} style={styles.navLink} className="nav-link">
              {l}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={styles.btnPrimary} className="btn-primary">Contact Us</button>
      </Link>
    </nav>
  );
}
