import sections from "../Section.module.css";
import styles from "./Section1.module.css";

export const Section1 = () => {
  return (
    <section className={sections.section1}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2 className={styles.name}>れんれん</h2>
          <p className={styles.member}>東洋大学情報連携学部(INIAD)在学</p>
        </div>
        <div className={styles.description}>
          <p>
            普段はReactとTypeScriptを使ってフロントエンドのコードを書いています。
            <br />
            大学では、Python, HTML, CSS,
            JavaScriptの基礎を学習。「連携」を重視した大学の教育方針に基づき、チームでのwebサイト作成にも挑戦しました。
          </p>
        </div>
      </div>
    </section>
  );
};
