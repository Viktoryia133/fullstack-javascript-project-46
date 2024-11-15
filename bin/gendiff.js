#!/usr/bin/env node

import { Option, program } from 'commander';
import gendiff from '../src/index.js';

program
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
  .addOption(new Option('-f, --format <type>', 'output format', 'stylish').choices(['stylish', 'plain', 'json']))
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((path1, path2, options) => console.log(gendiff(path1, path2, options.format)));

program.parse();
