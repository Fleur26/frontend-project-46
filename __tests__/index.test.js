import { test, expect } from '@jest/globals';
import { findDiff } from '../src/logic.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('float obj', () => {
expect(findDiff(readFile(expected1.json), readFile(expected2.json))).expect(readFile(expected1.txt));
});