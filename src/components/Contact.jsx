import { FadeIn } from "./FadeIn";
import { styles } from "../styles";

export default function Contact() {
  return (
    <section style={styles.contactSection} className="contact-section">
      <FadeIn direction="left">
        <div style={styles.contactImgs} className="contact-imgs-collage">
          <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=400&fit=crop" alt="" style={styles.contactImg1} />
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop" alt="" style={styles.contactImg2} />
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=200&fit=crop" alt="" style={styles.contactImg3} />
          <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=200&fit=crop" alt="" style={styles.contactImg4} />
        </div>
      </FadeIn>
      <div style={styles.contactForm}>
        <FadeIn direction="right" delay={0.1}>
          <h2 style={styles.contactTitle}>Get in touch.</h2>
          <p style={styles.contactDesc}>
            Every day & Training sessions included with QR code. Let us align with your unique goals and needs.
          </p>
          <input placeholder="Name (required)" style={styles.input} />
          <input placeholder="Email (required)" type="email" style={styles.input} />
          <textarea placeholder="Message (required)" style={styles.textarea} />
          <button style={{ ...styles.btnPrimary, padding: "14px 40px", fontSize: 15 }} className="btn-primary">Send</button>
        </FadeIn>
      </div>
    </section>
  );
}
