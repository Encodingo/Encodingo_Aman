import React from "react";
import "../assets/css/style.css";
import logo from "../assets/images/logonewnew (2).svg";
import footerbg from "../assets/images/footer-bg.png";
import { IonIcon } from "@ionic/react";
import {
  logoYoutube,
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
} from "ionicons/icons";
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: { footerbg } }}>
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={logo} width="162" height="50" alt="EduWeb logo" />
            </a>

            <p className="footer-brand-text">
              At Encodingo, we are more than just a coding platform. We are a
              community of passionate educators and coders who are dedicated to
              making a positive impact on the lives of children. We believe that
              coding has the power to change the world, and we are excited to be
              a part of the journey.
            </p>

            {/* <div className="wrapper">
            <span className="span">Add:</span>

            <address className="address">70-80 Upper St Norwich NR2</address>
          </div>  */}

            <div className="wrapper">
              <span className="span">Call:</span>

              <a href="tel:+918271742953" className="footer-link">
                +91 827 1742 953
              </a>
            </div>

            <div className="wrapper">
              <span className="span">Email:</span>

              <a href="mailto:info@eduweb.com" className="footer-link">
                info@encodingo.com
              </a>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
            </li>

            <li>
              <a href="/" className="footer-link">
                About
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Courses
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Instructor
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Events
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Instructor Profile
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Purchase Guide
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>

            <li>
              <a href="/" className="footer-link">
                Contact Us
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Bootcamp
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Schools
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                FAQ's
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Sign In/Registration
              </a>
            </li>

            <li>
              <a href="/" className="footer-link">
                Blog
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>

            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
              />

              <button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>

                {/* <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"></ion-icon> */}
              </button>
            </form>

            <ul className="social-list">
              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoFacebook} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoLinkedin} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoInstagram} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoTwitter} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoYoutube} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2023 All Rights Reserved by{" "}
            <a href="/" className="copyright-link">
              Encodingo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
