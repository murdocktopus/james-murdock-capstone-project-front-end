import "./CommentCard.scss";

function CommentCard(props) {
  //   console.log(props.comment.comment);
  return (
    <article className="comment-card">
      <div className="comment-card__container">
        {/* <img className="comment-card__userimg" src="" alt="user_image" /> */}
        <p className="comment-card__username">Name: {props.comment.name}</p>
        <p className="comment-card__timestamp">
          Time Posted: {props.comment.timestamp}
        </p>
        <p className="comment-card__comment">
          Comment: {props.comment.comment}
        </p>
        <p className="comment-card__page-number">
          Page {props.comment.pageNumber}
        </p>
      </div>
    </article>
  );
}
export default CommentCard;
