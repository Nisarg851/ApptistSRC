import React, { useEffect, useRef, useState } from "react";
import { Home, LogOut, Moon, Star } from "react-feather";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {
  logo,
  ProfileAvatar,
  User15,
} from "../../imagepath";

export function InstructorHeader({ activeMenu, instructorInfo }) {
  const [navbar, setNavbar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mobile Menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
  const [mobileSubMenu22, setMobileSubMenu22] = useState(false);
  const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
  const [mobileSubMenu32, setMobileSubMenu32] = useState(false);
  const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
  const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
  const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
  const [mobileSubMenu5, setMobileSubMenu5] = useState(false);

  const openMobileMenu = (event) => {
    document.body.classList.add("menu-opened");
    setMobileMenu(true);
  };
  const hideMobileMenu = (event) => {
    document.body.classList.remove("menu-opened");
    setMobileMenu(false);
  };
  // To close the modal, when clicked outside anywhere
  const cart = useRef();
  useOnClickOutside(cart, () => setShowCart(false));

  const wish = useRef();
  useOnClickOutside(wish, () => setShowWish(false));

  const notification = useRef();
  useOnClickOutside(notification, () => setShowNotification(false));

  const profile = useRef();
  useOnClickOutside(profile, () => setShowProfile(false));

  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header className="header header-page">
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container ">
            <div className="navbar-header">
              <Link
                id="mobile_btn"
                to="#;"
                onClick={openMobileMenu}
              >
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#;"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item user-nav">
                <Link
                  to="#"
                  className={
                    showProfile ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img src={"instructorInfo.instructorImageURL"} alt="" />
                    <span className="status online"></span>
                  </span>
                </Link>
                <div
                  ref={profile}
                  className={
                    showProfile
                      ? "users dropdown-menu dropdown-menu-right show modalPosition"
                      : "users dropdown-menu dropdown-menu-right"
                  }
                  data-popper-placement="bottom-end"
                >
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={"instructorInfo.instructorImage"}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      {/* <h6>{instructorInfo.instructorFirstName + " " + instructorInfo.instructorLastName}</h6> */}
                      <h6>{"instructorInfo.instructorFirstName + ' ' + instructorInfo.instructorLastName"}</h6>
                      <p className="text-muted text mb-0">Instructor</p>
                    </div>
                  </div>
                  <Link
                    className="dropdown-item text"
                    to="/instructor-dashboard"
                  >
                    <Home size={14} color={"#FF875A"} className="headerIcon" />{" "}
                    Dashboard
                  </Link>
                  <Link
                    className="dropdown-item text"
                    to="/instructor-edit-profile"
                  >
                    <Star size={14} color={"#FF875A"} className="headerIcon" />{" "}
                    Edit Profile
                  </Link>
                  <Link className="dropdown-item text" to="/">
                    <LogOut
                      size={14}
                      color={"#FF875A"}
                      className="headerIcon"
                    />{" "}
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={mobileMenu ? "sidebar-overlay opened" : "sidebar-overlay"}
        ></div>
      </div>
    </header>
  );
}
