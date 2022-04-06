import "./ExpandedBookCard.scss";
var parse = require("html-react-parser");

function ExpandedBookCard(props) {
  let bookImage =
    props.selectedBook.volumeInfo &&
    props.selectedBook.volumeInfo.imageLinks &&
    props.selectedBook.volumeInfo.imageLinks.smallThumbnail &&
    props.selectedBook.volumeInfo.imageLinks.thumbnail;

  let bookTitle =
    props.selectedBook.volumeInfo && props.selectedBook.volumeInfo.title;

  let bookAuthor =
    props.selectedBook.volumeInfo &&
    props.selectedBook.volumeInfo.authors.reduce(
      (accumulator, currentValue) => accumulator + " & " + currentValue
    );

  let bookDate =
    props.selectedBook.volumeInfo &&
    props.selectedBook.volumeInfo.publishedDate.slice(0, 4);

  let bookPublisher =
    props.selectedBook.volumeInfo && props.selectedBook.volumeInfo.publisher;

  let bookPageNumber =
    props.selectedBook.volumeInfo && props.selectedBook.volumeInfo.pageCount;

  let bookDescription =
    props.selectedBook.volumeInfo && props.selectedBook.volumeInfo.description;

  //   let selectedPageNumber = props.selectedPageNumber && props.selectedPageNumber;

  let htmlParseDescription = parse("<div>" + bookDescription + "</div>");

  return (
    <article className="expanded-book-card">
      <img
        src={bookImage}
        alt="Book_Cover_Image"
        className="expanded-book-card__icon"
      />
      <div className="expanded-book-card__title-container">
        <div className="expanded-book-card__info-div">
          <h3 className="expanded-book-card__title">{bookTitle}</h3>
          <p className="expanded-book-card__subtitle">&nbsp;by</p>
          <p className="expanded-book-card__title">&nbsp;{bookAuthor}</p>
        </div>
        <div className="expanded-book-card__info-div">
          <p className="expanded-book-card__subtitle">Published in&nbsp;</p>
          <p className="expanded-book-card__subtitle">{bookDate} by&nbsp;</p>
          <p className="expanded-book-card__subtitle expanded-book-card__subtitle--new-line">
            {bookPublisher}&nbsp;
          </p>
        </div>
        <div className="expanded-book-card__info-div">
          <p className="expanded-book-card__subtitle expanded-book-card__subtitle--new-line">
            {bookPageNumber} Pages
          </p>
        </div>
      </div>
      <div className="expanded-book-card__description">
        <p className="expanded-book-card__title">Book Description:</p>
        <p className="expanded-book-card__description-text">
          {htmlParseDescription}
        </p>
      </div>
    </article>
  );
}
export default ExpandedBookCard;
