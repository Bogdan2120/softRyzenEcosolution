import { useRef, useState } from 'react';
import { Element } from 'react-scroll';

import CasesNav from 'components/CasesElements/CasesNav/CasesNav';
import CasesPagination from 'components/CasesElements/CasesPagination/CasesPagination';
import CasesSlider from 'components/CasesElements/CasesSlider/CasesSlider';

import items from 'assets/data/sliderItems';

import styles from './cases.module.scss';

const Cases = () => {
  const reviewsSwiperRef = useRef(null);
  const [isSlideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = () => {
    if (reviewsSwiperRef && reviewsSwiperRef.current) {
      setSlideIndex(reviewsSwiperRef.current.swiper.realIndex + 1);
    }
  };

  const handleClickPrev = () => reviewsSwiperRef.current.swiper.slidePrev();
  const handleClickNext = () => reviewsSwiperRef.current.swiper.slideNext();

  return (
    <Element name="Cases" className={styles.containerCases}>
      <div className={styles.casesTopWraper}>
        <h2 className={styles.casesTitle}>Successful cases of our company</h2>
        <div className={styles.casesNavBar}>
          <CasesPagination count={isSlideIndex} all={items.length} />
          <CasesNav left={handleClickPrev} right={handleClickNext} />
        </div>
      </div>
      <div className={styles.casesSliderWraper}>
        <CasesSlider
          items={items}
          onSlideChange={handleSlideChange}
          refference={reviewsSwiperRef}
        />
      </div>
    </Element>
  );
};

export default Cases;
