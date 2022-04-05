import "./App.css";
import "./styles/_global.scss";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/MobileNav/MobileNav";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import BookPage from "./pages/BookPage/BookPage";
import axios from "axios";

class App extends Component {
  state = {
    books: [],
    searchTerm: "", // I make this params value?
    searchSubmitted: false,
  };

  componentDidMount() {
    console.log("App.js Mount State:", this.state);

    this.getBooks();
  }

  componentDidUpdate(prevProps) {
    console.log("App.js Update State:", this.state);
    console.log(this.state.books);
    // this.getBooks();
    console.log(this.state);

    // this.setState({
    //   searchSubmitted: false,
    // });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Search Event Target Value:", e.target.search.value);
    this.setState(
      {
        searchSubmitted: true,
        searchTerm: e.target.search.value,
      },
      () => {
        this.getBooks();
        // window.location = `http://localhost:3000/search/${this.state.searchTerm}`;
        // <Redirect to={`/search/${this.state.searchTerm}`} />;
      }
    );
  };

  getBooks = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`
      )
      .then((response) => {
        this.setState(
          {
            books: response.data.items,
            searchSubmitted: false,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header
            handleSubmit={this.handleSubmit}
            searchTerm={this.state.searchTerm}
            searchSubmitted={this.state.searchSubmitted}
          />
          <Switch>
            <Route path="/" exact>
              {this.state.searchSubmitted ? (
                <Redirect
                  to={"/search/" + this.state.searchTerm}
                  render={(routerProps) => (
                    <SearchResultsPage
                      books={this.state.books}
                      getBooks={this.getBooks}
                      searchTerm={this.searchTerm}
                      searchSubmitted={this.state.searchSubmitted}
                      {...routerProps}
                    />
                  )}
                />
              ) : (
                <HomePage />
              )}
            </Route>

            <Route path={"/search/:searchTerm"} exact>
              {this.state.searchSubmitted ? (
                <Redirect
                  to={"/search/" + this.state.searchTerm}
                  render={(routerProps) => (
                    <SearchResultsPage
                      books={this.state.books}
                      getBooks={this.getBooks}
                      searchTerm={this.searchTerm}
                      searchSubmitted={this.state.searchSubmitted}
                      {...routerProps}
                    />
                  )}
                />
              ) : (
                <SearchResultsPage
                  books={this.state.books}
                  getBooks={this.getBooks}
                  searchTerm={this.searchTerm}
                  searchSubmitted={this.state.searchSubmitted}
                />
              )}
            </Route>

            {/* <Route
              path={"/search/:searchTerm"}
              exact
              render={(routerProps) => (
                <SearchResultsPage
                  books={this.state.books}
                  getBooks={this.getBooks}
                  searchTerm={this.searchTerm}
                  searchSubmitted={this.state.searchSubmitted}
                  {...routerProps}
                />
              )}
            ></Route> */}
            {/* <Route path="/book/:id" exact component={BookPage} /> */}
          </Switch>
          <MobileNav className="mobile-nav-component" />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
