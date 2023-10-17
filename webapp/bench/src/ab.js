import http from 'k6/http';

const BASE_URL= 'http://isu-nginx/';

export default function () {
  http.get(`${BASE_URL}`);
}
