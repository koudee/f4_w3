import React from "react";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer";
import { thunk } from "redux-thunk";


export const store= createStore(reducer, applyMiddleware(thunk));