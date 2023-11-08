import React from "react";

const SettingsIcon = ({ onClick, className = "" }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      height="32"
      id="user_inv"
      width="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="Ellipse_317"
        cx="5"
        cy="5"
        fill="#5a606d"
        r="5"
        transform="translate(11 4)"
        data-name="Ellipse 317"
      />
      <path
        id="Path_1420"
        d="M26,23.5c0,3.314-4.477,4.5-10,4.5S6,26.814,6,23.5,10.477,16,16,16,26,20.186,26,23.5Z"
        fill="#5a606d"
        data-name="Path 1420"
      />
    </svg>
  );
};

export default SettingsIcon;
