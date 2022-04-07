import { Component } from "react";
import "./GroupsPage.scss";
import axios from "axios";
const options = { year: "numeric", month: "2-digit", day: "2-digit" };

class GroupsPage extends Component {
  state = {
    allComments: [],
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate() {
    console.log(this.state.allComments);
  }

  getComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((response) => {
        console.log("All comments in API", response.data);
        let allComments = response.data;
        this.setState({
          allComments: allComments,
        });
        axios.get(
          `https://www.googleapis.com/books/v1/volumes/${
            this.state.selectedBookId && this.state.selectedBookId
          }`
        );
      })
      .catch((err) => {
        console.log("error 1 catch", err);
      });
  };

  render() {
    return (
      <div className="groups-section">
        <p className="groups-section__title">New Comments</p>
        {this.state &&
          this.state.allComments
            .filter((comment) => comment.pageNumber <= 0)
            .reverse()
            .map((comment) => {
              return (
                <article className="new-comment-card" key={comment.commentId}>
                  <div className="new-comment-card__container">
                    <p className="new-comment-card__username">
                      {comment.bookName}
                    </p>
                    <p className="new-comment-card__comment">
                      {comment.name} says: &quot;{comment.comment}&quot;
                    </p>
                    <p className="new-comment-card__timestamp">
                      {comment.timestamp}
                    </p>
                  </div>
                </article>
              );
            })}
      </div>
    );
  }
}

export default GroupsPage;
