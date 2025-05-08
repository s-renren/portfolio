import { useState } from "react";
import MenuButton from "../menuButton/MenuButton";
import styles from "./Header.module.css";
import Menu from "../menu/Menu";
import githubIcon from "@/assets/icon/github-mark.svg";
import xIcon from "@/assets/icon/x_logo_black.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span className={styles.appName}>Portfolio</span>
        <div className={styles.headerModules}>
          <div className={styles.iconBox}>
            <a href="https://github.com/s-renren">
              <img
                src={githubIcon}
                alt="GitHub icon"
                className={styles.icon}
              ></img>
            </a>
          </div>
          <div className={styles.iconBox}>
            <a href="https://x.com/s_renren_">
              <img src={xIcon} alt="X icon" className={styles.icon}></img>
            </a>
          </div>
        </div>
        <MenuButton open={open} onClick={toggleFunction} />
      </div>
      <div
        className={`${styles.menu} ${
          open ? styles.openMenu : styles.closeMenu
        }`}
      >
        <Menu />
      </div>
    </div>
  );
};

export default Header;
