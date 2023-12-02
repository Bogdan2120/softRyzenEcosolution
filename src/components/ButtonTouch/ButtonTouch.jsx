import styles from './buttonTouch.module.scss';
import { Link } from 'react-scroll';

const ButtonTouch = ({ children }) => {
  return (
    <div className={styles.btnTuchWraper}>
      <Link
        to="Contact Us"
        smooth={true}
        duration={1200}
        href="#contact"
        className={styles.btnTuch}
      >
        {children}
      </Link>
    </div>
  );
};

export default ButtonTouch;
