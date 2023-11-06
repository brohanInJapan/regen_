/* eslint-disable react/prop-types */
import MenuToggleIcon from "../../assets/icons_general/MenuToggleIcon";
import HomeIcon from "../../assets/icons_general/HomeIcon";

export function Breadcrums({ ...onToggleNavState }) {
  const navStateProps = { ...onToggleNavState.onToggleNavState };
  const handleNavState = navStateProps.handleNavState;

  return (
    <div className="changename" onClick={handleNavState}>
      <MenuToggleIcon />
      <div>
        <div className="breadcrums">
          <HomeIcon />
          <Crums />
        </div>
        <p className="page-title">Page Title</p>
      </div>
    </div>
  );
}

function Crums() {
  return <p className="crums-leaf can-click">/ Module</p>;
}
