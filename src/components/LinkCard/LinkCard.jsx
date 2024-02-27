import styles from './LinkCard.module.scss';
import Button from '../common/Button/Button';
import { BUTTON_TYPES } from '../../constants/buttonTypes';
const LinkCard = ({ image, category, id }) => {
  return (
    <div className={styles.linkCard} key={id}>
      {' '}
      <img src={image} className={styles.linkCard__image} alt={category} />
      <p className={styles.linkCard__category}>{category}</p>
      <Button
        className={styles.linkCard__button}
        type={BUTTON_TYPES.GRAY_LIGHT}
        text={'SHOP'}
      />
      <div className={styles.backgroundGray}></div>
    </div>
  );
};

export default LinkCard;
