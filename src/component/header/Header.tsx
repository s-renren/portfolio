import { useState } from "react";
import MenuButton from "../menuButton/MenuButton";
import styles from "./Header.module.css";
import Menu from "../menu/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((s) => !s);
  };
  const closeMenu = () => {
    setOpen(false);
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
        <MenuButton open={open} onClick={handleToggle} />
      </div>
      <div
        className={`${styles.isOpenCover} ${open ? styles.showCover : ""}`}
        onClick={closeMenu}
      />
      <div
        className={`${styles.menu} ${
          open ? styles.openMenu : styles.closeMenu
        }`}
      >
        <Menu onMenuClick={closeMenu} />
      </div>
    </div>
  );
};

export default Header;
