import "./SearchedBookCard.scss";
import { Component } from "react";
import bookIcon from "../../assets/images/book-with-mark.svg";

class SearchedBookCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.imageLinks.smallThumbnail);

    let bookImage =
      this.props.imageLinks && this.props.imageLinks.smallThumbnail;

    return (
      <article className="searched-book-card">
        <img
          src={bookImage}
          alt="Book_Cover_Image"
          className="searched-book-card__icon"
        />
        <div className="searched-book-card__title-container">
          <h3 className="searched-book-card__title">{this.props.title}</h3>
          <p className="searched-book-card__author">{this.props.author}</p>
          <p className="searched-book-card__subtitle">
            {this.props.publishedDate.slice(0, 4)}
          </p>
        </div>
        <p className="searched-book-card__description">
          {this.props.description}
        </p>
      </article>
    );
  }
}

export default SearchedBookCard;
