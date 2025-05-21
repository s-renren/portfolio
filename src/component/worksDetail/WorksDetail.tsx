import othello_pic from "@/assets/worksDetail/othelloD.png";
import minesweeper_pic from "@/assets/worksDetail/minesweeperD.png";
import discordBot_pic from "@/assets/works/discordbot.png";
import threeD_navi_pic from "@/assets/works/3dnavi.png";
import hanabi_pic from "@/assets/works/hanabi.png";
import { useState } from "react";
import styles from "./WorksDetail.module.css";
import { useNavigate } from "react-router-dom";
import WorksPopup from "../worksPopup/WorksPopup";

const works = [
  { id: 1, title: "オセロ", image: othello_pic },
  { id: 2, title: "マインスイーパー", image: minesweeper_pic },
  { id: 3, title: "草チェッカー", image: discordBot_pic },
  { id: 4, title: "3Dナビ", image: threeD_navi_pic },
  { id: 5, title: "花火大会オンライン", image: hanabi_pic },
];

const WorksDetail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cardId, setCardId] = useState(0);
  const handleClickCard = (id: number) => {
    setIsClicked(true);
    setCardId(id);
  };
  const handleClickBackButton = () => {
    setIsClicked(false);
  };
  const navigate = useNavigate();

  return (
    <div
      className={isClicked ? styles.popupContainer : styles.defaultContainer}
    >
      <div className="px-6 py-8 z-50">
        <h1 className="text-3xl font-bold mb-6">Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-6"
              onClick={() => handleClickCard(work.id)}
            >
              <img
                src={work.image}
                alt={work.title}
                className="max-w-auto mx-auto h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{work.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className={isClicked ? styles.clicked : styles.default}>
            <WorksPopup id={cardId} />
          <div className={styles.backButton} onClick={handleClickBackButton}>
            <div className={styles.backButtonCross1}></div>
            <div className={styles.backButtonCross2}></div>
          </div>
        </div>
      </div>
      <div className={styles.moreLink} onClick={() => navigate("/portfolio/")}>
        ホームに戻る
      </div>
    </div>
  );
};

export default WorksDetail;
