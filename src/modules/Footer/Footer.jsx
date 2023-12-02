import { animateScroll as scroll } from 'react-scroll';

import Logo from 'components/Logo/Logo';
import Social from 'components/Social/Social';
import SvgSelector from 'Svg/SvgSelectors';

import styles from './footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className={styles.containerFooter}>
      <div className={styles.footerTopWraper}>
        <Logo />
        <div className={styles.footerSocialBody}>
          <Social color={styles.footerSocial} length="8" />
        </div>
        <button className={styles.btnUp} type="button" onClick={scrollToTop}>
          <SvgSelector id="arrow-up" style={styles.BtnUp__svg} />
        </button>
      </div>
      <ul className={styles.footerBottomWraper}>
        <li className={styles.footerBottom__item}>
          <p className={styles.footerAddress}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
        </li>
        <li className={styles.footerBottom__item}>
          <a href="mailto:office@ecosolution.com" className={styles.footerMail}>
            office@ecosolution.com
          </a>
        </li>
        <li className={styles.footerBottom__item}>
          <p className={styles.footerAddress}>ecosolution © {year}</p>
        </li>
      </ul>
    </section>
  );
};
export default Footer;
