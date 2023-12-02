import { useState } from 'react';

import Logo from 'components/Logo/Logo';
import Modal from 'modules/Modal/Modal';
import Menu from 'components/Menu/Menu';
import ButtonTouch from 'components/ButtonTouch/ButtonTouch';
import SvgSelector from 'Svg/SvgSelectors';

import styles from './header.module.scss';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const closeModal = () => {
    setActiveMenu(false);
  };
  return (
    <section className={styles.containerHeader}>
      <Logo />
      <div className={styles.headerBtnContainer}>
        <button
          className={styles.burgerMenuBtn}
          type="buttom"
          onClick={() => setActiveMenu(true)}
        >
          <SvgSelector id="burger-menu" style={styles.burburgerMenuBtn__icon} />
        </button>
        <div className={styles.btnTouch}>
          <ButtonTouch>Get in touch</ButtonTouch>
        </div>
      </div>
      {activeMenu && (
        <Modal close={closeModal}>
          <Menu close={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default Header;
