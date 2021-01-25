import React from 'react'
import { withRouter } from 'react-router'

class Login extends React.Component {
    state = {
        username: '',
        password: '',

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
            password: this.state.password
        }
        fetch('http://localhost:3000/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(token => {
            localStorage.setItem('auth_key',token['auth_key'])
            this.props.handleLogin()
            this.props.history.push('/')
        })

      }


                  // {
                
            // localStorage.setItem('auth_key', token['auth_key'])
            // this.props.handleLogin()
            // this.props.history.push('/')
            // })
    //   figure out if there is an error 
    render(){
        return(
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
     
                    <label>
                        Username:
                    </label>
                    <input id="username" type="text" name="username" onChange={this.handleInputChange} value={this.state.username}/>
                    <label>
                        Password:
                    </label>
                    <input id="password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />

                    <input type="submit" value="Login" />
                    
                </form>
            </div>
        )
    }

}

export default withRouter(Login)