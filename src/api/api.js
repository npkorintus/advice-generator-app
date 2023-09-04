import axios from 'axios';

// const url = 'https://api.adviceslip.com/advice';
// axios.get(url);

// const client = axios.create({
//   baseURL: 'https://api.adviceslip.com/advice'
// });

// const getAdvice = () => {
//   client.get();
// }

// export default axios.create({
//   baseURL: 'https://api.adviceslip.com/advice',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

const api = axios.create({
  baseURL: 'https://api.adviceslip.com/advice',
  headers: {
    'Content-Type': 'application/json'
  }
});

const getAdvice = () => {
  return api.get();
}

const AdviceAPI = { getAdvice };

export default AdviceAPI;
