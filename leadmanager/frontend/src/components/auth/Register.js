import React, {Fragment, Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from './../../actions/auth';
import {createMessage} from './../../actions/messages';


class Register extends Component {
    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e => {
        e.preventDefault();
        const {username, email, password, password2} = this.state;
        if(password !== password2) {
            this.props.createMessage({passwordNotMatch: 'Passwords do not match'});
        } else {
            const newUser = {
                username,
                email,
                password
            }
            this.props.registerUser(newUser);
        }
    }
    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to="/"/>;
        }
        const {email, username, password, password2} = this.state;
        return (
        <Fragment>
            <h1>Register</h1>
            <form className="col s12" onSubmit={this.onSubmit}>
                <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="username" value={username} onChange={this.onChange}/>
                            <label htmlFor="first_name">Username</label>
                        </div>
                    </div>
                    <div classNameName="row">
                        <div className="input-field col s12">
                            <input type="text" name="email" value={email} onChange={this.onChange}/>
                            <label htmlFor="last_name">Email</label>
                        </div>
                    </div>
                <div className="row">
                        <div className="input-field col s12">
                            <input type="password" name="password" value={password} onChange={this.onChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                </div>
                <div className="row">
                        <div className="input-field col s12">
                            <input type="password" name="password2" value={password2} onChange={this.onChange}/>
                            <label htmlFor="password2">Confirm Password</label>
                        </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit">Submit</button>
            </form>
            <br/>
            <br/>
            <Link className="btn waves-effect waves-light orange darken-4" to="/login">Login?</Link>
        </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {registerUser, createMessage})(Register);
