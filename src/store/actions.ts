import * as redux from "redux";

import { SuccessPayload, FailurePayload } from "./store";
import * as service from "../helpers/services";

export interface QuoteAction extends redux.Action<QuoteActions> {
  payload?: SuccessPayload | FailurePayload;
}

export enum QuoteActions {
  QUOTE_LOADING = "QUOTE_LOADING",
  QUOTE_SUCCESS = "QUOTE_SUCCESS",
  QUOTE_FAIL = "QUOTE_FAIL"
}

const quoteLoadingAction = (): QuoteAction => ({
  type: QuoteActions.QUOTE_LOADING
});

const qouteSuccessAction = (payload: SuccessPayload): QuoteAction => ({
  type: QuoteActions.QUOTE_SUCCESS,
  payload
});

const quoteFailureAction = (payload: FailurePayload): QuoteAction => ({
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
