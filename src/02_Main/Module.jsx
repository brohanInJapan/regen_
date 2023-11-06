import { createContext, useContext } from "react";
import { Toolbar } from "./01_Toolbar/Toolbar";
import { Map } from "./Map";
import FileBrokenIcon from "../assets/fileBrokenIcon";
import Button from "../03_Generic/Button";

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
      <FileBrokenIcon fill_a={"pink"} />

      <Button styleClass={"btn"}>
        <p>DELETE</p>
        <FileBrokenIcon />
      </Button>

      <Button styleClass={"btn"}>
        <FileBrokenIcon />
        <div>
          <p>title</p>
          <p>test text</p>
        </div>
      </Button>

      <Button styleClass={"btn-danger"}>
        {console.log("this one")}
        <FileBrokenIcon fall_a={"pink"} />
        <div>
          <p>DELETE</p>
          <p>test text</p>
        </div>
      </Button>

      <Button styleClass={"btn-info"}>
        <FileBrokenIcon />
      </Button>

      <Button styleClass={"btn-warning"}>
        <p>ACCEPT</p>
      </Button>
    </>
  );
}
