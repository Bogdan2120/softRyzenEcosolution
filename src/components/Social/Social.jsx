import SvgSelector from 'Svg/SvgSelectors';

import styles from './social.module.scss';

const Social = () => {
  return (
    <ul className={styles.socialContainer}>
      <li className={styles.socialitem}>
        <SvgSelector id="facebook" />
      </li>
      <li className={styles.socialitem}>
        <SvgSelector id="instagram" />
      </li>
    </ul>
  );
};

export default Social;
