import { Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Main from "./main/main";
import Login from "./login/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <div></div>
      {/* <Outlet></Outlet> */}
    </>
  );
}

export default App;
