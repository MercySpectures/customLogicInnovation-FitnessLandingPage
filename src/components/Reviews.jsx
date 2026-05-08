import { FadeIn } from "./FadeIn";

const REVIEWS = [
  { name: "Clare Bamford", handle: "@staking", text: `"I started going to the gym but had no idea what i was doing."`, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  { name: "Jamie Kokot", handle: "@staking", text: `"I started going to the gym but had no idea what i was doing."`, img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop" },
  { name: "Laurie Payton", handle: "@staking", text: `"My brother I can't thank you enough even if you say it's all me."`, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { name: "Lindsey Bono", handle: "@staking", text: `"I started going to the gym but had no idea what i was doing."`, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "Keith Finley", handle: "@staking", text: `"My brother I can't thank you enough even if you say it's all me."`, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
];

export default function Reviews() {
  return (
    <section style={{ padding: "100px 0 100px 5%", textAlign: "center", background: "#d6dfc9" }}>
      <FadeIn>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 400, color: "#1a2610", marginBottom: 60, paddingRight: "5%", lineHeight: 1.1 }}>
          Over 200+ reviews<br />from our clients
        </h2>
      </FadeIn>
      
      {/* Scrollable Container */}
      <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 24, paddingRight: "5%", scrollbarWidth: "none" }} className="reviews-scroll">
        {REVIEWS.map((r, i) => (
          <FadeIn key={r.name + i} delay={i * 0.08} direction="up" style={{ minWidth: 260, flexShrink: 0, flex: 1 }}>
            <div style={{ background: "#c5d3b6", borderRadius: 12, padding: "32px 24px", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", minHeight: 220 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <img src={r.img} alt={r.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#1a2610", lineHeight: 1.2 }}>{r.name}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6a7a5a" }}>{r.handle}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#2a3a1a", lineHeight: 1.6, fontWeight: 400 }}>{r.text}</p>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#7a8a6a", textAlign: "right", marginTop: 24 }}>22.03.2021</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
