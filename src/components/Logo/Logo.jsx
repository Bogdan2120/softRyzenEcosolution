import SvgSelector from 'Svg/SvgSelectors';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoFavicon}>
        <SvgSelector id="logoFavicon" />
      </div>
      <div className={styles.logoName}>
        <p className={styles.logoName__text}>ecosolution</p>
      </div>
      <div className={styles.logoInfo}>
        <p className={styles.logoInfo__text}>
          <span className={styles.logoInfo__textColor}>GREENERGY</span> FOR LIFE
        </p>
      </div>
    </div>
  );
};

export default Logo;
