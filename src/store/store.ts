import * as Redux from "redux";
import thunk from "redux-thunk";

import { QuoteAction, QuoteActions } from "./actions";

export interface SuccessPayload {
  author: string;
  text: string;
}

export interface FailurePayload {
  message: string;
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

export const store = Redux.createStore(reducer, Redux.applyMiddleware(thunk));
