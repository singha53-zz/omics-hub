import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";


var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/user", name: "UserProfile", component: UserProfile },
  { path: "/table", name: "TableList", component: TableList },
  { path: "/typography", name: "Typography", component: Typography },
  { path: "/icons", name: "Icons", component: Icons },
  { path: "/maps", name: "Maps", component: Maps },
  { path: "/notifications", name: "NotificationsPage", component: NotificationsPage },
  { path: "/upgrade-to-pro", name: "UpgradeToPro", component: UpgradeToPro }
];

export default indexRoutes;