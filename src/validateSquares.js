export function validateSquares(squares, line) {
    const [a, b, c, d] = line;
    return squares[a] && squares[b] && squares[c] && squares[d]
        && squares[a].props && squares[b].props && squares[c].props && squares[d].props
        && squares[a].props.style && squares[b].props.style && squares[c].props.style && squares[d].props.style
}