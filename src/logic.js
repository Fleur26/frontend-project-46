import fs from 'fs';
import path from 'path';
import _ from 'lodash';


const readFile = (filePath) => {
    const dirName = process.cwd(filePath);
    const fullPath = path.resolve(dirName, filePath);
    return fs.readFileSync(fullPath, 'utf-8');
}

const findDiff = (obj1, obj2) => {
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);
const diffrents  = _.sortBy(_.union(keys1,keys2)).map((key) => {   
    if(Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)){
        return obj1[key] === obj2[key]? ` ${key} = ${obj1[key]}` : `- ${key} = ${obj1[key]}\n+ ${key} = ${obj2[key]}`
    }
    return `+ ${key} = ${obj2[key]}`
})
return `{\n${diffrents.join('\n')}\n}`;
}
export {readFile, findDiff};