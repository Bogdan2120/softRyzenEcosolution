import { nanoid } from 'nanoid';
import windTurbines from '../images/slider/beautiful-view-wind-turbines-grass.jpg';
import windTurbinesx2 from '../images/slider/beautiful-view-wind-turbines-grass@x2.jpg';
import solarPanel from '../images/slider/solar-panel.jpg';
import solarPanelx2 from '../images/slider/solar-panel@x2.jpg';

import hydrogenFactory from '../images/slider/hydrogen-factory.jpg';
import hydrogenFactoryx2 from '../images/slider/hydrogen-factory@x2.jpg';

import landscape from '../images/slider/landscape-with-windmills.jpg';
import landscapex2 from '../images/slider/landscape-with-windmills@x2.jpg';

import nuclearPower from '../images/slider/nuclear-power-plant.jpg';
import nuclearPowerx2 from '../images/slider/nuclear-power-plant@x2.jpg';

const items = [
  {
    id: nanoid(),
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    text: 'Wind Power for auto field irrigation',
    date: 'July 2023',
    img: {
      d_1x: windTurbines,
      d_2x: windTurbinesx2,
    },
  },
  {
    id: nanoid(),
    title: 'Zhytomyr city Private Enterprise “Bosch”',
    text: 'Solar Panels for industrial use',
    date: 'November 2023',
    img: {
      d_1x: solarPanel,
      d_2x: solarPanelx2,
    },
  },
  {
    id: nanoid(),
    title: 'Rivne city Private Enterprise “Biotech”',
    text: 'Thermal modules',
    date: 'October 2023',
    img: {
      d_1x: hydrogenFactory,
      d_2x: hydrogenFactoryx2,
    },
  },
  {
    id: nanoid(),
    title: 'Kherson city Private Enterprise “HealthyFarm”',
    text: 'Wind power',
    date: 'September 2021',
    img: {
      d_1x: landscape,
      d_2x: landscapex2,
    },
  },
  {
    id: nanoid(),
    title: 'Zaporizhia city Private Enterprise “Biotech”',
    text: 'Mini nuclear stations',
    date: 'May 2021',
    img: {
      d_1x: nuclearPower,
      d_2x: nuclearPowerx2,
    },
  },
];

export default items;
