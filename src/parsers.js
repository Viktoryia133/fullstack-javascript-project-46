import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

// eslint-disable-next-line consistent-return
const parseFile = (filepath) => {
  const fileExtension = path.extname(filepath);

  if (fileExtension === '.json') {
    const fileContent = fs.readFileSync(path.resolve(filepath));
    return JSON.parse(fileContent);
  }
  if (fileExtension === '.yml' || fileExtension === '.yaml') {
    const fileContent = fs.readFileSync(filepath, 'utf8');
    return yaml.load(fileContent);
  }
};
export default parseFile;
