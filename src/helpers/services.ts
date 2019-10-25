enum QuoteActions {
  QUOTE_LOADING = "QUOTE_LOADING",
  QUOTE_SUCCESS = "QUOTE_SUCCESS",
  QUOTE_FAIL = "QUOTE_FAIL"
}

interface ActionType {
  type: QuoteActions;
  payload?: object;
  message?: string;
}

const QUOTE_ENDPOINT = "http://quotes.rest/qod";

export const getRandomQuote = (
  dispatch: (action: ActionType) => void
): void => {
  dispatch({ type: QuoteActions.QUOTE_LOADING });

  fetch(QUOTE_ENDPOINT)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(val =>
      dispatch({
        type: QuoteActions.QUOTE_SUCCESS,
        payload: {
          text: val.contents.quotes[0].quote,
          author: val.contents.quotes[0].author
        }
      })
    )
    .catch((error: Error) => {
      dispatch({ type: QuoteActions.QUOTE_FAIL, message: error.message });
    });
};
