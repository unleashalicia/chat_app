import React from 'react';
import {Link} from 'react-router-dom';

export default props => {

    const navStyles = {
        paddingLeft: '8px'
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo" style={navStyles}>Chat App</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}