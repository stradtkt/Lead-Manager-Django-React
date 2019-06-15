import React, {Fragment, Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../actions/auth';

class Register extends Component {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    state = {
        username: '',
        password: ''
    }
    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e => {
        e.preventDefault();
        this.props.loginUser(this.state.username, this.state.password);
    }
    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to='/' />
        }
        const {username, password} = this.state;
        return (
        <Fragment>
            <h1>Login</h1>
            <form className="col s12" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" name="username" value={username} onChange={this.onChange}/>
                        <label htmlFor="first_name">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="password" name="password" value={password} onChange={this.onChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit">Submit</button>
            </form>
            <br/>
            <br/>
            <Link className="btn waves-effect waves-light orange darken-4" to="/register">Register?</Link>
        </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {loginUser})(Register);