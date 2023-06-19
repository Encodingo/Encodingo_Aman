import React, { Fragment, useEffect, useState } from "react";
import "./CreateCourse.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AdminSidebar from "./AdminSidebar";
import { toast } from "react-hot-toast";
import { createTeacher } from "../../actions/admin";
import { useNavigate } from "react-router-dom";

const CreateTeacher = () => {
  const categories = ["Coding", "English"];
  const levels = ["Bignner", "Medium" , "Advance"];
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  // const [description, setDescription] = useState('');
  const [bio, setBio] = useState("");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState("");
  const [session, setSession] = useState("");
  const [category, setCategory] = useState("");
  const [nos, setNos] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const { loading, error, message } = useSelector((state) => state.admin);

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };


  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('name', name);
    myForm.append('category', category);
    myForm.append('bio', bio);
    myForm.append('link', link);
    myForm.append('session', session);
    myForm.append('rating', rating);
    myForm.append('nos', nos);
    myForm.append('level', level);
    myForm.append('file', image);
    dispatch(createTeacher(myForm));
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
  }, [dispatch, error, message]);

  return (
    <Fragment>
      {/* <MetaData title="Create Product" /> */}
      <div className="admin-dashboard">
        <AdminSidebar />
        <div className="newProductContainer">
          <form
             className="createProductForm"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <h1>Create Teacher</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Teacher Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Sessions Completed"
                required
                value={session}
                onChange={(e) => setSession(e.target.value)}
              />
            </div>

            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Number of Students"
                required
                value={nos}
                onChange={(e) => setNos(e.target.value)}
              />
            </div>

            <div>
              {/* <AttachMoneyIcon /> */}
              <input
                type="number"
                placeholder="Rate the teacher out of 5"
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Topmate Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="About Teacher"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setLevel(e.target.value)}>
                <option value="">Choose Level</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={changeImageHandler}
                multiple
              />
            </div>

            <div id="createProductFormImage">
            {imagePrev && (
              <img src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateTeacher;
