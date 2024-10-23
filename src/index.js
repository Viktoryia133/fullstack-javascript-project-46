import { readFileSync } from 'fs';

import path from 'path';

const parser = (filepath1, filepath2) => {
  const data1 = readFileSync(path.resolve(filepath1), 'utf8');
  const data2 = readFileSync(path.resolve(filepath2), 'utf8');
  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);
  console.log(dataParse1, dataParse2);
};
parser('C:/Users/37525/OneDrive/Desktop/my projects/mind games/fullstack-javascript-project-46/file1.json', 'C:/Users/37525/OneDrive/Desktop/my projects/mind games/fullstack-javascript-project-46/file2.json');
export default parser;
