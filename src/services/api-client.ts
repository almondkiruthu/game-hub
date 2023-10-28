import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f5b56fb4fcdc43df8c293b0c1d550edf',
  },
});
