const HomeIcon = ({ onClick, className = "" }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="20"
      height="20"
      id="home_inv"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Path_896"
        d="M17.63,8.948,13.286,6.273a1.408,1.408,0,0,0-1.488,0L7.455,8.948a1.413,1.413,0,0,0-.675,1.206v6.912A1.423,1.423,0,0,0,8.2,18.485H16.88A1.423,1.423,0,0,0,18.3,17.066V10.154A1.413,1.413,0,0,0,17.63,8.948Zm-2.769,7.944H10.224a.534.534,0,1,1,0-1.069h4.637a.534.534,0,1,1,0,1.069Z"
        fill="#a1a6ae"
        transform="translate(-2.542 -2.273)"
        data-name="Path 896"
      />
    </svg>
  );
};

export default HomeIcon;
