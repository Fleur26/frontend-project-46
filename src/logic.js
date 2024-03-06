/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import _ from 'lodash';


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
//const diffrents  = _.sortBy(_.union(keys1,keys2)).map((key) => {   
//    if(Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)){
//        return obj1[key] === obj2[key]? `  ${key} = ${obj1[key]}` : `- ${key} = ${obj1[key]}\n+ ${key} = ${obj2[key]}`
//    }
//   else if(typeof key === 'object'){
//       return `${key}: ${findDiff(key)}`;
//    }
//    return obj1[key] === undefined?`+ ${key} = ${obj2[key]}` : `+ ${key} = ${obj1[key]}`;
//});
//return `{\n${diffrents.join('\n')}\n}`;

const diffrents  = _.sortBy(_.union(keys1,keys2)).map((key) => { 
    if(!Object.hasOwn(obj1, key)){
        return { type: 'added', key: key, val: obj2[key] };
    }
    else if (!Object.hasOwn(obj2, key)){
        return { type: 'deleted', key: key, val: obj1[key] };
    }
    else if (_.isObject(obj1[key]) && _.isObject(obj2[key])){
        return  { type: 'recursion', key: key, children: findDiff(obj1[key], obj2[key]) }
    }
    else if (obj1[key] !== obj2[key]){
        return { type: 'changed', key: key, val: obj2[key] };
    }
    else if (obj1[key] !== obj2[key]){
        return { type: 'unchanged', key: key, val: obj1[key] };
    }
});

return diffrents;
}


export {readFile, findDiff, getFormat};