import axios from 'axios';
import router from '../router';

const DOMAIN = 'http://localhost:8080';
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push('/auth/login');
};

const request = (method, url, data) => axios({
  method,
  url: DOMAIN + url,
  data,
})
  .then((res) => res.data)
  .catch((res) => {
    const { status } = res.response;
    if (status === UNAUTHORIZED) return onUnauthorized();
    throw Error(res);
  });

export const login = {
  fetch() {
    return request('post', '/login', {
      id: 'superadmin',
      password: 'qwer1234!',
      companySchema: 'a2fw1',
    });
  },
};
export const signup = {
  fetch() {
    return request('post', '/register', {
      companySchema: 'a2fw1',
      id: 'lsj1031',
      password: 'qwer1234!',
      confirmPassword: 'qwer1234!',
      name: '이승재',
      phoneNumber: '01064300932',
      mailAddress: 'aaa@naver.com',
    });
  },
};
