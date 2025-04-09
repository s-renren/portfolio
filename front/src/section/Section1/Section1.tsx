import sections from "../Section.module.css";

export const Section1 = () => {
  return (
    <section className={sections.section}>
      <div>
        <h2>自己紹介</h2>
        <p>れんれん</p>
        <p>東洋大学情報連携学部(INIAD)所属</p>
        <p>
          普段はReactとTypeScriptを使ってフロントエンドのコードを書いています。
        </p>
        <p>
          大学では、Python, HTML, CSS,
          JavaScriptの基礎を学習。「連携」を重視した大学の教育方針に基づき、チームでのwebサイト作成にも挑戦。
        </p>
      </div>
    </section>
  );
};
