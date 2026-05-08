import { FadeIn } from "../components/FadeIn";

import { styles } from "../styles";

const BLOG_POSTS = [
  {
    title: "10 Essential Core Exercises for Beginners",
    excerpt: "Building a strong core is the foundation of a healthy body. Start with these simple yet effective movements.",
    category: "Training",
    date: "Oct 12, 2025",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
  },
  {
    title: "The Ultimate Guide to Pre-Workout Nutrition",
    excerpt: "What you eat before you hit the gym can drastically alter your performance. Here's what you need to know.",
    category: "Nutrition",
    date: "Oct 08, 2025",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
  },
  {
    title: "Why Rest Days Are Just As Important As Workouts",
    excerpt: "Overtraining is a real threat to your progress. Learn how to optimize your recovery time for better results.",
    category: "Recovery",
    date: "Sep 29, 2025",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
  },
  {
    title: "How to Stay Motivated During Winter Months",
    excerpt: "When the temperature drops, so does our desire to hit the gym. Discover 5 strategies to keep your fire burning.",
    category: "Mindset",
    date: "Sep 22, 2025",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&h=400&fit=crop"
  },
  {
    title: "Mastering the Perfect Squat Form",
    excerpt: "The squat is the king of all exercises, but poor form can lead to injury. Follow this step-by-step breakdown.",
    category: "Training",
    date: "Sep 15, 2025",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
  },
  {
    title: "Protein Powders Explained: Which is Right for You?",
    excerpt: "Whey, casein, soy, pea... the options are endless. Let's break down the best protein supplements for your goals.",
    category: "Nutrition",
    date: "Sep 05, 2025",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&h=400&fit=crop"
  }
];

export default function Blog() {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4e8" }}>

      <div style={{ paddingTop: "20px", background: "#f0f4e8" }}>
        <div style={{ ...styles.communitySection, paddingBottom: 0 }}>
          <FadeIn>
            <h2 style={styles.communityTitle}>Latest<br /><em style={styles.communityItalic}>articles</em></h2>
            <p style={styles.communityDesc}>
              Insights, tips, and guides to help you achieve your fitness goals and live a healthier, more balanced life.
            </p>
          </FadeIn>
        </div>
      </div>

      <div style={{ padding: "0 5% 60px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 40 }} className="blog-grid">
        {BLOG_POSTS.map((post, i) => (
          <FadeIn key={post.title} delay={i * 0.1} direction="up">
            <div style={{ background: "#f4f7f0", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }} className="blog-card">
              <div style={{ height: 220, overflow: "hidden" }}>
                <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="blog-img" />
              </div>
              <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ background: "#c5d9b0", color: "#1a2610", padding: "6px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{post.category}</span>
                  <span style={{ fontSize: 13, color: "#6a7a5a", fontFamily: "'DM Sans', sans-serif" }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1a2610", marginBottom: 16, lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#4a5a3a", lineHeight: 1.6, marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                <div style={{ color: "#4a6741", fontWeight: 600, fontSize: 14, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                  Read article &rarr;
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
