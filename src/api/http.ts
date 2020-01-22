import request from '../utils/request';
const get = async (url: string) => {
  return request.get(url, {
    headers: {
      'Token': window.sessionStorage.getItem('tolen') || null,
      'Token-Id': window.sessionStorage.getItem('userId') || null,
    },
  });
};
export default {
  get,
};
