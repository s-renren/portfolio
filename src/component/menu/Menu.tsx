import styles from "./Menu.module.css";

interface MenuProps {
  onMenuClick?: () => void;
}

const Menu = ({ onMenuClick }: MenuProps) => {
  const scrollToSection = (sectionId: string) => {
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
