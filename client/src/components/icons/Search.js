import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          opacity={0.459}
          d="M23.636 22.16l-6.674-6.737a9.511 9.511 0 10-1.444 1.462l6.631 6.693a1.028 1.028 0 001.45.038 1.034 1.034 0 00.037-1.455zm-14.15-5.195a7.511 7.511 0 115.313-2.2 7.468 7.468 0 01-5.313 2.2z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h23.918v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
