import "./App.css";
import "./styles/_global.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/MobileNav/MobileNav";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search/:searchTerm" component={SearchResultsPage} />
          </Switch>
          <MobileNav className="mobile-nav-component" />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
