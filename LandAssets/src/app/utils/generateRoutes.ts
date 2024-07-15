import { Component, Type } from '@angular/core';
import IRoutes from '../interfaces/IRoutes';

export const generateRoutes = (
  path: string,
  permission: {
    edit: boolean;
    create: boolean;
    vizualizar: boolean;
    listagem: boolean;
  },
  createComponent?: Type<any>,
  viewComponent?: Type<any>,
): IRoutes[] => {
  let routes: IRoutes[] = [];
  if (permission.vizualizar && createComponent) {
    routes.push({ path: `${path}/vizualizar/:id`, component: createComponent });
  }
  if (permission.edit && createComponent) {
    routes.push({ path: `${path}/editar/:id`, component: createComponent });
  }
  if (permission.create && createComponent) {
    routes.push({ path: path, component: createComponent });
  }
  if (permission.listagem && viewComponent) {
    routes.push({ path: `${path}/listar`, component: viewComponent });
  }

  return routes;
};
