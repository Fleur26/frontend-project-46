import { readFile } from "./logic.js";
import { parse } from "./parser.js";

export default (filepath1,filepath2) => {
const data1 = readFile(filepath1);
const data2 = readFile(filepath2);
const parseData1 = parse(data1);
const parseData2 = parse(data2);
const result = parseData1.host;
return result;
}