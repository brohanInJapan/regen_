const MapIcon = ({ onClick, className = "" }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="16"
      height="16"
      id="a"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <path
        className="b"
        d="m32,22.0147v4.1459c0,3.2117-2.6098,5.8394-5.843,5.8394h-4.7522l10.3031-10.2968.2921.3115Z"
      />
      <path
        className="c"
        d="m32,5.8394v13.4111l-11.4911-11.4842L27.9685.3114c2.3371.7397,4.0315,2.9392,4.0315,5.5281Z"
      />
      <path
        className="c"
        d="m9.9915,0h-4.1485C2.6099,0,0,2.6277,0,5.8394v20.3211c0,3.2117,2.6099,5.8394,5.843,5.8394h12.8156l11.6664-11.6594L9.9915,0Zm1.6556,25.9076c-1.8113,0-6.291-4.6326-6.291-8.8176,0-4.1655,2.8241-6.2676,6.291-6.2676,3.4863,0,6.3104,2.1021,6.3104,6.2676,0,4.185-4.4796,8.8176-6.3104,8.8176Z"
      />
      <path
        className="c"
        d="m14.8996,16.2725c0,1.7907-1.4607,3.2311-3.2526,3.2311-1.7724,0-3.2332-1.4404-3.2332-3.2311s1.4607-3.2312,3.2332-3.2312c1.7918,0,3.2526,1.4404,3.2526,3.2312Z"
      />
      <polygon
        className="b"
        points="25.5339 0 19.126 6.3844 12.7378 0 25.5339 0"
      />
    </svg>
  );
};

export default MapIcon;