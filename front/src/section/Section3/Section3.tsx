import sections from "../Section.module.css";

export const Section3 = () => {
  return (
    <section className={sections.section}>
      <div>
        <h2>Blogs</h2>
        <div>
          <img src="src/assets/blogs/discordBot.png" alt="DiscordBot"></img>
          <p>
            怠惰な自分にサヨナラ！Deno DeployとDiscordenoで自分を監視するDiscord
            Botを作った
          </p>
        </div>

        <div>
          <img src="src/assets/blogs/atcoder.png" alt="AtCoder"></img>
          <p>
            AtCoderをTypeScriptで解くためのテンプレートをすぐ用意できるVS
            Code拡張機能を作った
          </p>
        </div>
      </div>
    </section>
  );
};
