import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import formReducer from "./components/form/form-reducer";
import  Form  from "./components/form/form";

const app = document.getElementById('app')

const store = createStore(formReducer)

ReactDOM.render(
    <Provider store={store}>
        <Form />
    </Provider>
    , app);