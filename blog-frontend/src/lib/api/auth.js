import client from "./client";

// 로그인
export const login = ({ username, password }) => {
  console.log(username, password);
  const form = new FormData();
  form.append("member_id_num", username);
  form.append("password_enc", password);
  client.post("/api/loginProcess.do", form);
  // client.post("/api/auth/login", { username, password });
};

// 회원가입;
export const register = ({ username, password }) =>
  client.post("/api/auth/register", { username, password });

// 로그인 상태 확인
export const check = () => client.get("/api/auth/check.do");

// 로그아웃
export const logout = () => client.post("/api/auth/logout");
