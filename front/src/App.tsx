import styles from "./App.module.css";
import Header from "./component/header/Header";
import { Section1 } from "./section/Section1/Section1";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <Section1 />
        <section className={styles.section}>Section 2</section>
        <section className={styles.section}>Section 3</section>
      </main>
    </div>
  );
}

export default App;
