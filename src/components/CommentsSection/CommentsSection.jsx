import "./CommentsSection.scss";

function CommentsSection(props) {
  return (
    <section className="comment-section">
      <p className="comment-section__title">Comment Section:</p>
      <div className="comment-card">
        <img className="comment-card__userimg" src="" alt="user_image" />
        <p className="comment-card__username">username</p>
        <p className="comment-card__timestamp">timestamp</p>
        <p className="comment-card__comment">comment</p>
      </div>
    </section>
  );
}
export default CommentsSection;
