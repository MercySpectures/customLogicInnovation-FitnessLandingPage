import FaqComponent from "../components/Faq";
import { FadeIn } from "../components/FadeIn";

import { styles } from "../styles";

export default function Faq() {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4e8" }}>
      <div style={{ paddingTop: "20px", background: "#f0f4e8" }}>
        <div style={{ ...styles.communitySection, paddingBottom: 0 }}>
          <FadeIn>
            <h2 style={styles.communityTitle}>Got<br /><em style={styles.communityItalic}>questions?</em></h2>
            <p style={styles.communityDesc}>
              Find answers to the most common questions about our facilities, membership plans, and fitness programs.
            </p>
          </FadeIn>
        </div>
      </div>
      <FaqComponent hideHeader={true} style={{ paddingTop: 0 }} />
    </div>
  );
}
