import "./MobileNav.scss";
import { Link } from "react-router-dom";
import { Component } from "react";
import navIconHome from "../../assets/images/home.svg";
import navIconGroup from "../../assets/images/group.svg";
import navIconComment from "../../assets/images/comment.svg";
import navIconAvatar from "../../assets/images/avatar-user-profile.svg";

class MobileNav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__nav-item">
            <Link to="/" className="nav__nav-link">
              <img src={navIconHome} alt="Home_Icon" className="nav-icon" />
            </Link>
          </div>

          <div className="nav__nav-item">
            <Link to="/" className="nav__nav-link">
              <img src={navIconGroup} alt="Groups_Icon" className="nav-icon" />
            </Link>
          </div>

          <div className="nav__nav-item">
            <Link to="/" className="nav__nav-link">
              <img
                src={navIconComment}
                alt="Comment_Icon"
                className="nav-icon"
              />
            </Link>
          </div>

          <div className="nav__nav-item">
            <Link to="/" className="nav__nav-link">
              <img
                src={navIconAvatar}
                alt="Profile_Icon"
                className="nav-icon"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default MobileNav;
