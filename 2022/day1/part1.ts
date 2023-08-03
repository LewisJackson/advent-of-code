import { readFile } from 'fs/promises';

async function getHighestCalories(): Promise<number> {
    const data = await readFile('input.txt', 'utf-8');
    const parseData = data
        .split('\r\n')
        .toString()
        .split(',,')
        .map(x => x.split(',').map(Number).reduce((x, y) => x + y));
    const highestCalories = Math.max(...parseData);
    return highestCalories;
}

getHighestCalories();