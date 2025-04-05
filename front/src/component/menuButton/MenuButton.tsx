import { MouseEventHandler } from "react";
import styles from "./MenuButton.module.css";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
};

const MenuButton = (props: Props) => {
  const { open, onClick } = props;
  const [line1Class, setLine1Class] = useState(styles.line1);
  const [line2Class, setLine2Class] = useState(styles.line2);
  const [line3Class, setLine3Class] = useState(styles.line3);
  const [disabled, setDisabled] = useState(false);

  const handleClick: MouseEventHandler = (event) => {
    if (!disabled) {
      onClick(event);
      setDisabled(true);
      setTimeout(() => setDisabled(false), 500);
    }
  };

  useEffect(() => {
    if (open) {
      setLine1Class(`${styles.line1} ${styles.line1Move}`);
      setLine2Class(`${styles.line2} ${styles.line2Disappear}`);
      setLine3Class(`${styles.line3} ${styles.line3Move}`);
    } else {
      setLine1Class(`${styles.line1} ${styles.line1Reverse}`);
      setLine2Class(`${styles.line2} ${styles.line2Appear}`);
      setLine3Class(`${styles.line3} ${styles.line3Reverse}`);
    }
  }, [open]);

  return (
    <div className={styles.buttonContainer}>
      <button
        type="button"
        aria-expanded={open}
        onClick={handleClick}
        className={styles.button}
        disabled={disabled}
      >
        <div className={line1Class}></div>
        <div className={line2Class}></div>
        <div className={line3Class}></div>
      </button>
    </div>
  );
};

export default MenuButton;
