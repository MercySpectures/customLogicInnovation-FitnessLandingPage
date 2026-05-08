import { FadeIn } from "../components/FadeIn";
import { styles } from "../styles";
import Team from "../components/Team";

export default function Trainers() {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4e8" }}>
      <div style={{ paddingTop: "20px" }}>
        <div style={{ ...styles.communitySection, paddingBottom: 0 }}>
          <FadeIn>
            <h2 style={styles.communityTitle}>Elite<br /><em style={styles.communityItalic}>coaches</em></h2>
            <p style={styles.communityDesc}>
              Work with industry-leading professionals dedicated to helping you achieve your ultimate fitness and wellness goals.
            </p>
          </FadeIn>
        </div>
      </div>
      <Team hideHeader={true} style={{ paddingTop: 0 }} />
    </div>
  );
}
