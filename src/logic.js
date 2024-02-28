import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
    const dirName = process.cwd(filePath);
    const fullPath = path.resolve(dirName, filePath);
    return fs.readFileSync(fullPath, 'utf-8');
}

const findDiff = (obj1, obj2) => {
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);
const diffrents  = {};
for (let key of keys1){   
diffrents[key] = obj1[key];
}
return diffrents;
}
export {readFile, findDiff};