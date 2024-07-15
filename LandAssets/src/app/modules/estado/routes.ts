import IRoutes from 'src/app/interfaces/IRoutes';
import { CadastroEstadoComponent } from './cadastro-estado/cadastro-estado.component';
import { ViewEstadoComponent } from './view-estado/view-estado.component';
import { generateRoutes } from 'src/app/utils/generateRoutes';

const permissions = {
  edit: true,
  create: true,
  vizualizar: true,
  listagem: true,
};

export const baseRoute = 'cadastro-estado';

const routes: IRoutes[] = generateRoutes(
  baseRoute,
  permissions,
  CadastroEstadoComponent,
  ViewEstadoComponent,
);

export default routes;
