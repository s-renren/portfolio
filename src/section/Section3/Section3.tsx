import "./index.css";
import discordBot_pic from "@/assets/blogs/discordBot.png";
import atcoder_pic from "@/assets/blogs/atcoder.png";

export const Section3 = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 md:p-12 w-full max-w-md mx-auto">
            <a
              href="https://zenn.dev/loootus/articles/3613f148f0e2be"
              target="_blank"
              rel="noopener noreferrer"
            >
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

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 md:p-12 w-full max-w-md mx-auto">
            <a
              href="https://zenn.dev/loootus/articles/178286bd2a7fa6"
              target="_blank"
              rel="noopener noreferrer"
            >
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
