import http from 'k6/http';
import { check, fail } from 'k6';

export const options = { maxRedirects: 10 };

const baseURL = 'http://localhost:9000/?';

export default function () {
  let count = 500;
  function test() {
    const random = Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
    const decimal = Math.random();
    let res = http.get(`${baseURL}${random}`);
    const formdata = {
      photoId: 1 + decimal,
      photo: 'https://images.homedepot-static.com/productImages/f462fece-17b6-4e62-8575-3b12afcbbb80/svn/gold-applied-icon-wall-decals-nfop2103-64_1000.jpg',
      description: 'Amazing',
      verified: 'Photo Verified by NFL Greats',
    };
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    res = http.post(`${baseURL}${random}`, formdata, { headers });
    count --;
    check(res, {
      'post succeeded': (res) => res.url == `${baseURL}${random}`,
    }) || fail('post failed');
  }
  while(count) {
    test();
  }
}
