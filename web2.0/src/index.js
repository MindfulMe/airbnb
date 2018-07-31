import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import App from "./map/map";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
