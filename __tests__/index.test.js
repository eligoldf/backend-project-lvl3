/* eslint-disable no-underscore-dangle */
import os from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import nock from 'nock';
import { promises as fs } from 'fs';
import {
  test, beforeEach, expect, beforeAll,
} from '@jest/globals';
import pageLoader from '../src';

nock.disableNetConnect();

const baseUrl = 'https://hexlet.io';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let expected;
let tmpDir;

beforeEach(async () => {
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

beforeAll(async () => {
  expected = await getFixturePath('index.html');
});

test('pageLoader', async () => {
  const responseBody = await fs.readFile(expected, 'utf-8');

  nock(baseUrl)
    .get('/courses')
    .reply(200, responseBody);

  const promise = pageLoader(`${baseUrl}/courses`, tmpDir);
  await expect(promise).resolves.toBe('Done');
  const result = await fs.readFile(`${tmpDir}/hexlet-io-courses.html`, 'utf-8');
  expect(result).toBe(responseBody);
});
