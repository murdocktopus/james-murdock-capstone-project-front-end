import "./CommentForm.scss";
import React, { useState } from "react";

function CommentForm(props) {
  const [pageNumber, setPageNumber] = useState(0);
  console.log("pagenumber", pageNumber);
  console.log(props);

  let pageCount =
    props.selectedBook.volumeInfo && props.selectedBook.volumeInfo.pageCount;

  return (
    <section className="comment-form-section">
      <div className="comment-form-container">
        <form
          action={process.env.REACT_APP_API_URL}
          className="comment-form"
          id="commentForm"
          method="post"
          onSubmit={props.handleFormSubmit}
        >
          <p className="comment-form__title">JOIN THE DISCUSSION:</p>
          <div className="comment-form__div">
            <label className="comment-form__label" htmlFor="quantity">
              Page:
            </label>
            <input
              id="quantity"
              className="comment-form__comment"
              type="number"
              name="quantity"
              min="0"
              max={pageCount}
              defaultValue="0"
              placeholder={"0 - " + pageCount}
              onChange={(e) => props.setPageNumber(e.target.value)}
              //   onChange={handleChange}
            />
          </div>
          <div className="comment-form__div">
            <label className="comment-form__label" htmlFor="name">
              Name:
            </label>
            <input
              className="comment-form__comment"
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
            />
          </div>
          <div className="comment-form__div">
            <label className="comment-form__label" htmlFor="comment">
              Comment:
            </label>
            <textarea
              className="comment-form__comment"
              type="text-area"
              name="comment"
              placeholder="Comment"
              required
            />
          </div>
          <input
            type="submit"
            className="comment-form__button"
            value="submit"
          />
        </form>
      </div>
    </section>
  );
}
export default CommentForm;
