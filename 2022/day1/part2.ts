import { readFile } from 'fs/promises';

async function getThreeHighestCalories(): Promise<number> {
    const data = await readFile('input.txt', 'utf-8');
    const parseData = data
        .split('\r\n')
        .toString()
        .split(',,')
        .map(x => x.split(',').map(Number).reduce((x, y) => x + y))
        .sort((x, y) => y - x)
        .slice(0, 3);
    const highestThreeCalories = parseData.reduce((x, y) => x + y);
    return highestThreeCalories;
}

getThreeHighestCalories();