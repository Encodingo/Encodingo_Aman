import { useState } from "react";
import loginImg from "../../assets/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
const Login = ({ onRegister, onReset, onTogglePassword, onShowPassword }) => {
  const { loading } = useSelector((state) => state.user);
   const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    navigate('/login')
  };

  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={loginImg} alt="login" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center --text-margin">Login</h2>
          <input
            type="email"
            placeholder="Email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="--width-100"
          />
          <div className="password">
            <input
              type={onShowPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="--width-100"
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button
            className="--btn --btn-primary --btn-block"
            onClick={submitHandler}
            disabled={loading}
          >
            {!loading ? "Login" : "Loading..."}
          </button>

          <button className="--text-sm" onClick={onReset}>
            Forgot password?
          </button>
          {/* <a href="#" className="--text-sm" onClick={onReset}>
            Forgot password?
          </a> */}
          <span className="--text-sm --block">
            Don't have an account?{" "}
            <button 
            className="--text-sm" 
            onClick={onRegister}
            >
              Register
            </button>
            {/* <a href="#" className="--text-sm" onClick={onRegister}>
              Register
            </a> */}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
