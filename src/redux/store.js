import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
// import { logger } from "redux-logger";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";

//logger
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
);

export default store;
