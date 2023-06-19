import { useState, useEffect } from "react";
import registerImg from "../../assets/register.svg";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { register } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ onLogin, onShowPassword, onTogglePassword }) => {
  const{loading} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // const myForm = new FormData();
    // myForm.append("name", name);
    // myForm.append("email", email);
    // myForm.append("password", password);
    dispatch(register(name, email, phone, password));
    navigate("/register");
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showIndicator, setShowIndicator] = useState(false);
  // // const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  const [phoneMatch, setPhoneMatch] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

  // const dispatch = useDispatch();

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   // console.log(password);
  // };

  useEffect(() => {
    // check for phone number
    if (phone.toString().trim().length === 10) {
      setPhoneMatch(true);
    } else {
      setPhoneMatch(false);
    }

    // check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    // Check For Special char

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }

    if (password.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (password.length > 0 && password.trim() === confirmpassword.trim()) {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }

    if (
      passLetter &&
      passNumber &&
      passChar &&
      passLength &&
      passMatch &&
      phoneMatch
    ) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [
    password,
    phone,
    confirmpassword,
    passLetter,
    passNumber,
    passChar,
    passLength,
    passMatch,
    phoneMatch,
  ]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const myForm = new FormData();
  //   myForm.append("name", name);
  //   myForm.append("email", email);
  //   myForm.append("password", password);
  //   dispatch(register(myForm));
  // };

  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input
            type="text"
            htmlFor="name"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="--width-100"
            placeholder="Name"
          />
          <input
            htmlFor="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="--width-100"
            placeholder="Email"
          />
          <input
            type="number"
            htmlFor="number"
            required
            id="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="--width-100"
            placeholder="Phone"
          />
          {/* PASSWORD FIELD */}
          <div className="password">
            <input
              htmlFor="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              // value={pass}
              // onChange={handlePasswordChange}
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className="password">
            <input
              htmlFor="confirmpassword"
              required
              id="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Confirm Password"
              onFocus={handleShowIndicator}
              // value={pass}
              // onChange={handlePasswordChange}
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          {/* PASSWORD FIELD */}
          <button
            type="submit"
            onClick={submitHandler}
            disabled={!passComplete || loading}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
          >
            {
              !loading ? "Register" : "Loading..."
            }
          </button>

          <span className="--text-sm --block">
            Have an account?{" "}
            <button className="--text-sm" onClick={onLogin}>
              Login
            </button>
            {/* <Link to={"/"} className="--text-sm" onClick={onLogin}>
              Login
            </Link> */}
            {/* <a href="/" >
              Login
            </a> */}
          </span>
          {/* Pass Strength Indicator */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers (0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Character (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 8 Character
                </span>
              </li>
              <li className={passMatch ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passMatch ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Pass & Confirm Pass{" "}
                  {passMatch ? `Matched` : `Not matched`}
                </span>
              </li>
              <li className={phoneMatch ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {phoneMatch ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; {phoneMatch ? `Valid PhoneNumber` : `Invalid PhoneNumber`}
                </span>
              </li>
            </ul>
          </div>
          {/* Pass Strength Indicator */}
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="login" />
      </div>
    </div>
  );
};

export default Register;
