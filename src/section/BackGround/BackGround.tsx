import Particles from "../../lib/graphics/Particles";
import styles from "../Section.module.css";

const BackGround = () => {
  return (
    <div className={styles.background}>
      <Particles
        particleColors={["#848484", "#5c4259"]}
        particleCount={200}
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
