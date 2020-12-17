import MainPage from "../../pages/mainPage";
import PlayersPage from "../../pages/playersPage";
import { route } from "../../consts/routes";
import { Route, Switch, Redirect } from "react-router-dom";

const publicRoutes = [
  {
    Component: MainPage,
    path: route.TEAMS,
    props: {
      decreaseButtonText: "Decrease value",
      increaseButtonText: "Increase Value",
      resetButtonText: "Reset value",
    },
  },
  { Component: PlayersPage, path: route.PLAYERS },
  { Component: () => <Redirect to={route.TEAMS} />, path: "*" },
];

export const PublicRoutes = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Switch>
        {publicRoutes.map(({ Component, path, props }) => {
          return (
            <Route exact path={path} key={path}>
              <Component {...props} />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};
