import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f5b56fb4fcdc43df8c293b0c1d550edf',
  },
});

export default apiClient;

// import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "c7b18323a47d40c394ea5b019646b1f5",
//   },
// });