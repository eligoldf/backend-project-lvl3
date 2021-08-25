import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';

const extractUrl = (baseUrl) => {
  const { hostname, pathname } = new URL(baseUrl);
  const joinedPath = path.join(hostname, pathname).replace(/\W/g, '-');
  return joinedPath.concat('.html');
};

const pageLoader = (urlName, dirName) => axios.get(urlName)
  .then((response) => {
    const fileName = extractUrl(urlName);
    fs.writeFile(path.join(dirName, fileName), response.data);
    console.log(response.data);
    return 'Done';
  });

export default pageLoader;
