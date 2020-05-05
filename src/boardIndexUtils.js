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
    let column = getContainingColumn(n);
    for (let i = column.length - 1; i >= 0; --i) {
        let index = column[i];
        if (!squares[index]) {
            return index;
        }
    }
    return -1;
}

export function getHoverIndex(i) {
    let column = getContainingColumn(i);
    return column[0];
}