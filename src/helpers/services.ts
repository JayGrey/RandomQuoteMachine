import {
  QuoteAction,
  quoteFailureAction,
  quoteLoadingAction,
  qouteSuccessAction
} from "../store/store";

const QUOTE_ENDPOINT = "http://quotes.rest/qod";

export const getRandomQuote = (
  dispatch: (action: QuoteAction) => void
): void => {
  dispatch(quoteLoadingAction());

  fetch(QUOTE_ENDPOINT)
    .then(response => {
      if (!response.ok) {
        dispatch(quoteFailureAction({ message: response.statusText }));
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(val =>
      dispatch(
        qouteSuccessAction({
          author: val.contents.quotes[0].author,
          text: val.contents.quotes[0].text
        })
      )
    )
    .catch((error: Error) => {
      dispatch(quoteFailureAction({ message: error.message }));
    });
};
