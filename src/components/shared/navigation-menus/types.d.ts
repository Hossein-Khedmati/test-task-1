import { ComponentType, SVGProps } from 'react';
export type SimpleLink = {
  label: string;
  href: string;
  icon?:  ComponentType<SVGProps<SVGSVGElement>>;
};

export type Column = {
  label: string;
  icon?:  ComponentType<SVGProps<SVGSVGElement>>;
  items: SimpleLink[];
};

export type MenuItem = {
  label: string;
  href?: string;
  icon?:  ComponentType<SVGProps<SVGSVGElement>>;
  submenu?: SimpleLink[];
  columns?: Column[];
};
