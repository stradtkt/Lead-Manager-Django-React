import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from './../../actions/auth';


export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logoutUser: PropTypes.func.isRequired
    }
    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="right">
                <li>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li>
                    <button onClick={this.props.logoutUser}>Logout</button>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="right">
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        );
        return (
            <nav>
                <div className="nav-wrapper indigo darken-2">
                    <div className="container">
                        <a href="#!" className="brand-logo left">Lead Manager</a>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
          </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Header);
