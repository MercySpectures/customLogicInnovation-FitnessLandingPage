import { FadeIn } from "./FadeIn";
import { styles } from "../styles";

export default function Hero() {
  return (
    <section style={styles.hero} className="hero-grid">
      <div style={styles.heroText}>
        <FadeIn direction="left" delay={0.1}>
          <h1 style={styles.heroTitle}>
            Transform <em style={styles.heroItalic}>Your<br />Body</em> and Mind
          </h1>
        </FadeIn>
        <FadeIn direction="left" delay={0.25}>
          <p style={styles.heroSubtitle}>
            Join us in transforming your body and mind through our comprehensive yoga and fitness programs.
          </p>
        </FadeIn>
        <FadeIn direction="left" delay={0.38}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }} className="hero-btns">
            <button style={styles.btnPrimary} className="btn-primary">Contact us</button>
            <button style={styles.btnLightGreen} className="btn-light-green">Start for free</button>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.5}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hero-social-proof">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" alt="User 1" style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #f0f4e8", zIndex: 3, objectFit: "cover" }} />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" alt="User 2" style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #f0f4e8", marginLeft: -16, zIndex: 2, objectFit: "cover" }} />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="User 3" style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #f0f4e8", marginLeft: -16, zIndex: 1, objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ color: "#d9f08b", fontSize: 16, letterSpacing: 2, textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                ★★★★★
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#5a6a4a", fontWeight: 500, marginTop: 2 }}>
                Rated 4.9/5 by 2,000+ members
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
      <div style={styles.heroImg} className="hero-img">
        <FadeIn direction="right" delay={0.2} style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=960&h=1120&fit=crop&crop=center"
            alt="Yoga"
            style={styles.heroImgEl}
          />
        </FadeIn>
      </div>
    </section>
  );
}
