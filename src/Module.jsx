import { createContext, useContext } from "react";
import { Toolbar } from "./Toolbar";
import { Map } from "./Map";
import { FileBrokenIcon } from "./assets/fileBrokenIcon";

const toggleModuleState = createContext({});

export function Module({ onToggleNavState, onToggleModule }) {
  return (
    <main className="unselectable">
      <toggleModuleState.Provider value={onToggleModule}>
        <Toolbar
          onToggleNavState={onToggleNavState}
          onToggleModule={onToggleModule}
        />
        <ModuleWindow />
      </toggleModuleState.Provider>
    </main>
  );
}

function ModuleWindow() {
  const ModuleStates = useContext(toggleModuleState);
  const moduleState = ModuleStates.moduleState;

  return (
    <div className="container">
      {moduleState === "home" && <TestHome />}
      {moduleState === "map" && <Map />}
    </div>
  );
}

function TestHome() {
  const icon = "src/assets/icons_general/info_inv.svg";
  return (
    <>
      <h1>Home Screen</h1>
      <FileBrokenIcon />

      <button className="btn">
        <p>DELETE</p>
        <FileBrokenIcon className="icon-24" />
      </button>

      <button className="btn">
        <FileBrokenIcon />
        <div>
          <p>title</p>
          <p>test text</p>
        </div>
      </button>

      <button className="btn-danger">
        <div>
          <p>DELETE</p>
          <p>test text</p>
        </div>
      </button>

      <button className="btn-info">
        <FileBrokenIcon />
      </button>

      <button className="btn-warning">
        <p>ACCEPT</p>
      </button>
    </>
  );
}
