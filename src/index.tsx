import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./containers/App";

  
ReactDOM.render(<App />, document.getElementById("root"));

declare let module: any;

if (module.hot) {
  module.hot.accept();
}
