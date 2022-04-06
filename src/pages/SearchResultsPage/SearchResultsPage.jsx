import "./SearchResultsPage.scss";
import { Component } from "react";
import SearchedBookCard from "../../components/SearchedBookCard/SearchedBookCard";
import axios from "axios";
import bookIcon from "../../assets/images/book-with-mark.svg";
import { Link } from "react-router-dom";

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getBooks();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match &&
      this.props.match.params.searchTerm !== this.props.match &&
      prevProps.match.params.searchTerm
    ) {
      this.getBooks();
    } else {
      console.log("nope");
    }
  }

  getBooks = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.props.match && this.props.match.params.searchTerm
        }`
      )
      .then((response) => {
        this.setState({
          books: response.data.items,
          searchSubmitted: false,
        });
        // console.log(this.props.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="search-results-page">
        <h1 className="page-title">Search Results</h1>
        {this.props.books &&
          this.props.books
            .filter(
              (book) =>
                book.volumeInfo &&
                book.volumeInfo.imageLinks &&
                book.volumeInfo.description &&
                book.volumeInfo.pageCount &&
                book.volumeInfo.publishedDate
            )
            .map((filteredBook) => {
              return (
                <Link to={"/book/" + filteredBook.id} key={filteredBook.id}>
                  <SearchedBookCard
                    key={filteredBook.id}
                    id={filteredBook.id}
                    volumeInfo={filteredBook.volumeInfo}
                    title={filteredBook.volumeInfo.title}
                    author={
                      filteredBook.volumeInfo.authors || ["No Author Listed"]
                    }
                    publishedDate={filteredBook.volumeInfo.publishedDate}
                    description={filteredBook.volumeInfo.description}
                    imageLinks={filteredBook.volumeInfo.imageLinks}
                    pageCount={filteredBook.volumeInfo.pageCount}
                    categories={filteredBook.volumeInfo.categories}
                  />
                </Link>
              );
            })}
      </div>
    );
  }
}

export default SearchResultsPage;
