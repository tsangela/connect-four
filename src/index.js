import React from 'react';
import styled from "styled-components";
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./components/Board";

class Game extends React.Component {
  render() {
    return (
      <GameWrapper>
        <Board />
      </GameWrapper>
    );
  }
}

const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
