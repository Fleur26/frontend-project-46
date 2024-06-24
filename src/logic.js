import fs from 'fs';
import path from 'path';

export const readFile = (filePath) => {
  const dirName = process.cwd(filePath);
  const fullPath = path.resolve(dirName, filePath);
  return fs.readFileSync(fullPath, 'utf-8');
};

export const getFormat = (fileName) => {
  const result = fileName.split('.');
  return result.at(-1);
};
