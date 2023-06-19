import React, { useEffect } from "react";
import "../../assets/css/style.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../../actions/userAction";
import { toast } from "react-hot-toast";

const UserProfileCard = () => {
  const { user } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const updatepass = () => {
    Navigate("/user_changepass");
  };
  const updateprofile = () => {
    Navigate("/user_updateprofile");
  };

  
  return (
    <>
      <div className="blog-card">
        <div className="card-content">
          <h3 className="h3">Name : {user.name}</h3>

          <h3 className="h3">Email : {user.email}</h3>

          <h3 className="h3">Phone : {user.phone}</h3>
          <h3 className="h3">Created : {user.createdAt.split("T")[0]}</h3>
          {user.grade ? (
            <h3 className="h3">Grade : {user.grade}</h3>
          ) : (
            <h3 className="h3">Grade : No data</h3>
          )}
          {user.address ? (
            <h3 className="h3">Address : {user.address}</h3>
          ) : (
            <h3 className="h3">Address : No data</h3>
          )}
          <div className="card-buttons-user">
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "10vw", marginTop: "20px", fontSize: "12px" }}
              onClick={updateprofile}
            >
              Update Profile
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "12vw", marginTop: "20px", fontSize: "12px" }}
              onClick={updatepass}
            >
              Change Pass
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
