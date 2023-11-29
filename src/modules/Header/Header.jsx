import Logo from 'components/Logo/Logo';
// import Modal from 'modules/Modal/Modal';
// import Menu from 'components/Menu/Menu';
import SvgSelector from 'Svg/SvgSelectors';

import styles from './header.module.scss';

const Header = () => {
  return (
    <section className={styles.containerHeader}>
      <Logo />
      <div className={styles.burgerMenuContainer}>
        <button className={styles.burgerMenuBtn}>
          <SvgSelector id="burger-menu" style={styles.burburgerMenuBtn__icon} />
        </button>
      </div>
      {/* <Modal>
        <Menu />
      </Modal> */}
    </section>
  );
};

export default Header;
