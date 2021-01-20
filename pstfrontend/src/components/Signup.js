import React from 'react'
import { withRouter } from 'react-router'

class Signup extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        email: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        fetch('http://localhost:3000/users',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: this.state
          })
        }).then(res => res.json())
        .then(token => {
            localStorage.setItem('token', token.auth_key)
            this.props.history.push('/restaurants')
            })
      }

    render(){
        return(
            <div className="Signup">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input id="name" type="text" name="name" onChange={this.handleInputChange} value={this.state.name}/>
                    
                    <label>Username:</label>
                    <input id="username" type="text" name="username" onChange={this.handleInputChange} value={this.state.username}/>
                    
                    <label>Email:</label>
                    <input id="email" type="text" name="email" onChange={this.handleInputChange} value={this.state.email}/>
                    
                    <label>Password:</label>
                    <input id="password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />

                    <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }

}

export default withRouter(Signup)