import "./BookPage.scss";
import { Component } from "react";
import axios from "axios";

const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
// params['id']

class BookPage extends Component {
  state = {
    selectedBookId: window.location.pathname.slice(6),
  };

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
        console.log(this.state.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("BookPage.js Mount State:", this.state);
    console.log(this.state);

    this.getBookById();
  }

  componentDidUpdate() {
    console.log("BookPage.js Update State:", this.state);
    console.log(this.props);
  }

  render() {
    // console.log(props);
    return (
      <div className="book-page">
        <div className="test">
          <p>{this.state.selectedBookId}</p>
        </div>
      </div>
    );
  }
}

export default BookPage;
