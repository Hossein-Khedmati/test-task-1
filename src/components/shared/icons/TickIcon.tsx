import * as React from 'react';
import type { SVGProps } from 'react';

const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.625 12L8.86765 17.625L21.375 6.375"
      stroke="currentColor"
      strokeWidth={2.98145}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TickIcon;
