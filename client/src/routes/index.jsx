import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";

const indexRoutes = [
  { path: "/home", name: "LandingPage", component: LandingPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/", component: Dashboard }
];

export default indexRoutes;