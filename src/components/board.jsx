import React, { Component } from "react";

class Board extends Component {
  state = {
    players: [
      {
        name: "pes",
        score: 50,
      },
      {
        name: "mike",
        score: 500,
      },
    ],
  };

  render() {
    return (
      <table>
        <tbody>
          {this.state.players.map((player) => {
            return (
              <tr key={player}>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Board;
