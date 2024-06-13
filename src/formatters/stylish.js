import _ from 'lodash';
import path from 'path';
import fs from 'fs';

function readFile(filePath) {
  const dirName = process.cwd(filePath);
  const fullPath = path.resolve(dirName, filePath);
  return fs.readFileSync(fullPath, 'utf-8');
}

function getExtension(filename) {
  const result = filename.split('.');
  return result.at(-1);
}

function makeStylish(obj1, obj2) {
  const allKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2))).map((key) => {
    const oldValue = obj1[key];
    const newValue = obj2??[key];
    if (!_.has(obj2, key)) {
      return {
        action: 'deleted',
        key,
        oldValue,
      };
    }
    if (!_.has(obj1, key)) {
      return {
        action: 'added',
        key,
        newValue,
      };
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return {
        action: 'nested',
        key,
        children: makeStylish(oldValue, newValue),
      };
    }
    if (oldValue !== newValue) {
      return {
        action: 'changed',
        key,
        oldValue,
        newValue,
      };
    }
    return {
      action: 'unchanged',
      key,
      oldValue,
    };
  });
  return allKeys;
}

export { readFile, makeStylish, getExtension };