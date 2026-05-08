import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { styles } from "../styles";

const FAQS = [
  "What types of yoga classes do you offer?",
  "Do I need any prior experience to join your fitness programs?",
  "How do I book a personalized coaching session?",
  "What should I bring to a yoga class?",
  "Are your nutritional plans tailored to individual needs?",
  "How often are wellness workshops held?",
];

export default function Faq({ hideHeader, style }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section style={{ ...styles.faqSection, ...style }}>
      {!hideHeader && (
        <FadeIn>
          <h2 style={styles.faqTitle}>Frequently<br /><em style={styles.faqItalic}>asked</em> questions</h2>
        </FadeIn>
      )}
      <div style={{ marginTop: 40 }}>
        {FAQS.map((q, i) => (
          <FadeIn key={q} delay={i * 0.06}>
            <div
              style={styles.faqItem}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span style={styles.faqQ}>{q}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 20, color: "#4a6741", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.25s ease" }}>+</span>
            </div>
            {openFaq === i && (
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#5a6a4a", padding: "16px 0 20px", lineHeight: 1.7 }}>
                We offer a wide variety of classes tailored to all experience levels. Our expert trainers will guide you every step of the way to ensure you achieve your wellness goals.
              </div>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
