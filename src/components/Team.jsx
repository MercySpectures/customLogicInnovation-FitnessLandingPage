import { FadeIn } from "./FadeIn";
import { styles } from "../styles";

const TEAM = [
  { name: "Clara Bamford", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=340&fit=crop&crop=face" },
  { name: "Alicia Regis", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=280&h=340&fit=crop&crop=face" },
  { name: "Keith Finley", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=280&h=340&fit=crop&crop=face" },
];

export default function Team({ hideHeader, style }) {
  return (
    <section style={{ ...styles.teamSection, ...style }}>
      {!hideHeader && (
        <FadeIn>
          <p style={styles.teamTag}>OUR TEAM</p>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
        </FadeIn>
      )}
      <div style={styles.teamGrid} className="team-grid">
        <FadeIn direction="left" delay={0.1}>
          <div style={styles.coachCard}>
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>JOIN THE TEAM</p>
              <h3 style={styles.coachCardTitle}>Personalized<br />Coaching</h3>
              <p style={styles.coachCardDesc}>
                One-on-one sessions with our fitness and yoga experts. Get personalized guidance and encouragement to reach your specific goals.
              </p>
            </div>
            <button style={{ ...styles.btnPrimary, background: "rgba(255,255,255,0.12)", fontSize: 13, marginTop: 24 }} className="btn-primary">
              Our trainers
            </button>
          </div>
        </FadeIn>
        {TEAM.map((t, i) => (
          <FadeIn key={t.name} delay={(i + 1) * 0.12} direction="up">
            <div style={styles.trainerCard} className="trainer-card">
              <img src={t.img} alt={t.name} style={styles.trainerImg} className="trainer-img" />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                <p style={styles.trainerName}>{t.name}</p>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#4a6741", cursor: "pointer" }}>More →</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
