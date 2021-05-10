import axios                                                                                       from "axios";
import { LoginRequestInterface, ResponseErrorInterface, ResponseInterface, UserResponseInterface } from "@services/api/interfaces";

const BASE_URL = "http://localhost:5050/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-token");
  if (token) {
    config.headers["token"] = token;
  }
  return config;
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      //store.dispatch(logout())
    }
    return Promise.reject(error);
  }
);

export const AuthApi = {
  async login(payload: LoginRequestInterface): Promise<UserResponseInterface> {
    const { data } = await instance.post<ResponseInterface<UserResponseInterface>>(
      "/auth/login",
      payload
    );
    return data.data;
  },
};
