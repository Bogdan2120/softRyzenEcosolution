import SvgSelector from 'Svg/SvgSelectors';
import styles from './hero.module.scss';
import windTurbineCleanEnergyMobil from 'assets/images/wind-turbine-clean-energy-mobil.jpg';
import windTurbineCleanEnergyMobilx2 from 'assets/images/wind-turbine-clean-energy-mobil@x2.jpg';
import windTurbineCleanEnergyTablet from 'assets/images/wind-turbine-clean-energy-tabket.jpg';
import windTurbineCleanEnergyTabletx2 from 'assets/images/wind-turbine-clean-energy-tablet@x2.jpg';
import windTurbineCleanEnergyDesktop from 'assets/images/wind-turbine-clean-energy-desktop.jpg';
import windTurbineCleanEnergyDesktopx2 from 'assets/images/wind-turbine-clean-energy-desktop@x2.jpg';

const Hero = () => {
  return (
    <section className={styles.containerHero}>
      <h1 className={styles.heroTitle}>RENEWABLE ENERGY For any task</h1>
      <p className={styles.heroText}>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>

      <a href="#cases" className={styles.buttom}>
        Learn more
        <span className={styles.buttomBodySvg}>
          <SvgSelector id="arrow" style={styles.buttomSvg} />
        </span>
      </a>

      <div className={styles.contacts}>
        <p className={styles.contactsAddress}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <p className={styles.contactMmail}>ffice@ecosolution.com</p>

        <picture>
          <source
            srcset={`${windTurbineCleanEnergyDesktop} 1x, ${windTurbineCleanEnergyDesktopx2} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcset={`${windTurbineCleanEnergyTablet} 1x, ${windTurbineCleanEnergyTabletx2} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcset={`${windTurbineCleanEnergyMobil} 1x, ${windTurbineCleanEnergyMobilx2} 2x`}
            media="(max-width: 767px)"
          />

          <img
            src={windTurbineCleanEnergyMobil}
            alt="wind-turbine-clean-energy"
            className={styles.img}
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
