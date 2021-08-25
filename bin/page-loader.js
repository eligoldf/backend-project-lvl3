#!/usr/bin/env node

import program from 'commander';
import pageLoader from '../src/index.js';

program
  .version('1.0.0')
  .description('Page loader utility')
  .option('-o, --output [pathToDir]', 'Output directory', process.cwd())
  .arguments('<url>')
  .action((url, { output }) => console.log(pageLoader(url, output)))
  .parse(process.argv);
