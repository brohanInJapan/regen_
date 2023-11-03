/* eslint-disable react/prop-types */
// import { P5Test } from "./P5Test";
import { createContext, useContext } from "react";
import { Toolbar } from "./Toolbar";
import { Map } from "./Map";
import { icon } from "leaflet";

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
      {/* <P5Test id="map" className="test-module" width={width} height={height} /> */}
    </div>
  );
}

function TestHome() {
  const icon = "src/assets/icons_general/info_inv.svg";
  return (
    <>
      <h1>Home Screen</h1>

      <button className="btn">
        <p>DELETE</p>
        <img className="icon-24" src={icon} />
      </button>

      <button className="btn">
        <img className="icon-24" src={icon} />
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
        <img className="icon-24" src={icon} />
      </button>

      <button className="btn-warning">
        <p>ACCEPT</p>
      </button>
    </>
  );
}
