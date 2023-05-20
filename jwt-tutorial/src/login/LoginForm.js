import axios from "axios";
import React, { useEffect } from "react";

function LoginForm() {
  // useEffect(() => {
  //   var id = document.getElementById("inputId").value;
  //   var pw = document.getElementById("inputPw").value;

  //   axios.post("http://localhost:8080/api/loginProcess",
  //   {withCredentials: true})
  //   .then(response => {
  //     console.log(response);
  // })

  // }, []);

  function submitData(e) {
    var id = document.getElementById("inputId").value;
    var pw = document.getElementById("inputPw").value;
    alert(id + " " + pw);

    axios
      .post("/api/loginProcess", {
        id: id,
        pw: pw,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form>
      <div className="row">
        <label htmlFor="inputId" className="form-label">
          ID
        </label>
        <input
          type="text"
          className="form-control"
          id="inputId"
          placeholder="아이디를 입력하세요"
        />
      </div>
      <div className="row">
        <label htmlFor="inputPw" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPw"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div className="row">
        <button
          type="submit"
          className="btn btn-dark loginBtn"
          onClick={submitData}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
