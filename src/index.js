import { readFile, getFormat } from "./logic.js";
import findDiff from './builder.js';
import { parse } from "./parsers.js";
import makeFormat from "../src/formatters/index.js";


const genDiff = (filepath1, filepath2, format = 'stylish') => {
const data1 = readFile(filepath1);
const data2 = readFile(filepath2);
const format1 = getFormat(filepath1);
const format2 = getFormat(filepath2);
const parseData1 = parse(data1, format1);
const parseData2 = parse(data2, format2);
const result = findDiff(parseData1, parseData2);
const resultWithFormat = makeFormat(result, format);

return resultWithFormat;
}

export default genDiff;