import ContactForm from 'components/ContactForm/ContactForm';
import ContactInfo from 'components/ContactInfo/ContactInfo';
import { Element } from 'react-scroll';
import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <Element name="Contact Us" className={styles.containerContacts}>
      <h2 className={styles.contactsTitle}>Contact us</h2>

      <div className={styles.contactsWraper}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Element>
  );
};

export default Contacts;
