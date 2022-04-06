import "./HomePage.scss";
import { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page__titles-container">
          <p className="home-page__title">Welcome to Scrollmate!</p>
          <p className="home-page__subtitle">
            New Here? Get started by searching for a book that you're reading in
            the search bar above.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
