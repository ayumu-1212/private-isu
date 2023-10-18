const BASE_URL= 'http://isu-nginx';

export function url(path) {
  return `${BASE_URL}${path}`;
}
