/* eslint-disable react/prop-types */
import MenuToggleIcon from "../../assets/icons_general/MenuToggleIcon";
import HomeIcon from "../../assets/icons_general/HomeIcon";

export function Breadcrums({ onClick, moduleState = "", onHome }) {
  return (
    <div className="changename">
      <div className="can-click" onClick={onClick}>
        <MenuToggleIcon />
      </div>

      <div>
        <div className="breadcrums">
          <HomeIcon className={"can-click"} onClick={onHome} />
          <Crums />
        </div>
        <p className="page-title">{moduleState.toLocaleUpperCase()}</p>
      </div>
    </div>
  );
}

function Crums() {
  return <p className="crums-leaf can-click">/ TODO</p>;
}
