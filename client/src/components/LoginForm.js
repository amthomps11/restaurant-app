import React from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showError: false
    };
  }

  handleSubmitForm = async e => {
    e.preventDefault();
    console.log("submit form");
    const { email, password } = this.state;
    const { handleLogin } = this.props;

    try {
      await handleLogin({ email, password });
    } catch (e) {
      this.setState(state => {
        return { showError: true };
      });
      throw e;
    }
  };

  handleTextInput = e => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState(state => {
      return { showError: false, [name]: value };
    });
  };

  render() {
    const { isSignedIn } = this.props;
    const { showError } = this.state;
    let errorMessage;
    errorMessage = showError ? (
      <div className="errorMessage">
        <span> An error Occurred, please try again</span>
      </div>
    ) : (
      <div className="hidden-errorMessage">
        <span> You shouldn't see this</span>
      </div>
    );

    if (isSignedIn) {
      console.log(this.props);
      localStorage.setItem("signedin", "true");
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { user_id: "name" }
          }}
        />
      );
      // return <Redirect to="/dashboard" />;
    }
    return (
      <div className="login-form">
        <h1>Login</h1>
        <hr />
        <form className="form" onSubmit={this.handleSubmitForm}>
          <div>
            <input
              placeholder="Email"
              type="text"
              name="email"
              onChange={this.handleTextInput}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleTextInput}
              value={this.state.password}
            />
            {errorMessage}
          </div>
          <button>Login</button>
        </form>
        <a className="new-user" href="/signup">
          New here? Create an account.
        </a>
      </div>
    );
  }
}

export default LoginForm;
