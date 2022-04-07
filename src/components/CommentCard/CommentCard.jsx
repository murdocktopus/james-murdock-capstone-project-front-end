import "./CommentCard.scss";

function CommentCard(props) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  console.log(props);
  return (
    <article className="comment-card">
      <div className="comment-card__container">
        {/* <img className="comment-card__userimg" src="" alt="user_image" /> */}
        <p className="comment-card__username">{props.comment.name} says:</p>
        <p className="comment-card__comment">
          &quot;{props.comment.comment}&quot;
        </p>
        <p className="comment-card__page-number">
          on page {props.comment.pageNumber}&nbsp;
        </p>
        <p className="comment-card__timestamp">{props.comment.timestamp}</p>
      </div>
    </article>
  );
}
export default CommentCard;
