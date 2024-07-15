import { IMenuItems } from "./interfaceMenuItems";

const nav: Omit<IMenuItems, 'permission'>[] = [
  {
    // permission: true,
    label: 'HOME',
    path: 'dashboard'
    // children: [
    //   {
    //     label: 'teste',
    //     path: ''
    //   },
    // ],
  },
  {
    label: 'PLOTS',
    path: 'my-plots/listar'
  },
  {
    // permission: true,
    label: 'MENU',
    path: 'dashboard'
    // children: [
    //   {
    //     label: 'teste',
    //     children: [
    //       {
    //         label: '1',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    // permission: true,
    label: 'MODULES',
    children: [
      {
        label: 'Estado',
        // path: 'cadastro-estado'
        children: [
          {
            label: 'Cadastrar estado',
            path: 'cadastro-estado'
          },
          {
            label: 'Vizualizar estado',
            path: 'cadastro-estado/listar'
          },
        ],
      },
      {
        label: 'Plot',
        // path: 'cadastro-estado/listar',
        children: [
          {
            label: 'cadastrar plot',
            path: 'cadastro-plot'
          },
          {
            label: 'listar plot',
            path: 'cadastro-plot/listar'
          },
        ],
      },
    ],
  },
];

export default nav