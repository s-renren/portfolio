import { useState } from "react";
import MenuButton from "../menuButton/MenuButton";
import styles from "./Header.module.css";
import Menu from "../menu/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span
          className={styles.appName}
          onClick={() => navigate("/portfolio/")}
        >
          Portfolio
        </span>
        <MenuButton open={open} onClick={toggleFunction} />
      </div>
      <div
        className={`${styles.isOpenCover} ${open ? styles.showCover : ""}`}
        onClick={toggleFunction}
      />
      <div
        className={`${styles.menu} ${
          open ? styles.openMenu : styles.closeMenu
        }`}
      >
        <Menu onMenuClick={toggleFunction} />
      </div>
    </div>
  );
};

export default Header;
