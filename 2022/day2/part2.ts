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
        const getMoves = parsedData[i];
        const botMove = getMoves.charAt(0);
        const decisionMove = getMoves.charAt(1);

        const movePoints = botMove as keyof typeof rockPaperScissorsObj;
        const copyMove = rockPaperScissorsObj[movePoints];

        if (botMove === 'A') {
            if (decisionMove === 'Y') {
                score += draw + copyMove;
            } else if (decisionMove === 'Z') {
                score += win + rockPaperScissorsObj['B'];
            } else {
                score += rockPaperScissorsObj['C'];
            }
        }

        if (botMove === 'B') {
            if (decisionMove === 'Y') {
                score += draw + copyMove;
            } else if (decisionMove === 'Z') {
                score += win + rockPaperScissorsObj['C'];
            } else {
                score += rockPaperScissorsObj['A'];
            }
        }

        if (botMove === 'C') {
            if (decisionMove === 'Y') {
                score += draw + copyMove;
            } else if (decisionMove === 'Z') {
                score += win + rockPaperScissorsObj['A'];
            } else {
                score += rockPaperScissorsObj['B'];
            }
        }
    }
    return score;
}

rockPaperScissors();