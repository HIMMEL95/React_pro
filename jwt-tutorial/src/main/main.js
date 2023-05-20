import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="/test">Test</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              {/* <Link to=""/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
