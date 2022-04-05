import "./BookPage.scss";
import { Component } from "react";
import axios from "axios";
import ExpandedBookCard from "../../components/ExpandedBookCard/ExpandedBookCard";
import CommentsSection from "../../components/CommentsSection/CommentsSection";

class BookPage extends Component {
  state = {
    selectedBook: {},
    selectedBookId: window.location.pathname.slice(6),
    selectedPageNumber: 0,
  };

  componentDidMount() {
    this.getBookById();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {}

  getBookById = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${
          this.state.selectedBookId && this.state.selectedBookId
        }`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          selectedBook: response.data,
        });
        console.log(this);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="book-page">
        <div className="test">
          <p>{this.state.selectedBookId}</p>
          <ExpandedBookCard
            selectedBook={this.state.selectedBook}
            selectedPageNumber={this.state.selectedPageNumber}
          />
          <CommentsSection
            selectedBook={this.state.selectedBook}
            selectedPageNumber={this.state.selectedPageNumber}
          />
        </div>
      </div>
    );
  }
}

export default BookPage;
