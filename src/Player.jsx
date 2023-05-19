import React from "react";
import { useState } from "react";
function Player() {
  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {/* Render Name here */}
        <h2 className="text-center"></h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{/* Render score here */}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button className="btn btn-outline-primary w-100">Add Point +</button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button className="btn btn-outline-danger w-100">
            Remove Point -
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
