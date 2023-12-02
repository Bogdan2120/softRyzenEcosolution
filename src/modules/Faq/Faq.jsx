import { Element } from 'react-scroll';

import FaqElemaents from 'components/FaqElements/FaqElements';
import ButtonTouch from 'components/ButtonTouch/ButtonTouch';
import styles from './faq.module.scss';

import items from 'assets/data/faqItems';

const Faq = () => {
  return (
    <Element name="FAQ" className={styles.containerFaq}>
      <div className={styles.faqAccordionContainer}>
        <FaqElemaents items={items} />
      </div>
      <div className={styles.faqInfo}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqBtnWraper}>
          <p className={styles.faqBtnContainer__text}>
            Didn't find the answer to your question?
          </p>
          <ButtonTouch>Contact Us</ButtonTouch>
        </div>
      </div>
    </Element>
  );
};

export default Faq;
