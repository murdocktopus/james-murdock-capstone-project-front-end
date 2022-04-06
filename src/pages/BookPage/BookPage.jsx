import "./BookPage.scss";
import { Component } from "react";
import axios from "axios";
import ExpandedBookCard from "../../components/ExpandedBookCard/ExpandedBookCard";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import CommentForm from "../../components/CommentForm/CommentForm";
const options = { year: "numeric", month: "2-digit", day: "2-digit" };

class BookPage extends Component {
  state = {
    selectedBook: {},
    selectedBookId: window.location.pathname.slice(6),
    selectedPageNumber: 0,
    selectedComments: [],
  };

  componentDidMount() {
    this.getBookById();
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

  handleChange(e) {
    console.log("You changed value.", e.target.value);
    console.log(this.state.selectedPageNumber);
    let pageNumber = e.target.value;
    this.setState({
      selectedPageNumber: pageNumber,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const page = event.target[0].value;
    const name = event.target[1].value;
    const comment = event.target[2].value;
    const date = new Date().toLocaleDateString("en-US", options);
    console.log(event.target[1]);
    console.table([
      {
        Page: page,
        Name: name,
        Comment: comment,
        Timestamp: date,
      },
    ]);

    axios
      .post(`${process.env.REACT_APP_API_URL}`, {
        id: this.state.selectedBookId,
        page: page,
        name: name,
        comment: comment,
        date: date,
      })
      .then((response) => {
        console.log(response);
        this.getBookById(); // refresh list of data after posting
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Comment Posted");
    event.target.reset();
  };

  render() {
    return (
      <div className="book-page">
        <ExpandedBookCard
          selectedBook={this.state.selectedBook}
          selectedPageNumber={this.state.selectedPageNumber}
        />
        <CommentForm
          selectedBook={this.state.selectedBook}
          selectedBookId={this.state.selectedBookId}
          selectedPageNumber={this.state.selectedPageNumber}
          selectedComments={this.state.selectedComments}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <CommentsSection
          selectedBook={this.state.selectedBook}
          selectedBookId={this.state.selectedBookId}
          selectedPageNumber={this.state.selectedPageNumber}
          selectedComments={this.state.selectedComments}
        />
      </div>
    );
  }
}

export default BookPage;
