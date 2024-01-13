import Navbar from '../common/Navbar/Navbar';

import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
};

export default Header;
