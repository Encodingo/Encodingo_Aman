import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./CourseList.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteTeacher, getAllTeachersAdmin} from "../../actions/admin";
import { toast } from "react-hot-toast";
import AdminSidebar from "./AdminSidebar";
import { getAllTeachers } from "../../actions/teacher";

const UsersList = () => {
  const { teachers, loading, error, message } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

//   const updateHandler = (userId) => {
//     console.log(userId);
//     dispatch(updateUserRole(userId));
//   };
  const deleteButtonHandler = (userId) => {
    dispatch(deleteTeacher(userId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    dispatch(getAllTeachersAdmin());
  }, [dispatch, error, message]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
        field: "name",
        headerName: "Name",
        minWidth: 150,
        flex: 0.5,
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

  teachers &&
    teachers.forEach((item) => {
      rows.push({
        id: item._id,
        rating: item.rating,
        name: item.name,
      });
    });

  return (
    <Fragment>
      {/* <MetaData title={`ALL USERS - Admin`} /> */}

      <div className="admin-dashboard">
        <AdminSidebar />
        <div className="courseListContainer">
          <h1 id="courseListHeading">ALL Teachers</h1>

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

export default UsersList;
