/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const toggleModuleState = createContext({});

export function Settings({ onToggleModule }) {
  return (
    <div className="settings">
      <Profile />
      <toggleModuleState.Provider value={onToggleModule}>
        <Setting />
        <MapTest />
      </toggleModuleState.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div className="btn-icon space-right">
      <img
        className="icon-24"
        src="src/assets/icons_general/user_inv.svg"
        alt=""
        href="#"
      />
    </div>
  );
}

function Setting() {
  const ModuleStates = useContext(toggleModuleState);
  const setModuleState = ModuleStates.setModuleState;

  return (
    <div className="can-click" onClick={() => setModuleState("home")}>
      <img
        className="icon-28"
        src="src/assets/icons_general/file_broken_inv.svg"
        alt=""
        href="#"
      />
    </div>
  );
}

function MapTest() {
  const ModuleStates = useContext(toggleModuleState);
  const setModuleState = ModuleStates.setModuleState;

  return (
    <div className="can-click" onClick={() => setModuleState("map")}>
      <img
        className="icon-28"
        src="src/assets/icons_general/file_broken_inv.svg"
        alt=""
        href="#"
      />
    </div>
  );
}
