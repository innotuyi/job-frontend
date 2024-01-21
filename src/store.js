import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from "@redux-devtools/extension";

import {
    propertiesListReducer,
    propertiesDetailsReducer,
    printingFilterReducer,
    brandingFilterReducer,
    designingFilterReducer,
    productDetailsReducer,

  } from "./reducers/propertiesReducers";

  import { activeCategoryReducer } from "./reducers/categoryReducer";

  

const reducer = combineReducers({
    propertyLists: propertiesListReducer,
    propertyDetails: propertiesDetailsReducer,
    productDetails: productDetailsReducer,
    printingLists:printingFilterReducer,
    brandingLists:brandingFilterReducer,
    designingLists:designingFilterReducer,
    activeCategory: activeCategoryReducer,
  });
  
const initialState = { activeCategory: "" };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
