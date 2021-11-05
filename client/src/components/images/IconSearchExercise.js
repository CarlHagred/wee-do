import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={53}
      height={53}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M52.281 45.816L41.956 35.493a2.483 2.483 0 00-1.768-.724h-1.682a21.522 21.522 0 00-2.712-29.37 21.535 21.535 0 00-29.488.906A21.523 21.523 0 0019.552 42.96a21.536 21.536 0 0015.226-4.464v1.684a2.483 2.483 0 00.725 1.767L45.828 52.27a2.474 2.474 0 003.512 0l2.931-2.93a2.503 2.503 0 00.01-3.521v-.003zm-30.76-11.044A13.26 13.26 0 019.275 26.59a13.25 13.25 0 019.661-18.07 13.26 13.26 0 0113.61 5.636 13.25 13.25 0 01-11.023 20.613v.003z"
        fill="#fff"
      />
      <g clipPath="url(#prefix__clip0_412:5358)">
        <path
          d="M21.5 12a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm4.431 10.42l-6.742 3.867a.922.922 0 01-1.367-.804v-7.967a.922.922 0 011.367-.804l6.742 4.098a.922.922 0 010 1.61z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_412:5358">
          <path fill="#fff" transform="translate(12 12)" d="M0 0h19v19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
