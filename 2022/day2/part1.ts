import { readFile } from 'fs/promises';

async function rockPaperScissors(): Promise<Number> {
    const data = await readFile('input.txt', 'utf-8');
    const parsedData = data.split('\r\n').map(x => x.replace(' ', ''));
    const win = 6;
    const draw = 3;

    // rock = x, paper = y, scissors = z
    const rockPaperScissorsObj = {
        'X': 1,
        'Y': 2,
        'Z': 3
    };

    let score = 0;
    for (let i = 0; i < parsedData.length; i++) {
        const char = parsedData[i];

        // win
        if (char.charAt(1) === 'X' && char.charAt(0) === 'C') {
            score += win;
        } else if (char.charAt(1) === 'Y' && char.charAt(0) === 'A') {
            score += win;
        } else if (char.charAt(1) === 'Z' && char.charAt(0) === 'B') {
            score += win;
        }

        // draw
        if (char.charAt(1) === 'X' && char.charAt(0) === 'A') {
            score += draw;
        } else if (char.charAt(1) === 'Y' && char.charAt(0) === 'B') {
            score += draw;
        } else if (char.charAt(1) === 'Z' && char.charAt(0) === 'C') {
            score += draw;
        }

        const myChar = parsedData[i].charAt(1) as keyof typeof rockPaperScissorsObj;
        score += rockPaperScissorsObj[myChar];
    }
    return score;
}

rockPaperScissors();