import { AppThunk } from "../../store";
import { AuthApi } from "@services/api";
import { LoginRequestInterface } from "@services/api/interfaces";
import { setGlobalMessage, setUser } from "./reducer";
import Cookies from 'js-cookie'

export const loginThunk = (payload: LoginRequestInterface): AppThunk => {
  return async (dispatch) => {
    try {
      const user = await AuthApi.login(payload);
      const { email, username, tasks, _id, token } = user;
      Cookies.set('token', token, { expires: 60 })
      localStorage.setItem("auth-token", token);
      dispatch(
        setUser({
          email,
          username,
          tasks,
          id: _id,
        })
      );
    } catch (e) {
      dispatch(
        setGlobalMessage({
          type: "error",
          message: "Login failed",
          showIcon: true,
        })
      );
    }
  };
};

export const testTh = (): AppThunk => {
  return async (dispatch) => {
    alert('111')
  }}
