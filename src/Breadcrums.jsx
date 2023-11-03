/* eslint-disable react/prop-types */
export function Breadcrums({ ...onToggleNavState }) {
  const navStateProps = { ...onToggleNavState.onToggleNavState };
  const handleNavState = navStateProps.handleNavState;

  return (
    <div className="changename">
      <img
        className="can-click"
        src="src/assets/icons_general/menu_a.svg"
        alt=""
        onClick={handleNavState}
      />
      <div>
        <div className="breadcrums">
          <img
            className="can-click"
            src="src/assets/icons_general/home_inv.svg"
            alt=""
          />
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
