import { server } from "../store";
import axios from "axios";

export const getAllTeachers =
  (category="", keyword="") =>
  async (dispatch) => {
    try {
      dispatch({ type: "allTeachersRequest" });

      const { data } = await axios.get(
        `api/v1/teachers?keyword=${keyword}&category=${category}`
      );

      dispatch({ type: "allTeachersSuccess", payload: data.teachers });
    } catch (error) {
      dispatch({
        type: "allTeachersFail",
        payload: error.response.data.message,
      });
    }
  };

export const gettopteachers = () => async (dispatch) => {
  try {
    dispatch({ type: "topTeachersRequest" });

    const { data } = await axios.get(
      `/api/v1/gettopteachers`
    );

    dispatch({ type: "topTeachersSuccess", payload: data.teachers });
  } catch (error) {
    dispatch({
      type: "topTeachersFail",
      payload: error.response.data.message,
    });
  }
};

export const getCourseLectures = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getCourseRequest" });

    const { data } = await axios.get(`/api/v1/course/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getCourseSuccess", payload: data.lectures });
  } catch (error) {
    dispatch({
      type: "getCourseFail",
      payload: error.response.data.message,
    });
  }
};
