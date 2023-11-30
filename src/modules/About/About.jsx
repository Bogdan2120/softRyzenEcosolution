import SvgSelector from 'Svg/SvgSelectors';
import windFarmsFieldsTablet from 'assets/images/wind-farms-fields-tablet.jpg';
import windFarmsFieldsTabletx2 from 'assets/images/wind-farms-fields-tablet@x2.jpg';
import windFarmsFieldsDesktop from 'assets/images/wind-farms-fields-desktop.jpg';
import windFarmsFieldsDesktopx2 from 'assets/images/wind-farms-fields-desktop@x2.jpg';

import manWorkerFirldBySolarPanelsTablet from 'assets/images/man-worker-firld-by-solar-panels-tablet.jpg';
import manWorkerFirldBySolarPanelsTabletx2 from 'assets/images/man-worker-firld-by-solar-panels-tablet@x2.jpg';
import manWorkerFirldBySolarPanelsDesktop from 'assets/images/man-worker-firld-by-solar-panels-desktop.jpg';
import manWorkerFirldBySolarPanelsDesktopx2 from 'assets/images/man-worker-firld-by-solar-panels-desktop@x2.jpg';

import styles from './about.module.scss';

const About = () => {
  return (
    <section className={styles.contsinerAbout}>
      <h2 className={styles.titleAbout}>About</h2>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutGrid__itemText}>
          <ul className={styles.textGrid}>
            <li className={styles.textGrid__item}>
              <div className={styles.textGrid__titleBody}>
                <SvgSelector id="openness" style={styles.textGrid__svg} />
                <h3 className={styles.textGrid__title}>Openness</h3>
              </div>
              <p className={styles.textGrid__text}>
                to the world, people, new ideas and projects
              </p>
            </li>
            <li className={styles.textGrid__item}>
              <div className={styles.textGrid__titleBody}>
                <SvgSelector id="responsibility" style={styles.textGrid__svg} />
                <h3 className={styles.textGrid__title}>Responsibility</h3>
              </div>
              <p className={styles.textGrid__text}>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.aboutGrid__itemImg}>
          <picture>
            <source
              srcset={`${windFarmsFieldsDesktop} 1x, ${windFarmsFieldsDesktopx2} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcset={`${windFarmsFieldsTablet} 1x, ${windFarmsFieldsTabletx2} 2x`}
              media="(min-width: 768px)"
            />

            <img
              src="windFarmsFieldsTablet"
              alt="wind-farms-fields"
              className={styles.aboutGrid__img}
            />
          </picture>
        </div>

        <div className={styles.aboutGrid__itemImg}>
          <picture>
            <source
              srcset={`${manWorkerFirldBySolarPanelsDesktop} 1x, ${manWorkerFirldBySolarPanelsDesktopx2} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcset={`${manWorkerFirldBySolarPanelsTablet} 1x, ${manWorkerFirldBySolarPanelsTabletx2} 2x`}
              media="(min-width: 768px)"
            />

            <img
              src="windFarmsFieldsTablet"
              alt="wind-farms-fields"
              className={styles.aboutGrid__img}
            />
          </picture>
        </div>

        <div className={styles.aboutGrid__itemText}>
          <ul className={styles.textGrid}>
            <li className={styles.textGrid__item}>
              <div className={styles.textGrid__titleBody}>
                <SvgSelector id="innovation" style={styles.textGrid__svg} />
                <h3 className={styles.textGrid__title}>Innovation</h3>
              </div>
              <p className={styles.textGrid__text}>
                we use the latest technology to implement non-standard solutions
              </p>
            </li>
            <li className={styles.textGrid__item}>
              <div className={styles.textGrid__titleBody}>
                <SvgSelector id="quality" style={styles.textGrid__svg} />
                <h3 className={styles.textGrid__title}>Quality</h3>
              </div>
              <p className={styles.textGrid__text}>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
