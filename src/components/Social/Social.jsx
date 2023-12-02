import SvgSelector from 'Svg/SvgSelectors';

import styles from './social.module.scss';

const Social = ({ color, length }) => {
  return (
    <ul
      className={styles.socialContainer}
      style={length === undefined ? {} : { gap: Number(length) }}
    >
      <li className={styles.socialItem}>
        <a href="https://www.facebook.com/" className={styles.socialILink}>
          <SvgSelector id="facebook" style={color === '' ? '' : color} />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a href="https://www.instagram.com/" className={styles.socialILink}>
          <SvgSelector id="instagram" style={color === '' ? '' : color} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
