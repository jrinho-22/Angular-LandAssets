import IRoutes from 'src/app/interfaces/IRoutes';
import { PaymentClientPlotComponent } from './payment-client-plot/cadastro-client-plot.component';
import { ViewClientPlotComponent } from './view-client-plot/view-client-plot.component';
import { generateRoutes } from 'src/app/utils/generateRoutes';

const permissions = {
  edit: false,
  create: false,
  vizualizar: false,
  listagem: true,
};

export const baseRoute = 'my-plots';

const routes: IRoutes[] = generateRoutes(
  baseRoute,
  permissions,
  undefined,
  // PaymentClientPlotComponent,
  ViewClientPlotComponent,
);

export default routes;
