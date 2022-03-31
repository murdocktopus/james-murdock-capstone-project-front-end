import "./SearchResultsPage.scss";
import { Component } from "react";
import SearchedBookCard from "../../components/SearchedBookCard/SearchedBookCard";
import axios from "axios";
import bookIcon from "../../assets/images/book-with-mark.svg";

class SearchResultsPage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {}

  getBooks() {
    let searchTerm = this.props.match.params.searchTerm;
    console.log(searchTerm);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => {
        // console.log(response.data);
        let fullArr = response.data;
        // let arr10 = fullArr.slice(0, 10);
        console.log(fullArr);
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
          {this.state.books.items &&
            this.state.books.items.map((book) => {
              return (
                <SearchedBookCard
                  key={book.id}
                  id={book.id}
                  volumeInfo={book.volumeInfo}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  publishedDate={book.volumeInfo.publishedDate}
                  description={book.volumeInfo.description}
                  imageLinks={book.volumeInfo.imageLinks || bookIcon}
                  pageCount={book.volumeInfo.pageCount}
                  categories={book.volumeInfo.categories}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default SearchResultsPage;
