export interface IMenuItems {
    label: string;
    children?: IMenuItems[];
    route?: string;
    path?: string
  }