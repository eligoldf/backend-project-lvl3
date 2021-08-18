#!/usr/bin/env node

import program from 'commander';
import pageLoader from '../src';
// import { version } from '../package.json';

program
  .option('-V, --version', 'output the version number')
  .option('-o, --output [dir]', 'output dir')
  .option('-h, --help', 'display help for command')
  .action((url) => pageLoader(url, program.output));

program.parse(process.argv);
if (program.args.length === 0) program.help();
