import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

export const getStore = () => {
  const persistConfig = { key: "root", storage };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
