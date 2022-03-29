import "./SearchedBookCard.scss";
import { Component } from "react";
import bookIcon from "../../assets/images/book-with-mark.svg";

class SearchedBookCard extends Component {
  render() {
    return (
      <article className="searched-book-card">
        <img
          src={bookIcon}
          alt="Book_Cover_Image"
          className="searched-book-card__icon"
        />
        <div className="searched-book-card__title-container">
          <h3 className="searched-book-card__title">Book Title</h3>
          <p className="searched-book-card__author">Book Author</p>
          <p className="searched-book-card__subtitle">Book Subtitles</p>
        </div>
        <p className="searched-book-card__description">
          Book Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ut nunc rhoncus, molestie eros quis, ornare magna. Mauris
          dapibus, arcu vel aliquet volutpat, erat libero laoreet tellus, sed
          consequat orci turpis ultricies ipsum. Phasellus laoreet tellus in
          diam venenatis eleifend. Sed sit amet nibh eleifend orci accumsan
          porta quis eu mauris. Vestibulum ac mauris eleifend, egestas nisl sed,
          commodo lectus. Nullam ipsum tellus, iaculis at tempus non, sodales in
          nisl. Cras erat leo, volutpat nec elementum at, elementum sit amet
          nunc. Etiam et neque accumsan, egestas arcu nec, sagittis mi. Nunc
          imperdiet pulvinar congue. Aenean placerat dolor nisi, a pretium justo
          accumsan in. Duis mi elit, vulputate at erat a, imperdiet imperdiet
          est. In eget condimentum nunc.
        </p>
      </article>
    );
  }
}

export default SearchedBookCard;
