import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json', 'stylish', readFixture('expected2.txt')],
  ['yml', 'stylish', readFixture('expected2.txt')],
  ['yml', 'plain', readFixture('expected1.txt')],
  ['json', 'json', readFixture('expected1.txt')],
  ['yml', 'json', readFixture('expected.txt')],
])('all test gendiff', (extension, format, expected) => {
  expect(genDiff(getFixturePath(`file1.${extension}`), getFixturePath(`file2.${extension}`), format)).toEqual(expected);
});