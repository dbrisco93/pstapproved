import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        message: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            message: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        fetch('http://localhost:3000/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(data => {
            if(!data.msg){
                localStorage.setItem('auth_key',data['auth_key'])
                this.props.handleLogin(data)
                this.props.history.push('/')
            }
            else{
                this.setState(
                    {message: data.msg, 
                    errors: 'true',
                    username: '',
                    password: ''  
                })
            }

        })
      }


 
    render(){
        return(
            <div className="Login">
                <div className="form">
                    <form onSubmit={this.handleSubmit} className="register-form">

                        <label className="label">
                            Username:
                        </label>
                        <br></br>
                        <input id="username" 
                            type="text" 
                            name="username" 
                            onChange={this.handleInputChange} 
                            value={this.state.username}
                            className="field"/>
                            <br></br>
                        <label className="label">
                            Password:
                        </label>
                        <br></br>
                        <input id="password" 
                            type="password" 
                            name="password" 
                            onChange={this.handleInputChange} 
                            value={this.state.password} 
                            className="field"/>

                        {
                            this.state.errors === "true" ?
                            <p className="errors">{this.state.message}</p>
                            : ""
                        }

                        <input type="submit" value="Login" className="button"/>
                        <p className="message">Not registered? <NavLink to="/signup">Become a Checkmate</NavLink></p>

     
                     </form>

                </div>
       
            </div>
        )
    }

}

export default withRouter(Login)