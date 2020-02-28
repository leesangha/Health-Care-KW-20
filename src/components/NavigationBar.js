import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-regular-svg-icons";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="left-side">
        <Link to="/">
          <img src="../images/maet-logo.png" alt="logo" />
        </Link>
        <div className="menu-elements">
          <Link to="/register">등록</Link>
          <Link to="/statistics">통계</Link>
          <Link to = "/login">Login</Link>
          <Link to = "/SignUp">회원가입 </Link>
        </div>
      </div>
      <div className="right-side">
        <FontAwesomeIcon icon={faSmile} />
      </div>
    </div>
  );
}

export default NavigationBar;