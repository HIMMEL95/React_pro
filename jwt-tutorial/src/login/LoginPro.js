import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import logo from "./MZC.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import LoginForm from "./Login";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: { idValue: "", pwValue: "" },
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      inputValue: { ...this.state.inputValue, [name]: value },
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="App container-lg">
        <div className="App-header">
          <div>
            <div className="loginCard" style={{ width: "50rem" }}>
              <div className="loginCard-body">
                <div className="loginCard-title">Login</div>
                <div className="loginInput">
                  <LoginForm getInput={this.handleInput} />
                  <div className="row">
                    <Link to="/forgot" className="forgetBtn">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-icon btn-secondary btn-google btn-lg w-100">
                        <FontAwesomeIcon icon={faGoogle} className="me-2" />
                        Google
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-icon btn-secondary btn-facebook btn-lg">
                        <FontAwesomeIcon icon={faFacebook} className="me-2" />
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>
                <div className="loginLogo">
                  <img src={logo} className="login-logo" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
