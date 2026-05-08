import { FadeIn } from "./FadeIn";
import { styles } from "../styles";
import { Activity, Dumbbell, Sparkles } from "lucide-react";

const SERVICES = [
  { icon: <Activity size={32} />, title: "Yoga Classes", desc: "Classes for all levels, from beginners to advanced. Strengthen and tone your body, Vinyasa and Yin Yoga." },
  { icon: <Dumbbell size={32} />, title: "Fitness Training", desc: "Personalized training program tailored to your fitness goals. Focus on strength and flexibility." },
  { icon: <Sparkles size={32} />, title: "Wellness Laps", desc: "Exclusive workshops on mindfulness, stress relief and holistic wellness. Suitable for all experience levels." },
];

export default function Services() {
  return (
    <section style={styles.section}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
        <FadeIn direction="left">
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.sectionSub}>
            Whether you&apos;re a beginner or an advanced practitioner, our offerings are designed to inspire and support you on your wellness journey.
          </p>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <button style={{ ...styles.btnOutline, marginTop: 8 }} className="btn-outline">Explore the services</button>
        </FadeIn>
      </div>
      <div style={styles.servicesGrid} className="services-grid">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1} direction="up">
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>{s.icon}</div>
              <h3 style={styles.serviceTitle}>{s.title}</h3>
              <p style={styles.serviceDesc}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
