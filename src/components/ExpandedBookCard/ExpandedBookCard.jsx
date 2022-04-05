import "./ExpandedBookCard.scss";

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

  return (
    <article className="expanded-book-card">
      <img
        src={bookImage}
        alt="Book_Cover_Image"
        className="expanded-book-card__icon"
      />
      <div className="expanded-book-card__title-container">
        <h3 className="expanded-book-card__title">{bookTitle}</h3>
        <p className="expanded-book-card__author">{bookAuthor}</p>
        <p className="expanded-book-card__subtitle">{bookDate}</p>
        <p className="expanded-book-card__subtitle">{bookPublisher}</p>
        <p className="expanded-book-card__subtitle">{bookPageNumber} Pages</p>
      </div>
      <div className="expanded-book-card__description">{bookDescription}</div>
    </article>
  );
}
export default ExpandedBookCard;
