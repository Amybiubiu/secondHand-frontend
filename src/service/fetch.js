

  
//import 'whatwg-fetch';
import Notification from 'rc-notification';

const Fetch = (url, opt = {}) => {
  opt.method = opt.method || 'GET';
  opt.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  if (opt.token) {
    opt.headers.token = opt.token;
  }

  opt.body = JSON.stringify(opt.data) || null;

  return fetch(url, opt)
    .then(response => {
      if (response.ok) {
        return response.json().then(res => {
          return res;
        });
      } else {
        return response.json().then(res => {
          return new Promise((_, reject) => {
            console.log(res);
            reject(res);
          });
        });
      }
    })
    .catch(e => {
      Notification.newInstance({}, notification => {
        notification.notice({
          content: `服务端错误：${e.message}`
        });
      });
      // 切断下一个 then 调用
      throw e;
    });
}

export default Fetch;