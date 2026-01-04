import * as React from 'react';
import type { SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.58203 12V7.728C2.58203 2.424 6.26438 0.251996 10.7703 2.904L14.4056 5.04L18.0409 7.176C22.5467 9.828 22.5467 14.172 18.0409 16.824L14.4056 18.96L10.7703 21.096C6.26438 23.748 2.58203 21.576 2.58203 16.272V12Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlayIcon;
