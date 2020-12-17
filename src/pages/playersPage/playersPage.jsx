import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

const PlayersPage = (props) => {
  const { state } = useLocation();

  return (
    <div className={"main-div"}>
      <p>{state.mainText}</p>
    </div>
  );
};

export default PlayersPage;
