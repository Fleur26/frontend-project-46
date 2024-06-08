 
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import buildAst from './builder.js';


const readFile = (filePath) => {
    const dirName = process.cwd(filePath);
    const fullPath = path.resolve(dirName, filePath);
    return fs.readFileSync(fullPath, 'utf-8');
}

const getFormat = (fileName) => {
  const result = fileName.split('.');
  return result.at(-1);
}

const findDiff = (obj1, obj2) => {
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

return buildAst(keys1, keys2)
}


export {readFile, findDiff, getFormat};