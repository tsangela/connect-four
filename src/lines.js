export const lines = getLines();

function getLines() {
    const lines = [];
    addSW(lines);
    addNS(lines);
    addEW(lines);
    addSE(lines);
    return lines;
}

function addEW(lines) {
    for (let i = 0; i <= 35; i+=7) {
        const a = i + 3;
        for (let j = i; j <= a; ++j) {
            const b = j + 3;
            let line = [];
            for (let k = j; k <= b; ++k) {
                line.push(k.toString());
            }
            lines.push(line);
        }
    }
}

function addNS(lines) {
    for (let i = 0; i <= 14; i+=7) {
        const a = i + 6;
        for (let j = i; j <= a; ++j) {
            const b = j + 21;
            let line = [];
            for (let k = j; k <= b; k+=7) {
                line.push(k.toString());
            }
            lines.push(line);
        }
    }
}

function addSE(lines) {
    for (let i = 0; i <= 14; i+=7) {
        const a = i + 3;
        for (let j = i; j <= a; ++j) {
            const b = j + 24;
            let line = [];
            for (let k = j; k <= b; k+=8) {
                line.push(k.toString());
            }
            lines.push(line);
        }
    }
}

function addSW(lines) {
    for (let i = 3; i <= 17; i+=7) {
        const a = i + 3;
        for (let j = i; j <= a; ++j) {
            const b = j + 18;
            let line = [];
            for (let k = j; k <= b; k+=6) {
                line.push(k.toString());
            }
            lines.push(line);
        }
    }
}