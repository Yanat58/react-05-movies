import { NavLink } from 'react-router-dom';
import logo from 'utilities/images/logo.png';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <img
          className={css.logo__img}
          src={logo}
          alt="logo"
          width={150}
          height={150}
        />

        <ul className={css.nav__list}>
          <li className={css.nav__item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.nav__item}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
