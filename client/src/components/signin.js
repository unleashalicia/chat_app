import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signin} from '../actions';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        console.log('Form submitted: ', this.state);
        this.props.signin(this.state);

    }

    render(){

        const {email, password} = this.state;

        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                        <input onChange={this.handleChange} name="email" value={email} type="text"/>
                    </div>
                    <div>
                        Password:
                        <input onChange={this.handleChange} name="password" value={password} type="text"/>
                    </div>
                    <button className="btn">Sign In</button>
                    <p className="red-text">{this.props.error}</p>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        error: state.user.error
    }
}

export default connect(mapStateToProps, {signin})(SignIn);