import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('float obj', () => {
expect(genDiff(getFixturePath(example1.json), getFixturePath(example2.json))).toEqual(readFile(expected1.txt));
});