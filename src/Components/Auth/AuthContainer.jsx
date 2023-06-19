import { useState } from "react";
import './Authindex.css'
import "./AuthContainer.css";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import { useNavigate } from "react-router-dom";



const AuthContainer = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setAuth({ reset: false, register: false, login: true });
    // navigate("/loginregister");
  };

  const handleRegister = () => {
    setAuth({ ...auth, login: false, register: true });
    // navigate("/loginregister");
  };

  const handleReset = () => {
    setAuth({ ...auth, login: false, reset: true });
  };

  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {auth.login && (
          <Login
            onRegister={handleRegister}
            onReset={handleReset}
            onShowPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
        )}
        {auth.register && (
          <Register
            onLogin={handleLogin}
            onShowPassword={showPassword}
            onTogglePassword={handleTogglePassword}
          />
        )}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
