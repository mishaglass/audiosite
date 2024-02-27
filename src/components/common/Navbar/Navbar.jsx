import { NavLink } from 'react-router-dom';
import useScreenWidth from '../../../hooks/useScreenWidth.js';
import hamburger from '../../../assets/shared/tablet/icon-hamburger.svg';
import logo from '../../../assets/shared/desktop/logo.svg';
import cart from '../../../assets/shared/desktop/icon-cart.svg';
import styles from './Navbar.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src={hamburger}
        alt="hamburger"
        className={styles.navbar__hamburger}
      />
      <img src={logo} className={styles.navbar__logo} alt="logo" />
      <nav className={styles.navbar__nav}>
        <NavLink className={styles.navbar__link} to="/">
          HOME
        </NavLink>
        <NavLink className={styles.navbar__link} to="/headphones">
          HEADPHONES
        </NavLink>
        <NavLink className={styles.navbar__link} to="speakers">
          SPEAKERS
        </NavLink>
        <NavLink className={styles.navbar__link} to="earphones">
          EARPHONES
        </NavLink>
      </nav>
      <img src={cart} alt="cart" className={styles.navbar__cart} />
    </div>
  );
};

export default Navbar;
