import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user';
import 'wired-elements';

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            user:{
                email: '',
                password: '',
                passwordConfirm: '' 
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value 
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({submitted:true});
        const { user } = this.state;
        const { dispatch } = this.props;

        if (user.email && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
           <div>
               <form name="registration-form" onSubmit={this.handleSubmit}>
                    <wired-card>
                        <h1>Register Page</h1>
                        <wired-input placeholder="Enter email" type="email" />
                        <wired-input placeholder="Enter password" type="password" />
                        <wired-button type="submit">Submit</wired-button>
                    </wired-card>
               </form>
           </div> 
        );
    }
}

const mapStateToProps = state => {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps)(Register);