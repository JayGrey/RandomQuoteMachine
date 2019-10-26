import * as React from "react";
import * as ReactRedux from "react-redux";

import { QuoteBox } from "../components/QuoteBox";
import { StoreState } from "../store/store";
import { getQuote } from "../store/actions";

interface AppProps {
  text: string;
  author: string;
  loading: boolean;
  getQuote: () => void;
}
class App extends React.Component<AppProps, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.getQuote();
  }

  render() {
    const { text, author, loading } = this.props;
    return (
      <QuoteBox
        text={text}
        author={author}
        newQuoteHandler={() => this.props.getQuote()}
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

const mapDispatchToProps = {
  getQuote
};

export default ReactRedux.connect(mapStatetoProps, mapDispatchToProps)(App);
