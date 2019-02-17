import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import calculateWinner from "./backend/calculateWinner";
import {getHoverIndex, getDropIndex} from "./backend/boardIndexUtils";
import NavButtons from "./components/NavButtons";
import RestartButton from "./components/RestartButton";

function Square(props) {
    return (
        <button
            className="square"
            onMouseOver={props.onMouseOver}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

function HoverSquare(props) {
    return (
        <button
            className="square drop-hover"
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
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

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onMouseOver={() => this.hoverCoinIn(i, this.state.next)}
            onMouseLeave={() => this.hoverCoinOut(i)}
            onClick={() => this.dropCoin(i)}
        />;
    }

    renderHover(i) {
        return <HoverSquare
            value={this.state.hovers[i]}
        />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const status = winner ? 'Winner: ' + winner + '!' : 'Next player: ' + this.state.next;
        let bg_color = status.includes('Next player: ') ? this.state.next : 'black';
        let text_color = status.includes('Next player: ') ? (this.state.next === 'red' ? 'white' : 'black') : 'white';

        return (
            <div className="center">
                <h1 className="title">CONNECT FOUR</h1>
                <div className="status"
                     style={{background: bg_color,
                             color: text_color}}
                >
                    {status}
                </div>
                <div className="">
                    {this.renderHover(0)}
                    {this.renderHover(1)}
                    {this.renderHover(2)}
                    {this.renderHover(3)}
                    {this.renderHover(4)}
                    {this.renderHover(5)}
                    {this.renderHover(6)}
                </div>
                <div className="board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                        {this.renderSquare(6)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                        {this.renderSquare(9)}
                        {this.renderSquare(10)}
                        {this.renderSquare(11)}
                        {this.renderSquare(12)}
                        {this.renderSquare(13)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(14)}
                        {this.renderSquare(15)}
                        {this.renderSquare(16)}
                        {this.renderSquare(17)}
                        {this.renderSquare(18)}
                        {this.renderSquare(19)}
                        {this.renderSquare(20)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(21)}
                        {this.renderSquare(22)}
                        {this.renderSquare(23)}
                        {this.renderSquare(24)}
                        {this.renderSquare(25)}
                        {this.renderSquare(26)}
                        {this.renderSquare(27)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(28)}
                        {this.renderSquare(29)}
                        {this.renderSquare(30)}
                        {this.renderSquare(31)}
                        {this.renderSquare(32)}
                        {this.renderSquare(33)}
                        {this.renderSquare(34)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(35)}
                        {this.renderSquare(36)}
                        {this.renderSquare(37)}
                        {this.renderSquare(38)}
                        {this.renderSquare(39)}
                        {this.renderSquare(40)}
                        {this.renderSquare(41)}
                    </div>
                </div>
                <RestartButton/>
                <NavButtons/>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
