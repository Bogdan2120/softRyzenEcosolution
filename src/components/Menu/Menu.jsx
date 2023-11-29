import Social from 'components/Social/Social';
import MenuItems from './MenuItem/MenuItem';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <MenuItems />

      <Social />
    </div>
  );
};

export default Menu;
