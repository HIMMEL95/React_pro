import axios from "axios";
import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// class LoginForm extends Component {
//   // useEffect(() => {
//   //   var id = document.getElementById("inputId").value;
//   //   var pw = document.getElementById("inputPw").value;

//   //   axios.post("http://localhost:8080/api/loginProcess",
//   //   {withCredentials: true})
//   //   .then(response => {
//   //     console.log(response);
//   // })

//   // }, []);

//   state ={
//     member_id_num : "",
//     password_enc : "",
//   };

//   submitData(e) {
//     var id = document.getElementById("inputId").value;
//     var pw = document.getElementById("inputPw").value;
//     alert(id + " " + pw);

//     axios
//       .post("/api/loginProcess", {
//         id: id,
//         pw: pw,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <form>
//       <div className="row">
//         <label htmlFor="inputId" className="form-label">
//           ID
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="아이디를 입력하세요"
//         />
//       </div>
//       <div className="row">
//         <label htmlFor="inputPw" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="비밀번호를 입력하세요"
//         />
//       </div>
//       <div className="row">
//         <button
//           type="submit"
//           className="btn btn-dark loginBtn"
//           onClick={submitData}
//         >
//           Login
//         </button>
//       </div>
//     </form>
//   );
// }

class LoginForm extends Component {
  state = {
    member_id_num: "",
    password_enc: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.submitData(e);
    }
  };

  submitData = (e) => {
    alert(this.state.member_id_num + " " + this.state.password_enc);
    this.setState({
      member_id_num: "",
      password_enc: "",
    });

    if (this.state.member_id_num !== "" && this.state.password_enc !== "") {
      sessionStorage.setItem("Authorized", true);
    }
    // axios
    //   .post("/api/loginProcess", {
    //     member_id_num: this.state.member_id_num,
    //     password_enc: this.state.password_enc,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <form>
        <div className="row">
          <label htmlFor="inputId" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            name="member_id_num"
            placeholder="아이디를 입력하세요"
            value={this.state.member_id_num}
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <label htmlFor="inputPw" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password_enc"
            placeholder="비밀번호를 입력하세요"
            value={this.state.password_enc}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
          />
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-dark loginBtn"
            onClick={this.submitData}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
