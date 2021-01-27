import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

class Signup extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        email: '',
        name_error: '',
        name_has_error: false,
        username_error: '',
        username_has_error: false,
        email_error: '',
        email_has_error: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        }
    
        fetch('http://localhost:3000/users',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(data => {
            debugger;
              if(!data.msg){
                localStorage.setItem('auth_key',data['auth_key'])
                this.props.handleSignup(data)
                this.props.history.push('/')
            }
            else{
                console.log(data.msg)
                console.log(newUser)
            }
        })

      }

    render(){
        return(
            <div className="Signup">
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Name:</label>
                    <br></br>
                    <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    onChange={this.handleInputChange} 
                    value={this.state.name}
                    className="field"/>
                    <br></br>
                    <label className="label">Username:</label>
                    <br></br>
                    <input 
                    id="username" 
                    type="text" 
                    name="username" 
                    onChange={this.handleInputChange} 
                    value={this.state.username}
                    className="field"/>
                    <br></br>
                    
                    <label className="label">Email:</label>
                    <br></br>
                    <input 
                    id="email" 
                    type="text" 
                    name="email" 
                    onChange={this.handleInputChange} 
                    value={this.state.email}
                    className="field"/>
                    <br></br>
                    
                    <label className="label">Password:</label>
                    <br></br>
                    <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    onChange={this.handleInputChange} 
                    value={this.state.password} 
                    className="field"/>

                    <input 
                    type="submit" 
                    value="Signup"  
                    className="button"/>

                    <p className="message">Already a checkmate?  <NavLink to="/login">Login</NavLink></p>

                </form>

                </div>
                
            </div>
        )
    }

}

export default withRouter(Signup)