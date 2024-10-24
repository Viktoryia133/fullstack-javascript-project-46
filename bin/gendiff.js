#!/usr/bin/env node

import { Command } from 'commander';
import parser from '../src/index.js';

const program = new Command();

program
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(parser(filepath1, filepath2));
  });
program.parse();
