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
        const getMoves = parsedData[i];
        const botMove = getMoves.charAt(0);
        const myMove = getMoves.charAt(1);

        // win
        if (myMove === 'X' && botMove === 'C') {
            score += win;
        } else if (myMove === 'Y' && botMove === 'A') {
            score += win;
        } else if (myMove === 'Z' && botMove === 'B') {
            score += win;
        }

        // draw
        if (myMove === 'X' && botMove === 'A') {
            score += draw;
        } else if (myMove === 'Y' && botMove === 'B') {
            score += draw;
        } else if (myMove === 'Z' && botMove === 'C') {
            score += draw;
        }

        const movePoints = myMove as keyof typeof rockPaperScissorsObj;
        score += rockPaperScissorsObj[movePoints];
    }
    return score;
}

rockPaperScissors();