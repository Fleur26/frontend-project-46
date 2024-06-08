 
import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
    const dirName = process.cwd(filePath);
    const fullPath = path.resolve(dirName, filePath);
    return fs.readFileSync(fullPath, 'utf-8');
}

const getFormat = (fileName) => {
  const result = fileName.split('.');
  return result.at(-1);
}


export {readFile, getFormat};