import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./CourseList.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {
//   clearErrors,
//   getAdminProduct,
//   deleteProduct,
// } from "../../actions/productAction";
import { Link } from "react-router-dom";
// import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import AdminSidebar from "./AdminSidebar";
import { getAllCourses } from "../../actions/course";
import { toast } from "react-hot-toast";
import { deleteCourse, getAllCoursesAdmin } from "../../actions/admin";

const ProductList = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // const alert = useAlert();

  // const {  } = useSelector(state => state.course);

  const {courses, loading, error, message } = useSelector(state => state.admin);

  // const { error: deleteError, isDeleted } = useSelector(
  //   (state) => state.product
  // );

  const deleteButtonHandler = courseId => {
    dispatch(deleteCourse(courseId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    dispatch(getAllCoursesAdmin());
  }, [dispatch, error, message]);

  const columns = [
    { field: "id", headerName: "Course ID", minWidth: 200, flex: 0.7 },

    {
      field: "numOfVideos",
      headerName: "Lecture",
      // type: "number",
      minWidth: 50,
      flex: 0.4,
    },

    {
      field: "level",
      headerName: "Level",
      minWidth: 20,
      flex: 0.4,
    },
    {
      field: "category",
      headerName: "Category",
      // type: "number",
      minWidth: 40,
      flex: 0.4,
    },

    {
      field: "price",
      headerName: "Price",
      // type: "number",
      minWidth: 20,
      flex: 0.5,
    },

    {
      field: "duration",
      headerName: "Duration",
      // type: "number",
      minWidth: 40,
      flex: 0.4,
    },

    {
      field: "rating",
      headerName: "rating",
      // type: "number",
      minWidth: 40,
      flex: 0.4,
    },

    {
      field: "users",
      headerName: "Users",
      // type: "number",
      minWidth: 40,
      flex: 0.4,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
           

            <Button
            onClick={() =>
              deleteButtonHandler(params.getValue(params.id, "id"))
            }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  courses &&
    courses.forEach((item) => {
      rows.push({
        id: item._id,
        category: item.category,
        price: item.price,
        numOfVideos: item.numOfVideos,
        level: item.level,
        duration: item.duration,
        rating: item.rating,
        users: item.users
      });
    });

  return (
    <Fragment>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}

      <div className="admin-dashboard">
        <AdminSidebar />
        <div className="courseListContainer">
          <h1 id="courseListHeading">ALL COURSES</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="courseListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
