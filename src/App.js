import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getSagaStore } from "./redux/sagaStore";
import { AppNavigator } from "./navigation";

const App = () => {
  const { store, persistor } = getSagaStore();
  // <MainPage
  //     decreaseButtonText={"Decrease value"}
  //     increaseButtonText={"Increase Value"}
  //     mainText={"Hello, World!"}
  //     resetButtonText={"Reset value"}
  // />
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
