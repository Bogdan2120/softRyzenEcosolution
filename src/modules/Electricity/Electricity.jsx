import { useState, useEffect } from 'react';

import styles from './electricity.module.scss';

const Electricity = () => {
  const [seconds, setSeconds] = useState(1134147814);

  const formattedNumber = seconds
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <section className={styles.containerElectricity}>
      <h2 className={styles.electricityTitle}>
        Electricity we produced <br /> for all time
      </h2>
      <p className={styles.electricityNumder}>
        {formattedNumber}
        <span className={styles.electricityNumder__item}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
