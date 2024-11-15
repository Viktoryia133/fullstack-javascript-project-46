import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import parser from '../src/parser.js';
import format from '../formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '___fixtures___', filename);

test('file json stylish', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const resultName = getFixturePath('result_stylish.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(format(parser(filepath1, filepath2), 'stylish')).toBe(result);
});

test('file json plain', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const resultName = getFixturePath('result_plain.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(format(parser(filepath1, filepath2), 'plain')).toBe(result);
});

test('file json format: json', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const resultName = getFixturePath('result_json.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(format(parser(filepath1, filepath2), 'json')).toEqual(result);
});
