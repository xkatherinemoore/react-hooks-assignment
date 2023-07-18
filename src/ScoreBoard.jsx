import { useRef, useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";

function ScoreBoard() {
const [players, setPlayers] = useState([]);
const inputRef = useRef();

function addPlayer() {
  //Pulls input data as player name
  let playerName = inputRef.current.value || undefined;
  setPlayers([...players, { name: playerName, id: Date.now() }]);
  inputRef.current.value = ""; //Clears name input after adding a player
}

function deletePlayer(id) {
  setPlayers(
    players.filter((item) => {
      return item.id !== id;
    })
  );
}

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div class="input-group mb-3">
            {/* Input Player Name */}
            <input
              type="text"
              ref={inputRef}
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            {/* Add Player button */}
            <button
              class="btn btn-outline-primary"
              type="button"
              id="addPlayer"
              onClick={addPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-lg">
              {/* Make sure to pass the unique id as a key */}
              <Player
                key={player.id}
                name={player.name}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component
                handleDelete={() => deletePlayer(player.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
