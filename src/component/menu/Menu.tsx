import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.iconBox}>
        <a href="https://github.com/s-renren">
          <img
            src="src/assets/icon/GitHub_Logo.png"
            alt="GitHub icon"
            className={styles.gitHubIcon}
          ></img>
        </a>
      </div>
      <div className={styles.iconBox}>
        <a href="https://x.com/s_renren_">
          <img
            src="src/assets/icon/x_logo_name.png"
            alt="X icon"
            className={styles.xIcon}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Menu;
