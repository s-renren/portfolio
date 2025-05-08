import styles from "./Menu.module.css";
import gitHubIcon from "@/assets/icon/GitHub_Logo.png";
import xIcon from "@/assets/icon/x_logo_name.png";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.iconBox}>
        <a href="https://github.com/s-renren">
          <img
            src={gitHubIcon}
            alt="GitHub icon"
            className={styles.gitHubIcon}
          ></img>
        </a>
      </div>
      <div className={styles.iconBox}>
        <a href="https://x.com/s_renren_">
          <img src={xIcon} alt="X icon" className={styles.xIcon}></img>
        </a>
      </div>
    </div>
  );
};

export default Menu;
