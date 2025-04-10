import sections from "../Section.module.css";

export const Section2 = () => {
  return (
    <section className={sections.section}>
      <div>
        <h2>Works</h2>

        <div>
          <h3>草チェッカー</h3>
          <p>GitHubのcontribution数の管理をしてくれるDiscordBot</p>
          <img src="src/assets/works/discordbot.png" alt="DiscordBot"></img>
        </div>

        <div>
          <h2>3Dナビ</h2>
          <p>2024技育CAMPハッカソンvol.9最優秀賞</p>
          <img src="src/assets/works/3dnavi.png" alt="3Dナビ"></img>
        </div>

        <div>
          <h3>花火大会オンライン</h3>
          <p>2024技育CAMPハッカソンvol.14最優秀賞/2024技育博vol.5出展作品</p>
          <img src="src/assets/works/hanabi.png" alt="花火大会オンライン"></img>
        </div>
        <div>その他製作物一覧はこちら</div>
      </div>
    </section>
  );
};
