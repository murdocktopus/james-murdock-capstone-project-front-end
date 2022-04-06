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
    selectedComments: {},
  };

  componentDidMount() {
    this.getBookById();
    // this.getComments();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    console.log(this.state.selectedComments);
  }

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
        // console.log(
        //   `${process.env.REACT_APP_API_URL}${this.state.selectedBookId}`
        // );
      })
      .then(
        axios
          .get(`${process.env.REACT_APP_API_URL}`)
          .then((response) => {
            console.log("All comments in API", response.data);
            let allComments = response.data;
            let filteredComments = allComments
              .filter((comment) => comment.id === this.state.selectedBookId)
              .map((filteredComment) => {
                return filteredComment;
              });
            this.setState({
              selectedComments: filteredComments,
            });
          })
          .catch((err) => {
            console.log("error 1 catch", err);
          })
      )
      .catch((err) => {
        console.log("error 2 catch", err);
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
            selectedBookId={this.state.selectedBookId}
            selectedPageNumber={this.state.selectedPageNumber}
            selectedComments={this.state.selectedComments}
          />
        </div>
      </div>
    );
  }
}

export default BookPage;
