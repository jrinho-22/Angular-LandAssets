import { Component, Type } from '@angular/core';
import IRoutes from '../interfaces/IRoutes';

export const generateRoutes = (
  path: string,
  createComponent: Type<any>,
  viewComponent: Type<any>,
  permission: {
    edit: boolean;
    create: boolean;
    vizualizar: boolean;
    listagem: boolean;
  }
): IRoutes[] => {
  let routes: IRoutes[] = [];
  if (permission.vizualizar) {
    routes.push({ path: `${path}/vizualizar/:id`, component: createComponent });
  }
  if (permission.edit) {
    routes.push({ path: `${path}/editar/:id`, component: createComponent });
  }
  if (permission.create) {
    routes.push({ path: path, component: createComponent });
  }
  if (permission.listagem) {
    routes.push({ path: `${path}/listar`, component: viewComponent });
  }

  return routes;
};
