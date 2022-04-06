import "./CommentCard.scss";

function CommentCard(props) {
  //   console.log(props.comment.comment);
  return (
    <article className="comment-card">
      {/* <img className="comment-card__userimg" src="" alt="user_image" /> */}
      <p className="comment-card__username">{props.comment.name}</p>
      <p className="comment-card__timestamp">{props.comment.timestamp}</p>
      <p className="comment-card__comment">{props.comment.comment}</p>
    </article>
  );
}
export default CommentCard;
