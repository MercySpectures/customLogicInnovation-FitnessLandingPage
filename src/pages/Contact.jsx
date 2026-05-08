import ContactComponent from "../components/Contact";
import { FadeIn } from "../components/FadeIn";
import { styles } from "../styles";

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4e8" }}>
      <div style={{ paddingTop: "20px", background: "#f0f4e8" }}>
        <div style={{ ...styles.communitySection, paddingBottom: 0 }}>
          <FadeIn>
            <h2 style={styles.communityTitle}>Contact<br /><em style={styles.communityItalic}>us</em></h2>
            <p style={styles.communityDesc}>
              We're here to help you on your fitness journey. Reach out with any questions, comments, or feedback.
            </p>
          </FadeIn>
        </div>
      </div>
      <ContactComponent hideTitle={true} style={{ paddingTop: 60 }} />
    </div>
  );
}
