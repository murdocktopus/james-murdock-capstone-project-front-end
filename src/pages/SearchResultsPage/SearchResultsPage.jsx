import "./SearchResultsPage.scss";
import { Component } from "react";
import SearchedBookCard from "../../components/SearchedBookCard/SearchedBookCard";
import axios from "axios";

class SearchResultsPage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    console.log("mount");
    this.getBooksData();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {}

  getBooksData() {
    let query = this.props.match.params.searchTerm;
    console.log(query);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          books: response.data,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="SearchResultsPage">
        <div className="test">
          <h1 className="page-title">Search Results</h1>
          <SearchedBookCard />
          <SearchedBookCard />
          <SearchedBookCard />
          <SearchedBookCard />
        </div>
      </div>
    );
  }
}

export default SearchResultsPage;
