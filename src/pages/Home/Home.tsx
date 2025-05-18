import styles from "./Home.module.css";
import Header from "../../component/header/Header";
import { Copyright } from "../../section/Coppylight/Copyright";
import { Section1 } from "../../section/Section1/Section1";
import { Section2 } from "../../section/Section2/Section2";
import { Section3 } from "../../section/Section3/Section3";
import { Section4 } from "../../section/Section4/Section4";
import BackGround from "../../section/BackGround/BackGround";

const Home = () => {
  return (
    <div className={styles.app}>
      <BackGround />
      <Header />
      <main className={styles.mainContent}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Copyright />
      </main>
    </div>
  );
};

export default Home;
