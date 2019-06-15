import React, { Component } from 'react';
import { addLead } from '../../actions/leads';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    static propTypes = {
        addLead: PropTypes.func.isRequired
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const lead = {name, email, message};
        this.props.addLead(lead);
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }
    render() {
        const {name, email, message} = this.state;
        return (
            <div className="row">
            <div className="col s12 m12">
              <div className="card darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Add Lead</span>
                  <form onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                        <input name="name" onChange={this.onChange} value={name} type="text" className="" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="email" onChange={this.onChange} value={email} type="email" className="" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input name="message" onChange={this.onChange} value={message} type="text" className="" />
                        <label htmlFor="message">Message</label>
                    </div>
                    <button className="btn waves-effect waves-light indigo darken-2" type="submit">Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default connect(null, {addLead})(Form);
