import * as React from "react";
import * as ReactRedux from "react-redux";

import { QuoteBox } from "../components/QuoteBox";
import { getRandomQuote } from "../helpers/services";
import { StoreState } from "../store/store";

interface AppProps {
  text: string;
  author: string;
  loading: boolean;
  getQuote: () => void;
}
class App extends React.Component<AppProps, {}> {
  constructor(props: any) {
    super(props);

    // this.state = {
    //   text: "",
    //   author: "",
    //   loading: false
    // };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  // updateQuote(text: string, author: string) {
  //   this.setState(state => ({ ...state, author, text }));
  // }

  getNewQuote() {
    // this.setState(state => ({ ...state, loading: true }));
    this.props.getQuote();

    console.log("getNewQuote clicked");
  }

  render() {
    const { text, author, loading } = this.props;
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

const mapStatetoProps = (state: StoreState) => ({
  author: state.author,
  text: state.text,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  getQuote: () => getRandomQuote(dispatch)
});

export default ReactRedux.connect(mapStatetoProps, mapDispatchToProps)(App);
