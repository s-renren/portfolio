import sections from "../Section.module.css";
import styles from "./Section2.module.css";

export const Section2 = () => {
  return (
    <section className={sections.section}>
      <div>
        <h2 className={styles.sectionTitle}>Works</h2>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>草チェッカー</h3>
            <p>GitHubのcontribution数の管理をしてくれるDiscordBot</p>
            <img
              className={styles.image}
              src="src/assets/works/discordbot.png"
              alt="DiscordBot"
            />
          </div>

          <div className={styles.card}>
            <h3>3Dナビ</h3>
            <p>2024技育CAMPハッカソンvol.9最優秀賞</p>
            <img
              className={styles.image}
              src="src/assets/works/3dnavi.png"
              alt="3Dナビ"
            />
          </div>

          <div className={styles.card}>
            <h3>花火大会オンライン</h3>
            <p>2024技育CAMPハッカソンvol.14最優秀賞/2024技育博vol.5出展作品</p>
            <img
              className={styles.image}
              src="src/assets/works/hanabi.png"
              alt="花火大会オンライン"
            />
          </div>
        </div>
        <div className={styles.moreLink}>その他製作物一覧はこちら</div>
      </div>
    </section>
  );
};
