// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails";
import "./controllers";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Greetings from "./Component/Greetings";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <nav>
            <nav>
              <Link to="/greetings">Greetings</Link>
            </nav>
          </nav>
          <Routes>
            <Route path="/greetings" element={<Greetings />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
