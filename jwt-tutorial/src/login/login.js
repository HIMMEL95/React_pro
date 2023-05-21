import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../main/UserProvider";

export default function Login() {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.submitData(e);
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    const userData = { userId, token: "123456" };
    login(userData);
    // alert(this.state.member_id_num + " " + this.state.password_enc);
    // this.setState({
    //   member_id_num: "",
    //   password_enc: "",
    // });

    // if (this.state.member_id_num !== "" && this.state.password_enc !== "") {
    //   sessionStorage.setItem("Authorized", true);
    // }
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

  return (
    <form onSubmit={submitData}>
      <div className="row">
        <label htmlFor="inputId" className="form-label">
          ID
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="inputPw" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-dark loginBtn"
          // onClick={submitData}
        >
          Login
        </button>
      </div>
    </form>
  );
}

// class LoginForm extends Component {
//   state = {
//     member_id_num: "",
//     password_enc: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.submitData(e);
//     }
//   };

//   submitData = (e) => {
//     alert(this.state.member_id_num + " " + this.state.password_enc);
//     this.setState({
//       member_id_num: "",
//       password_enc: "",
//     });

//     if (this.state.member_id_num !== "" && this.state.password_enc !== "") {
//       sessionStorage.setItem("Authorized", true);
//     }
//     // axios
//     //   .post("/api/loginProcess", {
//     //     member_id_num: this.state.member_id_num,
//     //     password_enc: this.state.password_enc,
//     //   })
//     //   .then(function (response) {
//     //     console.log(response);
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   });
//   };

//   render() {
//     return (
//       <form>
//         <div className="row">
//           <label htmlFor="inputId" className="form-label">
//             ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="member_id_num"
//             placeholder="아이디를 입력하세요"
//             value={this.state.member_id_num}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="row">
//           <label htmlFor="inputPw" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             name="password_enc"
//             placeholder="비밀번호를 입력하세요"
//             value={this.state.password_enc}
//             onChange={this.handleChange}
//             onKeyDown={this.handleKeyPress}
//           />
//         </div>
//         <div className="row">
//           <button
//             type="button"
//             className="btn btn-dark loginBtn"
//             onClick={this.submitData}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default LoginForm;
