import { FadeIn } from "./FadeIn";

const STATS = [
  { val: "3.2", suffix: "K", label: "World champions" },
  { val: "1.8", suffix: "%", label: "Runner up champions" },
  { val: "4.5", suffix: "M", label: "Sea games participation" },
];

export default function StatsBar() {
  return (
    <div style={{ background: "#102011", padding: "80px 5%", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }} className="stats-bar-container">
      <div style={{ display: "flex", flexDirection: "row", gap: 32, minWidth: 240, flexWrap: "wrap", flex: 1.5 }} className="stats-items-col">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} direction="up">
            <div style={{
              borderRight: i === STATS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.15)",
              paddingRight: 40,
              paddingBottom: 8,
              textAlign: "left"
            }} className="stat-item-vertical">
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(48px, 6vw, 64px)", fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em", display: "flex", alignItems: "baseline", gap: 0 }}>
                {s.val}
                <span style={{ color: "#d9f08b", fontWeight: 500 }}>{s.suffix}</span>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 12, display: "block" }}>{s.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3} direction="up" style={{ flex: 1, minWidth: 280 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 500 }} className="stats-text-block">
          Once we receive your consult request we match you up with a trainer. This is to ensure that your unique goals, needs, and personalities align.
          <br /><br />
          <a
            href="#"
            style={{
              width: "180px",
              padding: "8px",
              borderRadius: 8,
              background: "#d9f08b",
              border: "none",
              color: "#1a2610",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s ease",
              marginBottom: 8,
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
            className="hover-opacity"
          >
            Contact us
          </a>

        </div>
      </FadeIn>
    </div>
  );
}
