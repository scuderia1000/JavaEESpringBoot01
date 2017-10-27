import React, {PropTypes} from 'react';
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/socketexamplepage">Socket</Link>
        </nav>
    );
};

export default Header;