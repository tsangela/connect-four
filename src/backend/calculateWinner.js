import {lines} from "./lines";
import {validateSquares} from "./validateSquares";

export default function calculateWinner(squares) {
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