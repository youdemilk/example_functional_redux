import React, { useState, FC } from "react";
import CustomButton from "../../components/customButton";
import { saveCurrentSuccessAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "../../selectors";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { route } from "../../consts/routes";
import { MainPageProps } from "./types";

const MainPage: FC<MainPageProps> = (props) => {
  const { increaseButtonText, decreaseButtonText, resetButtonText } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const { counter: initialCounter } = useSelector(getCounter);

  const [counter, setCounter] = useState<number>(initialCounter);

  const saveToRedux = (counterValue: number) =>
    dispatch(saveCurrentSuccessAction({ counter: counterValue }));

  const increaseValue = () => {
    setCounter(counter + 1);
    saveToRedux(counter + 1);
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      saveToRedux(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(0);
    saveToRedux(0);
  };

  const buttonValues = [
    {
      id: 0,
      buttonText: increaseButtonText,
      onClickButton: increaseValue,
      buttonStyle: { backgroundColor: "#ff0000" },
    },
    {
      id: 1,
      buttonText: decreaseButtonText,
      onClickButton: decreaseValue,
      buttonStyle: { backgroundColor: "#db7093" },
    },
    {
      id: 2,
      buttonText: resetButtonText,
      onClickButton: resetValue,
    },
  ];

  const handleClick = () => {
    history.push({ pathname: route.PLAYERS, state: { mainText: "Hello" } });
  };

  const RenderButtons = () =>
    buttonValues.map((item) => {
      return (
        <CustomButton
          key={item.id}
          buttonText={item.buttonText}
          onClickButton={item.onClickButton}
          buttonStyle={item.buttonStyle}
        />
      );
    });

  return (
    <div className={"main-div"}>
      <div>
        <CustomButton buttonText={"Redirect"} onClickButton={handleClick} />
      </div>
      <div className={"buttons"}>
        <RenderButtons />
      </div>
      <h1>Your changed value is {counter}</h1>
    </div>
  );
};

export default MainPage;
