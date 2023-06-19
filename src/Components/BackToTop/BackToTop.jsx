import React from "react";
 import '../../assets/css/style.css'
import { IonIcon } from "@ionic/react";
import {
  arrowUpCircle
} from "ionicons/icons";
import { useState, useEffect } from "react";
const BackToTop = () => {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <a
        href="#top"
        className={showButton ? "back-top-btn active" : "back-top-btn"}
        aria-label="back top top"
        onClick={handleClick}
      >
        <IonIcon icon={arrowUpCircle} aria-hidden="true" />
      </a>
    </>
  );
};

export default BackToTop;
