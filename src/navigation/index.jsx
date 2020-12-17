import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";

export const AppNavigator = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
