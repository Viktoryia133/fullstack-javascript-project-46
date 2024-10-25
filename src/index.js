import { readFileSync } from 'fs';

import path from 'path';
import _ from 'lodash';

const diff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  keys.sort();
  const result = [];
  result.push('{');
  // eslint-disable-next-line array-callback-return
  keys.map((key) => {
    // если равны ключи и значения
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        result.push(`    ${key}: ${data1[key]}`);
      }
    }
    // если равны ключи но значения разные
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] !== data2[key]) {
        result.push(`  - ${key}: ${data1[key]}`);
        result.push(`  + ${key}: ${data2[key]}`);
      }
    }
    // если ключ есть в первом файле, но нет во втором
    if (_.has(data1, key) && !_.has(data2, key)) {
      result.push(`  - ${key}: ${data1[key]}`);
    }
    // если ключ есть во втором файле, но нет в первом
    if (!_.has(data1, key) && _.has(data2, key)) {
      result.push(`  + ${key}: ${data2[key]}`);
    }
  });
  result.push('}');
  return result.join('\n');
};
const parser = (filepath1, filepath2) => {
  const data1 = readFileSync(path.resolve(filepath1), 'utf8');
  const data2 = readFileSync(path.resolve(filepath2), 'utf8');
  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);
  return diff(dataParse1, dataParse2);
};
console.log(parser('C:/Users/37525/OneDrive/Desktop/my projects/mind games/fullstack-javascript-project-46/file1.json', 'C:/Users/37525/OneDrive/Desktop/my projects/mind games/fullstack-javascript-project-46/file2.json'));
export default parser;
