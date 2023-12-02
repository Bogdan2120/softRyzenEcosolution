import { useState } from 'react';

import FaqElemaent from './FaqElement/FaqElement';

import styles from './faqElements.module.scss';

const FaqElemaents = ({ items }) => {
  const [isItemID, setItemID] = useState(items[0].id);
  const handleButtonClick = id => {
    setItemID(id);
  };
  const elements = items.map(item => (
    <li key={item.id}>
      <FaqElemaent
        handleClick={handleButtonClick}
        item={item}
        isId={isItemID}
      />
    </li>
  ));
  return <ul className={styles.accordion}>{elements}</ul>;
};

export default FaqElemaents;
