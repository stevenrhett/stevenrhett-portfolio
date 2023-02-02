import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li className="mx-2 px-4">
            <NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end >Home</NavLink>
          </li>
          <li>
            <NavLink to='/events' className={({isActive}) => isActive ? classes.active : undefined}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
