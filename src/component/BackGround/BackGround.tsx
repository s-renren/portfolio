import Particles from "../../lib/graphics/Particles";
import styles from "../../section/Section.module.css";

const BackGround = () => {
  return (
    <div className={styles.background}>
      <Particles
        particleColors={["#fff"]}
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
