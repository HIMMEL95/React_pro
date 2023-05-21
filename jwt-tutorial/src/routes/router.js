import React from "react";
import { Routes, Route, redirect } from "react-router-dom";
import Login from "../login/LoginPro";
import Test from "../test/test";
import Common from "../common/common";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Common />}>
        <Route path="test" element={<Test />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default router;
