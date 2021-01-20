import React from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: '',

    }

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

export default Login