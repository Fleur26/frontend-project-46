import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json', 'stylish', readFixture('expected1.txt')],
  ['yml', 'stylish', readFixture('expected2txt')],
  ['json', 'plain', readFixture('file1.json')],
  ['yml', 'plain', readFixture('file1.yml')],
  ['json', 'json', readFixture('file2.json')],
  ['yml', 'json', readFixture('file2.yml')],
])('all test gendiff', (extension, format, expected) => {
  expect(genDiff(getFixturePath(`file1.${extension}`), getFixturePath(`file2.${extension}`), format)).toEqual(expected);
});