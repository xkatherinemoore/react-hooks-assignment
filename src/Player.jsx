import React from "react";
import { useState } from "react";

function Player({ name, handleDelete }) {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
  }
  
  function decrement() {
    setScore(score - 1);
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {/* Render Name here */}
        <h2 className="text-center">{name}</h2>
      </div>
      <div className="row justify-content-center">
        {/* Render score here */}
        <p className="text-center fs-3">Score: {score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 my-1">
          {/* Add increment event handler */}
          <button 
            className="btn btn-outline-primary w-100"
            onClick={increment}>
              Add Point +
          </button>
        </div>
        <div className="col-md-6 my-1">
          {/* Add decrement event handler */}
          <button className="btn btn-outline-danger w-100"
          onClick={decrement}>
            Remove Point -
          </button>
        </div>
      </div>
      <div className="row justify-content-center m-2">
        <div className="col-md-6 text-center">
          <button className="btn btn-danger" onClick={handleDelete}>
            DELETE PLAYER
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
