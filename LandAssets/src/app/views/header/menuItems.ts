export default [
  {
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
    label: 'MENU',
    children: [
      {
        label: 'teste',
        children: [
          {
            label: '1',
          },
        ],
      },
    ],
  },
  {
    label: 'CADASTROS',
    children: [
        {
          label: 'cadastrar estado',
          path: 'cadastro-estado'
          // children: [
          //   {
          //     label: '1',
          //   },
          // ],
        },
        {
            label: 'cadastrar cidade',
            children: [
              {
                label: '1',
                path: ''
              },
            ],
        },
      ],
  },
];
