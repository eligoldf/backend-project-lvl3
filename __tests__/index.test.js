import os from 'os';
import path from 'path';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { promises as fs } from 'fs';
import {
  test, beforeEach, beforeAll, expect,
} from '@jest/globals';
import extractUrl from '../src/utils';

nock.disableNetConnect();

beforeEach(async () => {
  await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

// test('extractUrl', () => {
//   const baseUrl = 'https://ru.hexlet.io/courses';
//   const extractedUrl = 'ru-hexlet-io-courses.html';
//   expect(extractUrl(baseUrl)).toBe(extractedUrl);
// });

test('must work', async () => {

})