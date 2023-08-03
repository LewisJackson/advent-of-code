import { readFile } from 'fs/promises';

async function rockPaperScissors(): Promise<Number> {
    const data = await readFile('input.txt', 'utf-8');
    const parsedData = data.split('\r\n').map(x => x.replace(' ', ''));
    const win = 6;
    const draw = 3;

    // rock = a, paper = b, scissors = c
    const rockPaperScissorsObj = {
        'A': 1,
        'B': 2,
        'C': 3
    };

    let score = 0;
    for (let i = 0; i < parsedData.length; i++) {
        const getChar = parsedData[i];
        const botChar = getChar.charAt(0);
        const decision = getChar.charAt(1);

        const movePoints = parsedData[i].charAt(0) as keyof typeof rockPaperScissorsObj;
        const choice = rockPaperScissorsObj[movePoints];

        if (botChar === 'A') {
            if (decision === 'Y') {
                score += draw + choice;
            } else if (decision === 'Z') {
                score += win + rockPaperScissorsObj['B'];
            } else {
                score += rockPaperScissorsObj['C'];
            }
        }

        if (botChar === 'B') {
            if (decision === 'Y') {
                score += draw + choice;
            } else if (decision === 'Z') {
                score += win + rockPaperScissorsObj['C'];
            } else {
                score += rockPaperScissorsObj['A'];
            }
        }

        if (botChar === 'C') {
            if (decision === 'Y') {
                score += draw + choice;
            } else if (decision === 'Z') {
                score += win + rockPaperScissorsObj['A'];
            } else {
                score += rockPaperScissorsObj['B'];
            }
        }
    }
    return score;
}

rockPaperScissors();