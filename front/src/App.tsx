import styles from "./App.module.css";
import Header from "./component/header/Header";
import { Section1 } from "./section/Section1/Section1";
import { Section2 } from "./section/Section2/Section2";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <Section1 />
        <Section2 />

        <section className={styles.section}>Section 3</section>
      </main>
    </div>
  );
}

export default App;
