import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

    getHoverIndex(i) {
        let column = getContainingColumn(i);
        return column[0];
    }

    hoverCoinIn(n, next) {
        let i = this.getHoverIndex(n);
        const hovers = this.state.hovers.slice();
        hovers[i] = <span style={{color: next}}>⬤</span>;
        this.setState({
            hovers: hovers,
        });
    }

    hoverCoinOut(n) {
        let i = this.getHoverIndex(n);
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
                <div>
                    <a href="" className="btn">
                        Restart game
                        {/*<button>*/}
                            {/*Restart game*/}
                        {/*</button>*/}
                    </a>
                </div>
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
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

function getDropIndex(n, squares) {
    // console.log('n = ' + n);
    let column = getContainingColumn(n);
    // console.log('column = ' + column);
    for (let i = column.length - 1; i >= 0; --i) {
        let index = column[i];
        // console.log('squares[index] = ' + squares[index]);
        if (!squares[index]) {
            // console.log('index = ' + index);
            return index;
        }
    }
    return -1;
}

const columns = getColumns();
// console.log(JSON.stringify(columns));

function getColumns() {
    let columns = [];
    for (let i = 0; i <= 6; ++i) {
        let column = [];
        let a = i + 35;
        for (let j = i; j <= a; j+=7) {
            column.push(j);
        }
        columns.push(column);
    }
    return columns;
}

function getContainingColumn(n) {
    for (let i = 0; i < columns.length; ++i) {
        let column = columns[i];
        if (column.includes(n)) {
            return column;
        }
    }
    return null;
}

const lines = getLines();
// console.log(lines);

function calculateWinner(squares) {
    // console.log('In calculateWinner');
    for (let i = 0; i < lines.length; ++i) {
        const [a, b, c, d] = lines[i];
        if (validateSquares(squares, lines[i])
            && squares[a].props.style.color === squares[b].props.style.color
            && squares[a].props.style.color === squares[c].props.style.color
            && squares[a].props.style.color === squares[d].props.style.color) {
            return squares[a].props.style.color;
        }
    }
    return null;
}

function validateSquares(squares, line) {
    const [a, b, c, d] = line;
    return squares[a] && squares[b] && squares[c] && squares[d]
        && squares[a].props && squares[b].props && squares[c].props && squares[d].props
        && squares[a].props.style && squares[b].props.style && squares[c].props.style && squares[d].props.style
}

function getLines() {
    const lines = [];
    addSW(lines);
    addNS(lines);
    addEW(lines);
    addSE(lines);
    return lines;
}

function addEW(lines) {
    // console.log('EAST-WEST');
    // let ew_lines = [];
    for (let i = 0; i <= 35; i+=7) {
        const a = i + 3;
        for (let j = i; j <= a; ++j) {
            const b = j + 3;
            let line = [];
            for (let k = j; k <= b; ++k) {
                line.push(k.toString());
            }
            // ew_lines.push(line);
            lines.push(line);
        }
    }
    // return ew_lines;
}

function addNS(lines) {
    // console.log('NORTH-SOUTH');
    // let ns_lines = [];
    for (let i = 0; i <= 14; i+=7) {
        const a = i + 6;
        for (let j = i; j <= a; ++j) {
            const b = j + 21;
            let line = [];
            for (let k = j; k <= b; k+=7) {
                line.push(k.toString());
            }
            // console.log(line.toString());
            // ns_lines.push(line)
            lines.push(line);
        }
    }
    // return ns_lines;
}

function addSE(lines) {
    // console.log('SOUTH-EAST');
    // let se_lines = [];
    for (let i = 0; i <= 14; i+=7) {
        const a = i + 3;
        for (let j = i; j <= a; ++j) {
            const b = j + 24;
            let line = [];
            for (let k = j; k <= b; k+=8) {
                line.push(k.toString());
            }
            // console.log(line.toString());
            // se_lines.push(line);
            lines.push(line);
        }
    }
    // return se_lines;
}

function addSW(lines) {
    // console.log('SOUTH-WEST');
    // let sw_lines = [];
    for (let i = 3; i <= 17; i+=7) {
        const a = i + 3;
        for (let j = i; j <= a; ++j) {
            const b = j + 18;
            let line = [];
            for (let k = j; k <= b; k+=6) {
                line.push(k.toString());
            }
            // console.log(line.toString());
            // sw_lines.push(line);
            lines.push(line);
        }
    }
    // return sw_lines;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
