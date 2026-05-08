import { FadeIn } from "./FadeIn";
import { styles } from "../styles";

const PLANS = [
  {
    name: "Starter Plan", price: "₹999", period: "per user, per month", cta: "Contact us", dark: false,
    features: ["8 yoga classes a month", "2 fitness training sessions per month", "Access to online resources", "Monthly wellness newsletter"],
  },
  {
    name: "Basic Plan", price: "₹1999", period: "per user, per month", cta: "Contact us", dark: true,
    features: ["Unlimited yoga classes", "4 fitness training sessions per month", "1 personalized coaching session per month", "Access to online resources", "Monthly wellness newsletter"],
  },
  {
    name: "Premium Plan", price: "₹4999", period: "per user, per month", cta: "Contact us", dark: false,
    features: ["4 personalized coaching sessions per month", "Customized fitness & yoga plans", "Access to online resources", "Monthly wellness newsletter"],
  },
];

export default function CommunityPlans() {
  return (
    <section style={styles.communitySection}>
      <FadeIn>
        <h2 style={styles.communityTitle}>Community<br /><em style={styles.communityItalic}>sweat</em> classes</h2>
        <p style={styles.communityDesc}>
          If you&apos;re looking to supplement your current fitness routine with small group training or just want to join a few classes a month then take a look at our classes option below.
        </p>
      </FadeIn>
      <div style={styles.plansGrid} className="plans-grid">
        {PLANS.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.1} direction="up">
            <div
              style={{
                ...styles.planCard,
                ...(plan.dark ? styles.planCardDark : {}),
              }}
              className="plan-card"
            >
              <p style={{ ...styles.planName, ...(plan.dark ? styles.planNameDark : {}) }}>{plan.name}</p>
              <p style={{ ...styles.planPrice, ...(plan.dark ? styles.planPriceDark : {}) }}>{plan.price}</p>
              <p style={{ ...styles.planPeriod, ...(plan.dark ? { color: "rgba(255,255,255,0.45)" } : {}) }}>{plan.period}</p>
              <button style={{
                width: "100%", padding: "12px", borderRadius: 8,
                background: plan.dark ? "rgba(255,255,255,0.12)" : "transparent",
                border: plan.dark ? "none" : "1.5px solid #1a2610",
                color: plan.dark ? "#fff" : "#1a2610",
                fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer",
                transition: "all 0.25s ease", marginBottom: 8,
              }} className={plan.dark ? "" : "btn-outline"}>
                {plan.cta}
              </button>
              <div style={{ ...styles.planDivider, ...(plan.dark ? styles.planDividerDark : {}) }} />
              {plan.features.map(f => (
                <p key={f} style={{ ...styles.planFeature, ...(plan.dark ? styles.planFeatureDark : {}) }}>
                  <span style={{ color: plan.dark ? "#b5c994" : "#4a6741", fontSize: 16 }}>✓</span> {f}
                </p>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
