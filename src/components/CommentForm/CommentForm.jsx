import "./CommentForm.scss";
import React, { useState } from "react";

function CommentForm(props) {
  const [pageNumber, setPageNumber] = useState(0);
  console.log("pagenumber", pageNumber);
  console.log(props.handleFormSubmit);

  let pageCount =
    props.selectedBook.volumeInfo && props.selectedBook.volumeInfo.pageCount;

  return (
    <section className="comment-form-section">
      <form
        action={process.env.REACT_APP_API_URL}
        className="comment-form"
        id="commentForm"
        method="post"
        onSubmit={props.handleFormSubmit}
      >
        <label className="comment-form__label">
          Select a Page Number to see more of the discussion! {pageNumber}
        </label>
        <input
          className="comment-form__comment"
          type="number"
          name="quantity"
          min="0"
          max={pageCount}
          defaultValue="0"
          placeholder={"0- " + pageCount}
          onChange={(e) => setPageNumber(e.target.value)}
          //   onChange={handleChange}
        />

        <label className="comment-form__label">JOIN THE DISCUSSION</label>
        <input
          className="comment-form__comment"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          required
        />
        <input
          className="comment-form__comment"
          type="text-area"
          name="comment"
          placeholder="Comment"
          required
        />
        <input type="submit" className="comment-form__button" value="submit" />
      </form>
    </section>
  );
}
export default CommentForm;
