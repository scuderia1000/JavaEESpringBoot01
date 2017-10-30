import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/socketexamplepage">Socket</Link>
            </nav>
        </div>
    );
};

export default Header;