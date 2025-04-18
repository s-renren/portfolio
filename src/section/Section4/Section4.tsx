import sections from "../Section.module.css";
import styles from "./Section4.module.css";

export const Section4 = () => {
  return (
    <section className={sections.section}>
      <div>
        <div className={styles.container}>
          <div className={styles.contactIcons}>
            <a href="https://github.com/s-renren">
              <img src="src/assets/contact/github.svg" alt="GitHub Icon" />
            </a>
            <a href="https://x.com/s_renren_">
              <img src="src/assets/contact/x.png" alt="X Icon" />
            </a>
            <a href="https://zenn.dev/loootus">
              <img src="src/assets/contact/zenn.png" alt="Zenn Icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
