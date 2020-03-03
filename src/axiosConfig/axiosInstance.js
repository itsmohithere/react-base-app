// import axios from 'axios';

// export const instance = axios.create({
//   baseURL: 'http://dummy.restapiexample.com/api/v1/employees',
//   timeout: '1000',
//   headers: {'X-Custom-Header': 'foobar'}
// });

import Axios from 'axios';
import get from 'lodash/get';
import JWTService from '../services/JWTService';

const defaultOptions = () => ({
  headers: {
    'access-token': `Bearer ${JWTService.getAccessToken()}`,
  },
});

const axios = Axios.create(defaultOptions());

class API {
  static requestDelete(url) {
    return axios.delete(url, defaultOptions());
  }
  static requestPut(url, payload) {
    return axios.put(url, payload, defaultOptions());
  }
  static requestPost(url, payload) {
    return axios.post(url, payload, defaultOptions());
  }
  static requestGet(url) {
    return new Promise((resolve, reject) => {
      axios.get(url, defaultOptions()).then(resolve, (errorAxios) => {
        try {
          const { response } = errorAxios;
          const { data } = response;
          if (data.data.error_message === 'group_not_found') {
            return resolve({ pageError: true, message: `${data.data.message}. <br /><a href="/">Back to Home</a>` });
          }
          reject(errorAxios);
        } catch (e) {
          reject(errorAxios);
        }
        return false;
      });
    });
  }
  static safeGet(url) {
    return new Promise((resolve) => {
      axios.get(url, defaultOptions()).then(resolve, ({ response }) => {
        const { data } = response;
        const { errors } = JSON.parse(data);
        const errorCode = get(errors, '[0].code');
        const errorMsg = (errorCode === 'FACTIVA520160') ? 'FactivaID' : 'Error';
        resolve({ isError: errorMsg });
      }).catch(() => {
        resolve({ isError: 'Error' });
      });
    });
  }
}
export default API;
export { axios };
