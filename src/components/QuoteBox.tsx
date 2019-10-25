import * as React from "react";

interface QuoteBoxProps {
  text: string;
  author: string;
  newQuoteHandler: () => void;
  loading: boolean;
}

export const QuoteBox = ({
  text,
  author,
  newQuoteHandler,
  loading
}: QuoteBoxProps) => {
  return (
    <div className="row min-vh-100 justify-content-md-center align-items-center">
      <div className="col-4">
        <div
          id="quote-box"
          className="bg-secondary border border-secondary rounded-lg shadow p-4"
        >
          <p className="blockquote text-center text-light" id="text">
            {text}
          </p>

          <p className="blockquote-footer text-right text-light" id="author">
            {author}
          </p>

          <div className="mt-5">
            <button
              className="btn btn-primary"
              id="new-quote"
              onClick={newQuoteHandler}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              <span> new quote</span>
            </button>

            <a
              className="btn btn-info ml-3"
              id="tweet-quote"
              href={"https://twitter.com/intent/tweet?text=" + encodeURI(text)}
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <span> tweet</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

QuoteBox.defaultProps = {
  text: "#quoteTextPlaceholder",
  author: "#quoteAuthorPlaceholder"
};
