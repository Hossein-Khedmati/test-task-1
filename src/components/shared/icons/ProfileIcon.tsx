import * as React from 'react';
import type { SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_644_6337)">
      <rect width={56} height={56} rx={8} fill="#374151" />
      <path
        d="M27.8645 36C35.0027 36 40.7895 30.1797 40.7895 23C40.7895 15.8203 35.0027 10 27.8645 10C20.7262 10 14.9395 15.8203 14.9395 23C14.9395 30.1797 20.7262 36 27.8645 36Z"
        fill="#D1D5DB"
      />
      <path
        d="M52 57C52 54.7675 51.3922 52.5569 50.2112 50.4944C49.0302 48.4318 47.2992 46.5578 45.117 44.9792C42.9348 43.4006 40.3442 42.1484 37.4931 41.294C34.6419 40.4397 31.5861 40 28.5 40C25.4139 40 22.3581 40.4397 19.5069 41.294C16.6558 42.1484 14.0652 43.4006 11.883 44.9792C9.70081 46.5578 7.96982 48.4318 6.78883 50.4944C5.60784 52.5569 5 54.7675 5 57L28.5 57H52Z"
        fill="#D1D5DB"
      />
    </g>
    <defs>
      <clipPath id="clip0_644_6337">
        <rect width={56} height={56} rx={8} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ProfileIcon;
