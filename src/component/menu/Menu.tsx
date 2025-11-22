import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";
import { useEffect } from "react";

interface MenuProps {
  onMenuClick?: () => void;
}

const Menu = ({ onMenuClick }: MenuProps) => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    // メインページじゃなかったらそこに飛ばす
    if(window.location.pathname !== '/portfolio/') {
      navigate('/portfolio/?scrollTo=' + sectionId);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (onMenuClick) {
      onMenuClick();
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
  }, [])

  return (
    <div className={styles.menu}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection("about-me")}
            >
              About Me
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection("works")}
            >
              Works
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection("blogs")}
            >
              Blogs
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
