import React from "react";
import { Link } from "react-router-dom";

const test = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col">
          <div className="card">
            <div className="card-header">Test</div>
            <div className="body">
              <Link to="/test" />
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default test;
