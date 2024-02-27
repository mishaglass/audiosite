import styles from './LinkBar.module.scss';
import LinkCard from '../LinkCard/LinkCard';
import CardImages from './exportImages';
const LinkBar = () => {
  return (
    <div className={styles.linkBar}>
      {CardImages.map((card) => (
        <LinkCard
          key={card.id}
          image={process.env.PUBLIC_URL + card.src}
          category={card.category}
        />
      ))}
    </div>
  );
};

export default LinkBar;
