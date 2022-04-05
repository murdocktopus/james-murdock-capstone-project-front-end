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
    console.log(this.props.books);
    // console.log(this.props.match.params);
    this.getBooks();

    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.match && this.props.searchsubmitted);
    console.log(this.props.match && prevProps.match.params.searchTerm);
    if (
      this.props.match &&
      this.props.match.params.searchTerm !== this.props.match &&
      prevProps.match.params.searchTerm
    ) {
      console.log("going");
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
        console.table(response.data.items);
        this.setState({
          books: response.data.items,
          searchSubmitted: false,
        });
        console.log(this.props.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.searchTerm);
    return (
      <div className="SearchResultsPage">
        <div className="test">
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
                // selectBook = (filteredBook) => {
                //   this.setState({ selectedBook: filteredBook });
                // };
                return (
                  <Link
                    to={"/book/" + filteredBook.id}
                    // onClick={this.props.selectBook()}
                  >
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
      </div>
    );
  }
}

export default SearchResultsPage;
