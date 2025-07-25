import sections from "../Section.module.css";
import styles from "./Works.module.css";
import threeD_navi_pic from "@/assets/works/3dnavi.png";
import hanabi_pic from "@/assets/works/hanabi.png";
import { useNavigate } from "react-router-dom";

export const WorksSection = () => {
  const navigate = useNavigate();
  const works = [
    { title: "3Dナビ", image: threeD_navi_pic },
    { title: "花火大会オンライン", image: hanabi_pic },
  ];
  return (
    <section className={sections.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Works</h2>
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
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
        </div>
        <div
          className={styles.moreLink}
          onClick={() => navigate("/portfolio/works")}
        >
          その他製作物一覧はこちら
        </div>
      </div>
    </section>
  );
};
