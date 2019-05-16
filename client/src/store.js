// store.js

import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
  // blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//         persistedReducer,
//         compose(applyMiddleware(thunk)));

// export default store;
export default () => {
  let store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  let persistor = persistStore(store);
  return { store, persistor };
};
