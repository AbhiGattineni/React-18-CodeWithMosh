import axios, { Axios, AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07475b09680642a982c574f220fd7b17",
  },
});

class apiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };
  getOne = (slug: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then((response) => response.data);
  };
}

export default apiClient;
