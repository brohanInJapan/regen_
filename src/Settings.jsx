import { createContext, useContext, useRef, useState, useEffect } from "react";
import { FileBrokenIcon } from "./assets/FileBrokenIcon";

const toggleModuleState = createContext({});

export function Settings({ onToggleModule }) {
  return (
    <div className="settings">
      <Profile />
      <toggleModuleState.Provider value={onToggleModule}>
        <Search />
        <Setting />
        <MapTest />
      </toggleModuleState.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div className="btn-icon space-right">
      <FileBrokenIcon />
    </div>
  );
}

function Search() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  const storeSubmition = () => {
    previousInputValue.current = inputValue;
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Value: {inputValue}</p>
      <p>Previous Value: {previousInputValue.current}</p>
      <button onClick={storeSubmition}>submit</button>
    </>
  );
}

function Setting() {
  const ModuleStates = useContext(toggleModuleState);
  const setModuleState = ModuleStates.setModuleState;

  const myBtn = useRef(null);

  return (
    <div className="can-click" onClick={() => setModuleState("home")}>
      <FileBrokenIcon />
    </div>
  );
}

function MapTest() {
  const ModuleStates = useContext(toggleModuleState);
  const setModuleState = ModuleStates.setModuleState;

  return (
    <div className="can-click" onClick={() => setModuleState("map")}>
      <FileBrokenIcon />
    </div>
  );
}
