import { Routes as Switch, Route } from "react-router-dom";
import { SCREEN_PATHS } from "../constants/paths";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREEN_PATHS.login} element={<Login />} />
      <Route element={<PrivateRoutes />}>
        {
          /* ADD PRIVATE ROUTES HERE */
          <Route path={SCREEN_PATHS.home} element={<Home />} />
        }
      </Route>
    </Switch>
  );
};

export default Routes;
