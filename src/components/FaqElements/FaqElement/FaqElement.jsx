import SvgSelector from 'Svg/SvgSelectors';

import styles from './faqElement.module.scss';

const FaqElemaent = ({ handleClick, item, isId }) => {
  return (
    <div className={styles.accordionElementBody}>
      <div className={styles.accordionBtnWrap}>
        <button
          className={styles.accordionBtn}
          onClick={() => {
            handleClick(item.id);
          }}
          type="button"
        >
          <SvgSelector id={isId === item.id ? 'minus' : 'plus'} />
        </button>
        <h3
          className={styles.accordionTitle}
          onClick={() => {
            handleClick(item.id);
          }}
        >
          {item.question}
        </h3>
      </div>
      <div
        className={`${styles.accordionMovingBlock} ${
          isId === item.id ? styles.expanded : ''
        }`}
      >
        <p className={styles.accordionMovingText}>{item.answer}</p>
      </div>
    </div>
  );
};
export default FaqElemaent;
