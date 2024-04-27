/* eslint-disable no-console */
import * as wa from 'weekly-availabilities';
import { readFile } from 'fs/promises';

const main = async () => {
  const fileContents = await readFile('./availabilities.txt', { encoding: 'utf-8' });

  const availabilities = fileContents.split('\n').map(wa.parseIntervals);
  const overlap = wa.calculateScheduleOverlap(availabilities);

  overlap.forEach((res) => {
    console.log(`${wa.format(res.interval)}: ${res.count}`);
  });
};

main();
