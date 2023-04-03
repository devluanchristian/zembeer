import { Route, Routes } from "react-router-dom";
import ChangeCompletedRouterPresentation from "../pages/ChangeCompleted/ChangeCompleted.router.presentation";
import ConfirmPassPresentation from "../pages/ConfirmPass/ConfirmPass.presentation";
import DashboardRouterPresentation from "../pages/Dashboard/Dashboard.router.presentation";
import ForgotRouterPresentation from "../pages/Forgot/Forgot.router.presentation";
import LoginRouterPresentation from "../pages/Login/Login.router.presentation";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LoginRouterPresentation />} />
      <Route path={"/confirmpass"} element={<ConfirmPassPresentation />} />
      <Route
        path={"/changecompleted"}
        element={<ChangeCompletedRouterPresentation />}
      />
      <Route path={"/forgot"} element={<ForgotRouterPresentation />} />

      {/* essa rota será privada */}
      <Route path={"/dashboard"} element={<DashboardRouterPresentation />} />
    </Routes>
  );
};

export default RoutesApp;
