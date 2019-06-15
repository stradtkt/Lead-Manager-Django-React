import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e => {
        e.preventDefault();
        console.log('Success');
    }
    render() {
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
                            <label htmlFor="password">Confirm Password</label>
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

export default Register;
