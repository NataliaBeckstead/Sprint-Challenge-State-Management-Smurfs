
import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { smurfReducer as reducer } from "./reducers/smurfReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Smurfs village</h1>
        <Smurfs />
        <SmurfForm />
      </div>
    </Provider>
  );
}