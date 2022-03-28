import "./Header.scss";
import { Link } from "react-router-dom";
import { Component } from "react";
import iconHome from "../../assets/images/home.svg";
import iconGroup from "../../assets/images/group.svg";
import iconComment from "../../assets/images/comment.svg";
import iconBell from "../../assets/images/bell.svg";
import iconAvatar from "../../assets/images/avatar-user-profile.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__nav-link">
            <logo className="logo">scrollmate</logo>
          </Link>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img src={iconHome} alt="Home_Icon" className="icon" />
              <p className="icon__label icon__label--hidden">Home</p>
            </Link>
          </div>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img src={iconGroup} alt="Groups_Icon" className="icon" />
              <p className="icon__label icon__label--hidden">Groups</p>
            </Link>
          </div>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img src={iconComment} alt="Comment_Icon" className="icon" />
              <p className="icon__label icon__label--hidden">Comment</p>
            </Link>
          </div>

          <div className="header__nav-item">
            <Link to="/" className="header__nav-link">
              <img src={iconBell} alt="Notifications_Icon" className="icon" />
              <p className="icon__label icon__label--hidden">Notifications</p>
            </Link>
          </div>

          <form action="" className="search search--tablet-display">
            <input
              type="search"
              className="search__input"
              placeholder="Search..."
              name="search"
              id="site-search"
            />
            <input type="submit" hidden />
          </form>

          <div className="header__nav-item header__nav-item--hidden">
            <Link to="/" className="header__nav-link">
              <img src={iconAvatar} alt="Profile_Icon" className="icon" />
              <p className="icon__label icon__label--hidden">Profile</p>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
