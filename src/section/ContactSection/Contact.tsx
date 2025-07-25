import sections from "../Section.module.css";
import styles from "./Contact.module.css";
import gitHubIcon from "@/assets/contact/github.svg";
import xIcon from "@/assets/contact/x.png";
import zennIcon from "@/assets/contact/zenn.png";

export const ContactSection = () => {
  return (
    <section id="contact" className={sections.section}>
      <div>
        <div className={styles.contact}>Contact</div>
        <div className={styles.container}>
          <div className={styles.contactIcons}>
            <a href="https://github.com/s-renren">
              <img src={gitHubIcon} alt="GitHub Icon" />
            </a>
            <a href="https://x.com/s_renren_">
              <img src={xIcon} alt="X Icon" />
            </a>
            <a href="https://zenn.dev/loootus">
              <img src={zennIcon} alt="Zenn Icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
