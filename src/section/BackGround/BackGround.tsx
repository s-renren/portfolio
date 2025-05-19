import Particles from "../../lib/graphics/Particles";
import styles from "../Section.module.css";

const BackGround = () => {
  return (
    <div className={styles.background}>
      <Particles
        particleColors={["#000", "#000"]}
        particleCount={350}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default BackGround;
