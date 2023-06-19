// import { server } from '../store';
import axios from "axios";
const server = "api/v1";
export const createCourse = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    dispatch({ type: "createCourseRequest" });

    const { data } = await axios.post(`/api/v1/createcourse`, formData, config);

    dispatch({ type: "createCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const createTeacher = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    dispatch({ type: "createTeacherRequest" });

    const { data } = await axios.post(`/api/v1/createteacher`,formData,config);

    dispatch({ type: "createTeacherSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createTeacherFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteCourseRequest" });

    const { data } = await axios.delete(`/api/v1/course/${id}`, config);

    dispatch({ type: "deleteCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteTeacherRequest" });

    const { data } = await axios.delete(`/api/v1/teacher/${id}`, config);

    dispatch({ type: "deleteTeacherSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTeacherFail",
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id, formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    dispatch({ type: "addLectureRequest" });

    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );

    dispatch({ type: "addLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteLectureRequest" });

    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );

    dispatch({ type: "deleteLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllUsersRequest" });

    const { data } = await axios.get(`/api/v1/admin/users`, config);

    dispatch({ type: "getAllUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllCoursesAdmin = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminCoursesRequest" });

    const { data } = await axios.get(`/api/v1/admin/courses`, config);

    dispatch({ type: "getAdminCoursesSuccess", payload: data.courses });
  } catch (error) {
    dispatch({
      type: "getAdminCoursesFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllTeachersAdmin = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminTeachersRequest" });

    const { data } = await axios.get(`/api/v1/admin/teachers`, config);

    dispatch({ type: "getAdminTeachersSuccess", payload: data.teachers });
  } catch (error) {
    dispatch({
      type: "getAdminTeachersFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUserRole = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "updateUserRoleRequest" });

    const { data } = await axios.put(`/api/v1/admin/user/${id}`, {}, config);

    dispatch({ type: "updateUserRoleSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateUserRoleFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(`/api/v1/admin/user/${id}`, config);

    dispatch({ type: "deleteUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const getDashboardStats = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminStatsRequest" });

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch({ type: "getAdminStatsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminStatsFail",
      payload: error.response.data.message,
    });
  }
};
