import SvgSelector from 'Svg/SvgSelectors';

import styles from './menuItems.module.scss';

const MenuItems = () => {
  return (
    <div className={styles.MenuItemsContainer}>
      <div className={styles.btnContainer}>
        <button className={styles.btnClose} type="button">
          <SvgSelector id="close" style={styles.iconBtn} /> close
        </button>
      </div>

      <ul className={styles.menu}>
        <li className={styles.menuItems}>
          <a href="/#main" className={styles.menuLink}>
            Main
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </a>
        </li>
        <li className={styles.menuItems}>
          <a href="/#about" className={styles.menuLink}>
            About
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </a>
        </li>
        <li className={styles.menuItems}>
          <a href="/#cases" className={styles.menuLink}>
            Cases
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </a>
        </li>
        <li className={styles.menuItems}>
          <a href="/#faq" className={styles.menuLink}>
            FAQ
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </a>
        </li>
        <li className={styles.menuItems}>
          <a href="/#contact" className={styles.menuLink}>
            Contact Us
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
