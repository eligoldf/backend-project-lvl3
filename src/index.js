import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import extractUrl from './utils';

const pageLoader = (urlName, dirName = __dirname) => axios.get(urlName)
  .then((response) => {
    const fileName = extractUrl(urlName);
    fs.writeFile(path.join(dirName, fileName), response.data);
    return 'Done';
  });

export default pageLoader;
