import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 import "../../assets/css/style.css";
import "../../assets/css/authentication_styles.css";
import "../Auth/AuthContainer.css";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

import AuthContainer from "../Auth/AuthContainer";
// import herobg from "../../assets/images/hero-bg.svg";
import herobanner1 from "../../assets/images/hero-banner-1.jpg";
import herobanner2 from "../../assets/images/hero-banner-2.jpg";
import group13 from "../../assets/images/Group 13.svg";
import heroshape2 from "../../assets/images/hero-shape-2.png";
import { useSelector } from "react-redux";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";

const FrontPageBanner = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    // console.log("clicked");
    setShowModal(!showModal);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body.style.overflowX = "hidden";
    } else {
      body.style.overflowX = "auto";
    }
  }, [showModal]);
  return (
    <>
      <section
        className="section hero has-bg-image "
        id="home"
        aria-label="home"
        // style={{
        //    backgroundImage:{herobg}
        // }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 section-title">
              Unlock Your Child's Creativity With{" "}
              <span className="span" style={{ color: "hsl(351, 83%, 61%)" }}>
                Coding{" "}
              </span>
              At Encodingo!
            </h1>

            <p className="hero-text">
              Book a session today and help your child discover the exciting
              world of coding!
            </p>

            {isAuthenticated ? (
            <button className="btn has-before" onClick={handleModal}>
              <Link to={"/user_dashboard"}>
                <span className="span">Dashboard</span>
              </Link>
            </button>
          ) : (
            <button className="btn has-before" onClick={handleModal}>
              <Link to={"#"}>
                <span className="span">Book A Session</span>
              </Link>
            </button>
          )}
            {/* <a href="/" className="btn has-before">
              <span className="span">Book A Demo Session</span>
            </a> */}
          </div>
          <figure className="hero-banner">
            <div
              className="img-holder one"
              style={{ width: "270", height: "300" }}
            >
              <img
                src={herobanner1}
                style={{ width: "270", height: "300" }}
                alt="hero banner"
                className="img-cover"
              />
            </div>

            <div
              className="img-holder two"
              style={{ width: "240", height: "370" }}
            >
              <img
                src={herobanner2}
                style={{ width: "240", height: "370" }}
                alt="hero banner"
                className="img-cover"
              />
            </div>

            <img
              src={group13}
              style={{ width: "380", height: "190" }}
              alt=""
              className="shape hero-shape-1"
            />

            <img
              src={heroshape2}
              style={{ width: "622", height: "551" }}
              alt=""
              className="shape hero-shape-2"
            />
          </figure>
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <button className="close-btn" onClick={handleModal}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>
          <AuthContainer />
        </div>
      )}
    </>
  );
};

export default FrontPageBanner;
