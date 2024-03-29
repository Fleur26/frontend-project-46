import fs from 'fs';
import path from 'path';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('obj, json', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('expected2.txt'));
    });

    test('obj, json, plain', () => {
        expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('expected2.txt'));
        });