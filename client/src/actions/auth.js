import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //login user
    navigate.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //signup user
    navigate.push("/");
  } catch (error) {
    console.log(error);
  }
};
