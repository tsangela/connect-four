import React from "react";
import styled from "styled-components";
import {getDropIndex, getHoverIndex} from "../boardIndexUtils";
import calculateWinner from "../calculateWinner";
import RestartButton from "./RestartButton";
import NavButtons from "./NavButtons";

function Square(props) {
  return (
    <SquareButton
      board
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      {props.value}
    </SquareButton>
  );
}

const HoverSquare = props => {
  return (
    <SquareButton
      hover
    >
      {props.value}
    </SquareButton>
  );
};

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(42).fill(null),
      next: 'red',
      hovers: Array(7).fill(null),
    }
  }

  dropCoin(n) {
    const squares = this.state.squares.slice();
    let i = getDropIndex(n, squares);
    if (i === -1 || squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = <span style={{color: this.state.next}}>⬤</span>;
    let next = this.state.next === 'red' ? 'yellow' : 'red';
    this.setState({
      squares: squares,
      next: next,
    });
    this.hoverCoinIn(n, next)
  }

  hoverCoinIn(n, next) {
    let i = getHoverIndex(n);
    const hovers = this.state.hovers.slice();
    hovers[i] = <span style={{color: next}}>⬤</span>;
    this.setState({
      hovers: hovers,
    });
  }

  hoverCoinOut(n) {
    let i = getHoverIndex(n);
    const hovers = this.state.hovers.slice();
    hovers[i] = '';
    this.setState({
      hovers: hovers,
    });
  }

  renderHover(i) {
    return <HoverSquare
      value={this.state.hovers[i]}
      key={`hover_${i}`}
    />;
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      key={`square_${i}`}
      onMouseOver={() => this.hoverCoinIn(i, this.state.next)}
      onMouseLeave={() => this.hoverCoinOut(i)}
      onClick={() => this.dropCoin(i)}
    />;
  }

  renderHoverRow() {
    let row = [];
    for (let i = 0; i < 7; i++) {
      row.push(this.renderHover(i));
    }
    return <BoardRow>
      {row}
    </BoardRow>;
  }

  renderSquareRow(i) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      row.push(this.renderSquare(i+j));
    }
    return <BoardRow>
      {row}
    </BoardRow>;
  }

  renderBoard() {
    let col = [];
    for (let i = 0; i <= 35; i+=7) {
      col.push(this.renderSquareRow(i));
    }
    return col;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const status = winner ? 'Winner: ' + winner + '!' : 'Next player: ' + this.state.next;
    const bgColor = status.includes('Next player: ') ? this.state.next : 'black';
    const textColor = status.includes('Next player: ') ? (this.state.next === 'red' ? 'white' : 'black') : 'white';

    return (
      <CenterWrapper>
        <Title>CONNECT FOUR</Title>
        <Status
          background={bgColor}
          color={textColor}
        >
          {status}
        </Status>
        <BoardWrapper>
          {this.renderHoverRow()}
          {this.renderBoard()}
        </BoardWrapper>
        <RestartButton/>
        <NavButtons/>
      </CenterWrapper>
    );
  }
}

const CenterWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100%;
  top: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-style: italic;
  text-decoration: overline;
`;

const Status = styled.div`
  background: ${props => props.background};
  color: ${props => props.color};
  padding: 5px;
  transition: .3s ease;
  
  &:hover {
    letter-spacing: 2px;
  }
`;

const BoardWrapper = styled.div`
  margin-bottom: 30px;
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const SquareButton = styled.button`
  background: ${props => props.hover ? `transparent` : `#fff`};
  border: ${props => props.hover ? `none` : `1px solid #999`};
  float: left;
  font: 24px "Andale Mono", monospace;
  line-height: 34px;
  width: 50px;
  height: 50px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  -webkit-text-stroke: 1px black;
  
  &:focus {
    outline: none;    
  }
`;