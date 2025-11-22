import othello_pic from "@/assets/worksDetail/othelloD.png";
import minesweeper_pic from "@/assets/worksDetail/minesweeperD.png";
import discordBot_pic from "@/assets/works/discordbot.png";
import threeD_navi_pic from "@/assets/works/3dnavi.png";
import hanabi_pic from "@/assets/works/hanabi.png";
import styles from "./WorksPopup.module.css";

type Work = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const works: Work[] = [
  {
    id: 1,
    title: "オセロ",
    image: othello_pic,
    description: "モダンなオセロアプリ。自分が初めて作った作品。",
  },
  {
    id: 2,
    title: "マインスイーパー",
    image: minesweeper_pic,
    description: "モダンなマインスイーパーアプリ。難易度などを設定可能。",
  },
  {
    id: 3,
    title: "草チェッカー",
    image: discordBot_pic,
    description:
      "Discordのbot。草の数を取得し、生えていなかったらメッセージを送信してくれるようなアプリ。",
  },
  {
    id: 4,
    title: "3Dナビ",
    image: threeD_navi_pic,
    description:
      "2024技育キャンプハッカソン vol.9最優秀賞受賞。旅先へのルートを3Dで見れるアプリ。",
  },
  {
    id: 5,
    title: "花火大会オンライン",
    image: hanabi_pic,
    description:
      "2024技育キャンプハッカソン vol.14最優秀賞受賞。花火をオンラインで友達と楽しむことを目的としたアプリ。",
  },
];

type Props = {
  id: number;
};

const WorksPopup = ({ id }: Props) => {
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="text-center text-red-500 font-semibold">
        該当する作品が見つかりませんでした。
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.txtContainer}>
        <h2 className="text-2xl font-bold mb-2">{work.title}</h2>
        <p className="text-gray-700 mt-8">{work.description}</p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={work.image} alt={work.title} />
      </div>
    </div>
  );
};

export default WorksPopup;
