export const columns = getColumns();
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