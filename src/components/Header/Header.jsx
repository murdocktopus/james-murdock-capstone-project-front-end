import "./Header.scss";
import { Link, Route, Redirect } from "react-router-dom";
import { Component } from "react";
import headerIconHome from "../../assets/images/home.svg";
import headerIconGroup from "../../assets/images/group.svg";
import headerIconComment from "../../assets/images/comment.svg";
import headerIconBell from "../../assets/images/bell.svg";
import headerIconAvatar from "../../assets/images/avatar-user-profile.svg";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";

function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__nav-link">
            <p className="logo">scrollmate</p>
          </Link>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img
                src={headerIconHome}
                alt="Home_header-Icon"
                className="header-icon"
              />
              <p className="header-icon__label header-icon__label--hidden">
                Home
              </p>
            </Link>
          </div>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img
                src={headerIconGroup}
                alt="Groups_header-Icon"
                className="header-icon"
              />
              <p className="header-icon__label header-icon__label--hidden">
                Groups
              </p>
            </Link>
          </div>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img
                src={headerIconComment}
                alt="Comment_header-Icon"
                className="header-icon"
              />
              <p className="header-icon__label header-icon__label--hidden">
                Comment
              </p>
            </Link>
          </div>

          <div className="header__nav-item">
            <Link to="/" className="header__nav-link">
              <img
                src={headerIconBell}
                alt="Notifications_header-Icon"
                className="header-icon"
              />
              <p className="header-icon__label header-icon__label--hidden">
                Notifications
              </p>
            </Link>
          </div>

          <form
            action=""
            className="search search--tablet-display"
            onSubmit={props.handleSubmit}
          >
            <input
              type="search"
              className="search__input"
              placeholder="Search..."
              name="search"
              id="site-search"
              autoComplete="off"
            />
            <button type="submit" value="submit" hidden></button>
          </form>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img
                src={headerIconAvatar}
                alt="Profile_header-Icon"
                className="header-icon"
              />
              <p className="header-icon__label header-icon__label--hidden">
                Profile
              </p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
