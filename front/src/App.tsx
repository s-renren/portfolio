import styles from "./App.module.css";
import Header from "./component/header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.section}>Section 1</section>
        <section className={styles.section}>Section 2</section>
        <section className={styles.section}>Section 3</section>
      </main>
    </div>
  );
}

export default App;
