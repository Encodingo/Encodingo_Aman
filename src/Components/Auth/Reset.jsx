import React from "react";
import resetImg from "../../assets/forgot.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { forgetPassword } from "../../actions/profile";
import { useState } from "react";
import { useEffect } from "react";

const Reset = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const { loading, message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const submitHandler = async(e) => {
    e.preventDefault();
    await dispatch(forgetPassword(email));
    await setEmail("");
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
    <div className="main-container --flex-center">
      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Reset</h2>

          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="--width-100" placeholder="Email" />

          <button  
          onClick={submitHandler} 
          className="--btn --btn-primary --btn-block"
          disabled={loading}
          >
            {
              !loading ? "Reset Password" : "Loading..."
            }
          </button>

          <span className="--text-sm --block --text-center">
            We will send you a reset link!!!
          </span>
          <div className="close" onClick={onLogin}>
            <AiOutlineClose color="red" />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={resetImg} alt="login" />
      </div>
    </div>
  );
};

export default Reset;
