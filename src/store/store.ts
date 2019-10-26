import * as redux from "redux";
import thunk from "redux-thunk";

import * as service from "../helpers/services";

export enum QuoteActions {
  QUOTE_LOADING = "QUOTE_LOADING",
  QUOTE_SUCCESS = "QUOTE_SUCCESS",
  QUOTE_FAIL = "QUOTE_FAIL"
}

interface SuccessPayload {
  author: string;
  text: string;
}

interface FailurePayload {
  message: string;
}

export interface QuoteAction extends redux.Action<QuoteActions> {
  payload?: SuccessPayload | FailurePayload;
}

export interface StoreState {
  author: string;
  text: string;
  loading: boolean;
  message: string | null;
}

const initialState: StoreState = {
  author: "",
  text: "",
  loading: false,
  message: null
};

export const quoteLoadingAction = (): QuoteAction => ({
  type: QuoteActions.QUOTE_LOADING
});

export const qouteSuccessAction = (payload: SuccessPayload): QuoteAction => ({
  type: QuoteActions.QUOTE_SUCCESS,
  payload
});

export const quoteFailureAction = (payload: FailurePayload): QuoteAction => ({
  type: QuoteActions.QUOTE_FAIL,
  payload
});

export const getQuote = () => async (dispatch: redux.Dispatch<QuoteAction>) => {
  dispatch(quoteLoadingAction());
  try {
    const quote = await service.getRandomQuote();
    dispatch(qouteSuccessAction(quote));
  } catch (error) {
    dispatch(quoteFailureAction({ message: error.message }));
  }
};

const reducer = (store: StoreState = initialState, action: QuoteAction) => {
  switch (action.type) {
    case QuoteActions.QUOTE_LOADING: {
      return { ...store, loading: true };
    }
    case QuoteActions.QUOTE_SUCCESS: {
      return {
        ...store,
        loading: false,
        author: (<SuccessPayload>action.payload).author,
        text: (<SuccessPayload>action.payload).text
      };
    }
    case QuoteActions.QUOTE_FAIL: {
      return {
        ...store,
        loading: false,
        message: (<FailurePayload>action.payload).message
      };
    }
    default:
      return store;
  }
};

export const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
