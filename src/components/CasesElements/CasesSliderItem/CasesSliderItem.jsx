import styles from './casesSliderItem.module.scss';
import SvgSelector from 'Svg/SvgSelectors';

const CasesSliderItems = ({ item }) => {
  return (
    <div className={styles.sliderItemContainer}>
      <div className={styles.sliderItemContainer__imgBody}>
        <img
          className={styles.sliderItemContainer__img}
          alt={item.text}
          srcSet={`${item.img.d_1x} 1x, ${item.img.d_2x} 2x, ${item.img.d_4x} 4x`}
          src={item.img.d_1x}
        />
      </div>
      <div className={styles.sliderItemContainer__infoWraper}>
        <div className={styles.sliderItemContainer__titleBody}>
          <h3 className={styles.sliderItemContainer__title}>{item.title}</h3>
          <button
            className={styles.buttonWraper}
            onClick={() => console.log('Slide button click!')}
          >
            <SvgSelector
              style={styles.buttonWraper__svg}
              id="arrowSliderContent"
            />
          </button>
        </div>
        <div className={styles.sliderItemContainer__textBody}>
          <p className={styles.sliderItemContainer__text}>{item.text}</p>
          <p className={styles.sliderItemContainer__text}>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesSliderItems;
