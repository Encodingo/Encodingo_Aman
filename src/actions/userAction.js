// import {
//   LOGIN_REQUEST,
//   LOGIN_FAIL,
//   LOGIN_SUCCESS,
//   REGISTER_USER_REQUEST,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_FAIL,
//   LOAD_USER_REQUEST,
//   LOAD_USER_SUCCESS,
//   LOAD_USER_FAIL,
//   LOGOUT_SUCCESS,
//   LOGOUT_FAIL,
//   CLEAR_ERRORS,
// } from "../constants/userConstants";

import axios from "axios";
export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    );

    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const register = (name,email,phone,password) => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });
    //  console.log(formdata)
    const { data } = await axios.post(`/api/v1/register`, {name,email,phone,password}, {
      headers: {
        'Content-type': 'application/json',
      },
       withCredentials: true,
    });

    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};


export const verify = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "verificationRequest" });

    const { data } = await axios.post(
      `/api/v1/verify`,
      { otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "verificationSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "verificationFailure",
      payload: error.response.data.message,
    });
  }
};




export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`/api/v1/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.get(
      `/api/v1/me`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};


