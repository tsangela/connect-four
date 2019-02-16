import {columns} from "./columns";

export function getContainingColumn(n) {
    for (let i = 0; i < columns.length; ++i) {
        let column = columns[i];
        if (column.includes(n)) {
            return column;
        }
    }
    return null;
}

export function getDropIndex(n, squares) {
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

export function getHoverIndex(i) {
    let column = getContainingColumn(i);
    return column[0];
}