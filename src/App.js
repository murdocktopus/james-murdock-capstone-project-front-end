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
    searchTerm: "",
    searchSubmitted: false,
    selectedBook: {},
  };

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {}

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
      }
    );
    e.target.reset();
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
                      selectedBook={this.state.selectedBook}
                      selectBook={this.selectBook}
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
                      selectedBook={this.state.selectedBook}
                      selectBook={this.selectBook}
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
                  selectedBook={this.state.selectedBook}
                />
              )}
            </Route>

            <Route path={"/book/:id"} exact name="book-page">
              {this.state.searchSubmitted ? (
                <Redirect
                  to={"/search/" + this.state.searchTerm}
                  render={(routerProps) => (
                    <SearchResultsPage
                      books={this.state.books}
                      getBooks={this.getBooks}
                      searchTerm={this.searchTerm}
                      searchSubmitted={this.state.searchSubmitted}
                      selectedBook={this.state.selectedBook}
                      {...routerProps}
                    />
                  )}
                />
              ) : (
                <BookPage />
              )}
            </Route>
          </Switch>
          <MobileNav className="mobile-nav-component" />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
