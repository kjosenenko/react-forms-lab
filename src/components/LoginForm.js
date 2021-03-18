import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.changeUsername} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changePassword} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
