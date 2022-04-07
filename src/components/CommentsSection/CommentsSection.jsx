import CommentCard from "../CommentCard/CommentCard";
import "./CommentsSection.scss";

function CommentsSection(props) {
  console.log("Comment Section props.selectedComments", props.selectedComments);

  return (
    <section className="comment-section">
      <p className="comment-section__title">Comments</p>
      {props.selectedComments &&
        props.selectedComments
          .filter((comment) => comment.pageNumber <= props.selectedPageNumber)
          .map((comment) => {
            return <CommentCard comment={comment} key={comment.commentId} />;
          })}
    </section>
  );
}
export default CommentsSection;
