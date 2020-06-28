import axios from 'axios';
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // timeout:100,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

class Axios {

  static axiosGet(urlEndPoint) {
    console.log({urlEndPoint}, axiosInstance)

    axiosInstance.get(urlEndPoint)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    })
  }

}

export default Axios;
