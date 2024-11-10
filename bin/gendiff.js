#!/usr/bin/env node

import { Command } from 'commander';
import parser from '../src/parser.js';
import format from '../src/stylish.js';

const program = new Command();

program
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>');
program.parse();
const { args } = program;
program.action(console.log(`${format(parser(args[0], args[1]), program.opts().format)}`));
