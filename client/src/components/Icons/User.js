import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M12 13.5A6.75 6.75 0 1012 0a6.75 6.75 0 000 13.5zm6 1.5h-2.583a8.16 8.16 0 01-6.834 0H6a6 6 0 00-6 6v.75A2.25 2.25 0 002.25 24h19.5A2.251 2.251 0 0024 21.75V21a6 6 0 00-6-6z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
