import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export const options = {
  maxRedirects: 0,
  stages: [
    // ramp up
    { target: 60, duration: '30s' },
    // sustain
    { target: 60, duration: '1m' },
    // ramp down
    { target: 0, duration: '30s' },
  ],
};

export default function () {
  const random = Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
  group(`page_1 - http://localhost:9000/?${random}`, () => {
    let req;
    let res;
    req = [{
      method: 'get',
      url: `http://localhost:9000/?${random}`,
      params: {
        headers: {
          Host: 'localhost:9000',
          Connection: 'keep-alive',
          'Cache-Control': 'max-age=0',
          DNT: '1',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-User': '?1',
          'Sec-Fetch-Dest': 'document',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9,la;q=0.8',
          'If-None-Match': 'W/"101-1722f103adf"',
          'If-Modified-Since': 'Tue, 19 May 2020 22:31:32 GMT',
        },
      },
    }, {
      method: 'get',
      url: 'https://fonts.googleapis.com/css?family=Montserrat',
      params: {
        headers: {
          Referer: `http://localhost:9000/?${random}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          DNT: '1',
        },
      },
    }, {
      method: 'get',
      url: 'http://localhost:9000/photoBannerBundle.js',
      params: {
        headers: {
          Host: 'localhost:9000',
          Connection: 'keep-alive',
          DNT: '1',
          'If-None-Match': 'W/"156ce9-17262a83eca"',
          'If-Modified-Since': 'Fri, 29 May 2020 22:58:12 GMT',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          Accept: '*/*',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Dest': 'script',
          Referer: `http://localhost:9000/?${random}`,
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9,la;q=0.8',
        },
      },
    }, {
      method: 'get',
      url: 'https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2',
      params: {
        headers: {
          Referer: '',
        },
      },
    }, {
      method: 'get',
      url: 'https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2',
      params: {
        headers: {
          Referer: '',
        },
      },
    }, {
      method: 'get',
      url: 'https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2',
      params: {
        headers: {
          Referer: '',
        },
      },
    }, {
      method: 'get',
      url: 'https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2',
      params: {
        headers: {
          Referer: '',
        },
      },
    }, {
      method: 'get',
      url: 'https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2',
      params: {
        headers: {
          Referer: '',
        },
      },
    }, {
      method: 'get',
      url: `http://localhost:9000/api/photos/${random}`,
      params: {
        headers: {
          Host: 'localhost:9000',
          Connection: 'keep-alive',
          Accept: '*/*',
          DNT: '1',
          'X-Requested-With': 'XMLHttpRequest',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          Referer: `http://localhost:9000/?${random}`,
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9,la;q=0.8',
        },
      },
    }, {
      method: 'get',
      url: 'https://my-sdc-photos.s3.us-east-2.amazonaws.com/sdc961.jpg',
      params: {
        headers: {
          Referer: `http://localhost:9000/?${random}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          DNT: '1',
        },
      },
    }, {
      method: 'get',
      url: 'https://my-sdc-photos.s3.us-east-2.amazonaws.com/sdc440.jpg',
      params: {
        headers: {
          Referer: `http://localhost:9000/?${random}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          DNT: '1',
        },
      },
    }, {
      method: 'get',
      url: 'https://my-sdc-photos.s3.us-east-2.amazonaws.com/sdc136.jpg',
      params: {
        headers: {
          Referer: `http://localhost:9000/?${random}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          DNT: '1',
        },
      },
    }, {
      method: 'get',
      url: 'https://my-sdc-photos.s3.us-east-2.amazonaws.com/sdc589.jpg',
      params: {
        headers: {
          Referer: `http://localhost:9000/?${random}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          DNT: '1',
        },
      },
    }, {
      method: 'get',
      url: 'https://my-sdc-photos.s3.us-east-2.amazonaws.com/sdc592.jpg',
      params: {
        headers: {
          Referer: `http://localhost:9000/?${random}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
          DNT: '1',
        },
      },
    }];
    res = http.batch(req);
    sleep(0.01);
  });
}
