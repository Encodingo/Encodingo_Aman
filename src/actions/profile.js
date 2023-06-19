import axios from "axios";
import server from "../store.js";

export const updateProfile =
  (name, email, phone, address, grade) => async (dispatch) => {
    try {
      dispatch({ type: "updateProfileRequest" });

      const { data } = await axios.put(
        `api/v1/updateprofile`,
        {
          name,
          email,
          phone,
          address,
          grade,
        },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch({ type: "updateProfileSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "updateProfileFail",
        payload: error.response.data.message,
      });
    }
  };

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });

      const { data } = await axios.put(
        `api/v1/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch({ type: "changePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "changePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/forgetpassword`,
      {
        email,
      },
      config
    );

    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });
    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/resetpassword/${token}`,
      {
        password,
      },
      config
    );

    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "resetPasswordFail",
      payload: error.response.data.message,
    });
  }
};
