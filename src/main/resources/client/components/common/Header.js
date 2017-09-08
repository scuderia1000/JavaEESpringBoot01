import React, {PropTypes} from 'react';
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {" | "}
            <Link to="/cats">Cats</Link>
        </nav>
    );
};

export default Header;