import navlogo1 from '../assets/navLogo.svg';
import navlogo2 from '../assets/navlogo2.svg';
import searchIcon from '../assets/search-icon.png';
import grapes from '../assets/grapes.svg';

const Nav = ({status}) => {
  if(status === 'home') {
    return (
      <nav>
        <a href="/">
          <img id="navLogo" src={navlogo1} alt="logo" />
        </a>
        <div id="navCenter">
          <a className="navItems" href="/">ГЛАВНАЯ</a>
              <img src={grapes} alt="grapes" />
          <a className="navItems" href="/">О НАС</a>
              <img src={grapes} alt="grapes" />
          <a className="navItems" href="/">КАРТА</a>
              <img src={grapes} alt="grapes" />
          <a className="navItems" href="/">ПРОДУКЦИЯ</a>
              <img src={grapes} alt="grapes" />
          <a className="navItems" href="/">СТАТЬИ</a>
              <img src={grapes} alt="grapes" />
          <a className="navItems" href="/">СВЯЗЬ</a>
              <img src={grapes} alt="grapes" />
          <a className="navItems" href="/">ЛИЧНЫЙ КАБИНЕТ</a>
        </div>
        <div className="navSearch">
          <img className="searchIcon" src={searchIcon} alt="search" />
          <input type="text" />
        </div>
      </nav>
    );
  }
  if(status === 'second') {
    return (
      <nav>
        <a href="/">
          <img id="navLogo" src={navlogo2} alt="logo" />
        </a>
        <div className="nav2-right">
          <span className="usersName">Смит Джо</span>
          <div className="navSearch">
            <img className="searchIcon searchIcon2" src={searchIcon} alt="search" />
            <input className="greySearch" type="text" />
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;