import styles from "./Home.module.css";
import Header from "../../component/header/Header";
import { Copyright } from "../../section/Coppylight/Copyright";
import { AboutMeSection } from "../../section/AboutMeSection/AboutMe";
import BackGround from "../../component/BackGround/BackGround";
import { WorksSection } from "../../section/WorksSection/Works";
import { BlogsSection } from "../../section/BlogsSection/Blogs";
import { ContactSection } from "../../section/ContactSection/Contact";
import { MySkillsSection } from "../../section/MySkillsSection/MySkillsSection";

const Home = () => {
  return (
    <div className={styles.app}>
      <div className={styles.backGround}>
        <BackGround />
      </div>
      <Header />
      <main className={styles.mainContent}>
        <AboutMeSection />
        <WorksSection />
        <MySkillsSection />
        <BlogsSection />
        <ContactSection />
        <Copyright />
      </main>
    </div>
  );
};

export default Home;
