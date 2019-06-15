import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo darken-2">
                    <a href="#!" className="brand-logo right">Lead Manager</a>
                    <div className="container">
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                            <li>
                                <Link to='/'>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
          </nav>
        )
    }
}

export default Header;
