import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const LoginHeader = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/socketexamplepage">Socket</Link>
                {" | "}
                <Link to="/main">Main</Link>
            </nav>
        </div>
    );
};

export default LoginHeader;