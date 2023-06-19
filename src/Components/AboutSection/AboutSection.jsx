import React from "react";
 import "../../assets/css/style.css";
import aboutshape2 from "../../assets/images/about-shape-2.svg";
import aboutshape3 from "../../assets/images/about-shape-3.png";
import aboutshape4 from "../../assets/images/about-shape-4.svg";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";
import { IonIcon } from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";

const AboutSection = ({ data }) => {
  return (
    <>
      <section
        className="section about"
        id="about"
        aria-label="about"
        style={{ marginBottom: "-150px", marginTop: "70px" }}
      >
    
        <div className="container">
          <figure className="about-banner">
            <div className="img-holder" style={{ width: "520", height: "370" }}>
              <img
                src={data.img}
                width="520"
                height="370"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
              {/* <!-- <img src="./assets/images/about-shape-1.svg" width="360" height="420" loading="lazy" alt=""
              class="shape about-shape-1"> --> */}

              <img
                src={aboutshape2}
                width="371"
                height="220"
                loading="lazy"
                alt=""
                className="shape about-shape-2"
              />

              <img
                src={aboutshape3}
                width="722"
                height="528"
                loading="lazy"
                alt=""
                className="shape about-shape-3"
              />
            </div>
          </figure>
          
          <div className="about-content">
            <p className="section-subtitle">About Us</p>

            <h2 className="h2 section-title">
              {data.startline} <span className="span">{data.midline}</span>{" "}
              {data.endline}
            </h2>

            <p className="section-text">{data.tagline}</p>

            <ul className="about-list">
              <li className="about-item">
                {/* <ion-icon
                  name="checkmark-done-outline"
                  aria-hidden="true"
                ></ion-icon> */}
                <IonIcon icon={checkmarkDoneOutline} aria-hidden="true" />

                <span className="span">Expert Instructors</span>
              </li>

              <li className="about-item">
                {/* <ion-icon
                  name="checkmark-done-outline"
                  aria-hidden="true"
                ></ion-icon> */}
                <IonIcon icon={checkmarkDoneOutline} aria-hidden="true" />

                <span className="span">Online Live Learning</span>
              </li>

              <li class="about-item">
                {/* <ion-icon
                  name="checkmark-done-outline"
                  aria-hidden="true"
                ></ion-icon> */}
                <IonIcon icon={checkmarkDoneOutline} aria-hidden="true" />

                <span className="span">Lifetime Access</span>
              </li>
            </ul>

            <img
              src={aboutshape4}
              width="100"
              height="100"
              loading="lazy"
              alt=""
              className="shape about-shape-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
