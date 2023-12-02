import SvgSelector from 'Svg/SvgSelectors';
import Social from 'components/Social/Social';

import styles from './contactInfo.module.scss';

const ContactInfo = () => {
  return (
    <ul className={styles.contactsWraper}>
      <li className={styles.contactsItem}>
        <p className={styles.contactsItem__name}>Phone:</p>
        <div className={styles.contactsItem__bodyTel}>
          <a href="tel:+380981234567" className={styles.contactsItem__info}>
            <SvgSelector id="call" style={styles.contactsItem__svg} /> 38 (098)
            12 34 567
          </a>
          <a href="tel:+380931234567" className={styles.contactsItem__info}>
            <SvgSelector id="call" style={styles.contactsItem__svg} /> 38 (093)
            12 34 567
          </a>
        </div>
      </li>
      <li className={styles.contactsItem}>
        <p className={styles.contactsItem__name}>E-mail:</p>
        <a
          href="mailto:office@ecosolution.com"
          className={styles.contactsItem__info}
        >
          <SvgSelector id="mail" style={styles.contactsItem__svg} />{' '}
          office@ecosolution.com
        </a>
      </li>
      <li className={styles.contactsItem}>
        <p className={styles.contactsItem__name}>Address:</p>
        <p className={styles.contactsItem__info}>
          <SvgSelector id="address" style={styles.contactsItem__svg} /> 79005,
          Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
      </li>
      <li className={styles.contactsItem}>
        <p className={styles.contactsItem__name}>Social Networks:</p>
        <Social color={styles.contactsSocial} length="32" />
      </li>
    </ul>
  );
};
export default ContactInfo;
