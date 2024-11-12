#!/usr/bin/env node

import { Option, program } from 'commander';
import parser from '../src/parser.js';
import format from '../formatters/index.js';

program
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .addOption(new Option('-f, --format <type>', 'output format', 'stylish').choices(['stylish', 'plain']))
  .argument('<filepath1>')
  .argument('<filepath2>');
program.parse();
const { args } = program;
program.action(console.log(`${format(parser(args[0], args[1]), program.opts().format)}`));
