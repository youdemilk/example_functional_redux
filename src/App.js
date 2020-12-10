import React from "react";
import MainPage from "./pages/mainPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getSagaStore } from "./redux/sagaStore";

const App = () => {
  const { store, persistor } = getSagaStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainPage
          decreaseButtonText={"Decrease value"}
          increaseButtonText={"Increase Value"}
          mainText={"Hello, World!"}
          resetButtonText={"Reset value"}
          saveToReduxButtonText={"Save to Redux"}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
