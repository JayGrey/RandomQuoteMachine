import * as React from "react";
import * as ReactDOM from "react-dom";


export const App = () => {
    return <p>App component</p>;
  };
  
ReactDOM.render(<App />, document.getElementById("root"));

declare let module: any;

if (module.hot) {
  module.hot.accept();
}
