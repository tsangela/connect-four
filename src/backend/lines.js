export const lines = getLines();
// console.log(lines);

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