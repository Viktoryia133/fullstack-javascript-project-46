import parseFile from './parsers.js';
import diff from './buildDiff.js';

const parser = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  return diff(data1, data2);
};

export default parser;
