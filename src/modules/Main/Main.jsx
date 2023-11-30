import styles from './main.module.scss';

const Main = () => {
  return (
    <section className={styles.contsinerMain}>
      <h2 className={styles.mainTitle}>Main values of our company</h2>

      <p className={styles.mainText}>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </p>
    </section>
  );
};

export default Main;
