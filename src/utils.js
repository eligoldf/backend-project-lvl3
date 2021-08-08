import path from 'path';
// import _ from 'lodash';

const extractUrl = (baseUrl) => {
  const { hostname, pathname } = new URL(baseUrl);
  const joinedPath = path.join(hostname, pathname).replace(/\W/g, '-');
  return joinedPath.concat('.html');
};

export default extractUrl;
