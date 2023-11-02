import React from "react";

const Logo = () => {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="30" fill="#3E7EFF" />
      <mask
        id="mask0_353_15506"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="60"
        height="60"
      >
        <rect width="60" height="60" rx="30" fill="white" />
      </mask>
      <g mask="url(#mask0_353_15506)">
        <rect width="60" height="60" fill="#7A52F4" />
      </g>
      <rect x="9" y="12" width="42" height="36" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_353_15506"
            transform="matrix(0.000684619 0 0 0.000798722 -0.00216796 0)"
          />
        </pattern>
        <image id="image0_353_15506" width="1467" height="1252" />
      </defs>
    </svg>
  );
};

export default Logo;
