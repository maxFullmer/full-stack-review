import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUser} from '../../redux/reducer';
import './Login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: null,
            typedUser: '',
            password: '',
            email: '',
            loading: false
         };
         this.login = this.login.bind(this);
         this.register = this.register.bind(this);
    }

    login(){
        this.setState({
            loading: true
        })
        axios.post('/api/login', {email: "mytestemail@email.com", password: "test"})
        .then(response => {
            this.props.setUser(response.data)
        })
        this.setState({
            loading: false
        })
    }

    register(){
        this.setState({
            loading: true
        })
        axios.post('/api/register', {email: "anothertestemail@email.com", password: "test", username: "josh"})
        .then(response => {
            this.props.setUser(response.data)
        })
        this.setState({
            loading: false
        })
    }
    
    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        })
    }
    
    render() {
        console.log(this.state.user)
        const {typedUser, password, email, loading} = this.state;
        console.log(typedUser, password, email)
        console.log("from redux ==========> ", this.props.user)
        return (
            <div>
                {
                    loading ? 
                    ( 
                        <div> you are loggin in!</div> 
                    )
                    :
                    (
                        <div className="login-container">
                            <input name="typedUser" value={typedUser} placeholder="username" type="username"
                                onChange={(event) => this.universalChangeHandler(event.target.name, event.target.value)}/>

                            <input name="password" value={password} placeholder="password" type="password"
                                onChange={(event) => this.universalChangeHandler(event.target.name, event.target.value)}/>

                            <input name="email" value={email} placeholder="email" type="email"
                                onChange={(event) => this.universalChangeHandler(event.target.name, event.target.value)}/>
                            
                            <div>
                                <button onClick={this.login}>Login</button>
                                <button onClick={this.register}>Register</button>
                            </div> 
                        </div> 
                    )
                }
            </div>
        )}
}

function mapReduxStateToProps(reduxState){
    return reduxState;
}
const mapDispatchToProps = {
    setUser
}
const connectInvoked = connect(mapReduxStateToProps, mapDispatchToProps)


export default connectInvoked(Login);