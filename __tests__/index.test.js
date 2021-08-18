import os from 'os';
import path from 'path';
import nock from 'nock';
import { promises as fs } from 'fs';
import {
  test, beforeEach, expect,
} from '@jest/globals';
import pageLoader from '../src';

// nock.disableNetConnect();

const baseUrl = 'https://hexlet.io';

const pathToHtml = `${__dirname}/__fixtures__/index.html`;

let tmpDir = '';

beforeEach(async () => {
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

test('pageLoader', async () => {
  const responseBody = await fs.readFile(pathToHtml, 'utf-8');

  nock(baseUrl)
    .get('/courses')
    .reply(200, responseBody);

  const promise = pageLoader(`${baseUrl}/courses`, tmpDir);
  await expect(promise).resolves.toBe('Done');
  const result = await fs.readFile(`${tmpDir}/hexlet-io-courses.html`, 'utf-8');
  expect(result).toBe(responseBody);
});
