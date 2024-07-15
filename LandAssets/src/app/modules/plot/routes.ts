import IRoutes from "src/app/interfaces/IRoutes";
import { generateRoutes } from "src/app/utils/generateRoutes";
import { CadastroPlotComponent } from "./cadastro-plot/cadastro-plot.component";
import { ViewPlotComponent } from "./view-plot/view-plot.component";

const permissions = {
    edit: true,
    create: true,
    vizualizar: true,
    listagem: true,
  };
  
  export const baseRoute = 'cadastro-plot';
  
  export const plotRoutes: IRoutes[] = generateRoutes(
    baseRoute,
    permissions,
    CadastroPlotComponent,
    ViewPlotComponent,
  );
  