import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f5b56fb4fcdc43df8c293b0c1d550edf',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;

// import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "c7b18323a47d40c394ea5b019646b1f5",
//   },
// });
