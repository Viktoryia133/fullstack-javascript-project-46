import parser from './parser.js';
import format from '../formatters/index.js';

export default (filepath1, filepath2, formatOption) => `${format(parser(filepath1, filepath2), formatOption)}`;
