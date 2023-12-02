import SvgSelector from 'Svg/SvgSelectors';
import styles from './casesNav.module.scss';

const CasesNav = ({ left, right }) => {
  return (
    <div className={styles.buttonWrap}>
      <button onClick={left} className={styles.buttonWrap_r}>
        <SvgSelector styles={styles.buttonWrap_svg} id="sliderArrowLeft" />
      </button>
      <button onClick={right}>
        <SvgSelector styles={styles.buttonWrap_svg} id="sliderArrowRight" />
      </button>
    </div>
  );
};

export default CasesNav;

//sliderArrowLeft
//className={styles.buttonWrap_r}
