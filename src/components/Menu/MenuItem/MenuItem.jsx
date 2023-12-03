import SvgSelector from 'Svg/SvgSelectors';
import { Link } from 'react-scroll';

import styles from './menuItems.module.scss';

const MenuItems = () => {
  return (
    <div className={styles.MenuItemsContainer}>
      <ul className={styles.menu}>
        <li className={styles.menuItems}>
          <Link
            activeClass="active"
            to="Main"
            smooth={true}
            duration={1200}
            href="#main"
            className={styles.menuLink}
          >
            Main
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link
            activeClass="active"
            to="About"
            smooth={true}
            duration={1200}
            href="#about"
            className={styles.menuLink}
          >
            About
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link
            activeStyle={{ color: '#ff6f00}' }}
            to="Cases"
            smooth={true}
            duration={1200}
            href="#cases"
            className={styles.menuLink}
          >
            Cases
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link
            activeClass="active"
            to="FAQ"
            smooth={true}
            duration={1200}
            href="#faq"
            className={styles.menuLink}
          >
            FAQ
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link
            activeClass="active"
            to="Contact Us"
            smooth={true}
            duration={1200}
            href="#contact"
            className={styles.menuLink}
          >
            Contact Us
            <SvgSelector id="arrow-right" style={styles.menuLink__svg} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
