import { FadeIn } from "./FadeIn";
import { styles } from "../styles";
import { Apple, Play, Activity, Dumbbell, Sparkles } from "lucide-react";

export default function AppSection() {
  return (
    <div style={styles.appSection} className="app-section">
      <div style={{ flex: 1 }}>
        <FadeIn direction="left">
          <h2 style={styles.appTitle}>
            Clearmind <em style={styles.appItalic}>your<br />partner</em> in mental<br />wellness.
          </h2>
          <p style={styles.appDesc}>Find and book your favorite yoga classes from anywhere with our yoga app.</p>
          <div style={styles.storeBtns}>
            <button style={styles.storeBtn} className="store-btn">
              <Apple size={18} /> App Store
            </button>
            <button style={styles.storeBtn} className="store-btn">
              <Play size={18} /> Play Store
            </button>
          </div>
        </FadeIn>
      </div>
      <FadeIn direction="right" delay={0.2}>
        <div style={{ width: 280, background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Alicia Regis</div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Popular Workouts</div>
          <div style={{ background: "#4a6741", borderRadius: 12, padding: "16px", marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#fff", fontWeight: 600 }}>Wellness<br />Workshops</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Today Plan</div>
          </div>
          {[
            { icon: <Activity size={14} />, text: "Morning Yoga — 45min" },
            { icon: <Dumbbell size={14} />, text: "Core Training — 30min" },
            { icon: <Sparkles size={14} />, text: "Meditation — 20min" }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", padding: "10px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
