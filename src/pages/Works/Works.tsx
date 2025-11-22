import BackGround from "../../component/BackGround/BackGround";
import Header from "../../component/header/Header";
import WorksDetail from "../../component/worksDetail/WorksDetail";
import styles from "./Works.module.css";

const Works = () => {
  return (
    <div className={styles.app}>
      <div className={styles.backGround}>
        <BackGround />
      </div>
      <Header />
      <main className={styles.mainContent}>
        <WorksDetail />
      </main>
    </div>
  );
};

export default Works;
