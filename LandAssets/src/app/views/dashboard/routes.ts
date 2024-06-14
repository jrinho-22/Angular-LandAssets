import IRoutes from "src/app/interfaces/IRoutes";
import { DashboardComponent } from "./dashboard.component";

const dashboardPath = 'dashboard'

const dashboardRoute: IRoutes = {
  path: dashboardPath,
  component: DashboardComponent,
};

const fallBackRoute: IRoutes = {
  path: "**",
  redirectTo: dashboardPath,
};


export default [dashboardRoute, fallBackRoute]