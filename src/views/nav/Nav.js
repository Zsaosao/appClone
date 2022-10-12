import style from './nav.module.scss';
// className="active"
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <div className={style.topnav}>
            <NavLink className={(state) => (state.isActive ? [style.active] : '')} end to="/">
                Home
            </NavLink>
            <NavLink className={(state) => (state.isActive ? [style.active] : '')} to="/news">
                News
            </NavLink>
            <NavLink className={(state) => (state.isActive ? [style.active] : '')} to="/contact">
                Contact
            </NavLink>
            <NavLink className={(state) => (state.isActive ? [style.active] : '')} to="/about">
                About
            </NavLink>
            <NavLink className={(state) => (state.isActive ? [style.active] : '')} to="/blogApp">
                blogApp
            </NavLink>
            <NavLink className={(state) => (state.isActive ? [style.active] : '')} to="/youtubeSearch">
                Youtube Search
            </NavLink>
        </div>
    );
}

export default Nav;
