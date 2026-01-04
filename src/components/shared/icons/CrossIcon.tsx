import * as React from 'react';
import type { SVGProps } from 'react';

const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_978_7190)">
      <path
        d="M2.95312 20.9844L20.922 3.0156"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.922 20.9844L2.95312 3.01556"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_978_7190">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CrossIcon;
