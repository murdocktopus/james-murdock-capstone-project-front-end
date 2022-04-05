import "./SearchedBookCard.scss";

function SearchedBookCard(props) {
  return (
    <article className="searched-book-card">
      <img
        src={props.imageLinks && props.imageLinks.smallThumbnail}
        alt="Book_Cover_Image"
        className="searched-book-card__icon"
      />
      <div className="searched-book-card__title-container">
        <h3 className="searched-book-card__title">{props.title}</h3>
        <p className="searched-book-card__author">
          {props.author.reduce(
            (accumulator, currentValue) => accumulator + " & " + currentValue
          )}
        </p>
        <p className="searched-book-card__subtitle">
          {props.publishedDate.slice(0, 4)}
        </p>
      </div>
      <p className="searched-book-card__description">{props.description}</p>
    </article>
  );
}

export default SearchedBookCard;
