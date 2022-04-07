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
      })
      .catch((err) => {
        console.log("error 1 catch", err);
      });
  };

  render() {
    return (
      <div className="groups-page">
        <p className="comment-section__title">Comments</p>
        {this.state &&
          this.state.allComments.map((comment) => {
            return (
              <article className="comment-card">
                <div className="comment-card__container">
                  {/* <img className="comment-card__userimg" src="" alt="user_image" /> */}
                  <p className="comment-card__username">{comment.name} says:</p>
                  <p className="comment-card__comment">
                    &quot;{comment.comment}&quot;
                  </p>
                  <p className="comment-card__page-number">
                    on page {comment.pageNumber}&nbsp;
                  </p>
                  <p className="comment-card__timestamp">{comment.timestamp}</p>
                </div>
              </article>
            );
          })}
      </div>
    );
  }
}

export default GroupsPage;
