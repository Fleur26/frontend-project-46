import { readFile, findDiff, getFormat } from "./logic.js";
import { parse } from "./parsers.js";

const genDiff = (filepath1,filepath2) => {
const data1 = readFile(filepath1);
const data2 = readFile(filepath2);
const format1 = getFormat(filepath1);
const format2 = getFormat(filepath2);
const parseData1 = parse(data1, format1);
const parseData2 = parse(data2, format2);
const result = findDiff(parseData1, parseData2);
return result;
}

export default genDiff;