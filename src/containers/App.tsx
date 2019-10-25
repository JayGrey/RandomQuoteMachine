import * as React from "react";

import { QuoteBox } from "../components/QuoteBox";

interface AppState {
  text: string;
  author: string;
  loading: boolean;
}
export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "",
      author: "",
      loading: false
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  updateQuote(text: string, author: string) {
    this.setState(state => ({ ...state, author, text }));
  }

  getNewQuote() {
    this.setState(state => ({ ...state, loading: true }));
    
    console.log("getNewQuote clicked");
  }

  render() {
    const { text, author, loading } = this.state;
    return (
      <QuoteBox
        text={text}
        author={author}
        newQuoteHandler={this.getNewQuote}
        loading={loading}
      />
    );
  }
}
