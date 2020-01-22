import http from '../http';

export default {
  async userInfo() {
    return http.get('/user/account/info');
  },
};
