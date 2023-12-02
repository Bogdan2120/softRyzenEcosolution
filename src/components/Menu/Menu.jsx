import Social from 'components/Social/Social';
import MenuItems from './MenuItem/MenuItem';
import SvgSelector from 'Svg/SvgSelectors';

import styles from './menu.module.scss';

const Menu = ({ close }) => {
  return (
    <div className={styles.menuContainer}>
      <div>
        <div className={styles.btnContainer}>
          <button className={styles.btnClose} type="button" onClick={close}>
            <SvgSelector id="close" style={styles.iconBtn} /> close
          </button>
        </div>

        <MenuItems />
      </div>
      <Social />
    </div>
  );
};

export default Menu;
