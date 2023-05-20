import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
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
