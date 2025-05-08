import "./index.css";
import discordBot_pic from "@/assets/blogs/discordBot.png";
import atcoder_pic from "@/assets/blogs/atcoder.png";

export const Section3 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Blogs</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6">
            <a href="https://zenn.dev/loootus/articles/3613f148f0e2be">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src={discordBot_pic}
                alt="DiscordBot"
              />
              <p className="text-gray-800 font-medium">
                怠惰な自分にサヨナラ! Deno
                DeployとDiscordenoで自分を監視するDiscord Botを作った
              </p>
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6">
            <a href="https://zenn.dev/loootus/articles/178286bd2a7fa6">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src={atcoder_pic}
                alt="AtCoder"
              />
              <p className="text-gray-800 font-medium">
                AtCoderをTypeScriptで解くためのテンプレートをすぐ用意できるVS
                Code拡張機能を作った
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
