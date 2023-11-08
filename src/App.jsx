import { useState } from "react";
import { Module, ModuleWindow } from "./02_Main/Module";
import {
  Nav,
  Logo,
  Modules,
  ModuleBtn,
  ModuleItem,
  Plug,
} from "./01_Sidenav/Nav";
import { Toolbar } from "./02_Main/01_Toolbar/Toolbar";
import { Breadcrums } from "./02_Main/01_Toolbar/Breadcrums";
import {
  QuickAccess,
  Profile,
  Setting,
  MapTest,
} from "./02_Main/01_Toolbar/QuickAccess";

export default function App() {
  const [navState, setNavState] = useState("closed");
  const [moduleState, setModuleState] = useState("home");

  const handleNavState = () => {
    if (navState === "open") {
      setNavState("closed");
      document.getElementById("root").classList.add("closed");
      document.getElementById("root").classList.remove("open");
    } else {
      setNavState("open");
      document.getElementById("root").classList.add("open");
      document.getElementById("root").classList.remove("closed");
    }
  };

  return (
    <>
      <Nav
        className={navState === "open" ? "unselectable" : "closed unselectable"}
        onToggleModule={{ moduleState, setModuleState }}
      >
        <Logo navState={navState} />
        <Modules>
          <ModuleBtn navState={navState} onHandleState={handleNavState}>
            <ModuleItem item={"hello?"} />
            <ModuleItem />
          </ModuleBtn>
        </Modules>
        <Plug navState={navState} />
      </Nav>

      <Module
        onToggleNavState={{ navState, setNavState, handleNavState }}
        onToggleModule={{ moduleState, setModuleState }}
      >
        <Toolbar>
          <Breadcrums onHandleState={handleNavState} />
          <QuickAccess>
            <Profile />
            <Setting onClick={() => setModuleState("home")} />
            <MapTest onClick={() => setModuleState("map")} />
          </QuickAccess>
        </Toolbar>

        <ModuleWindow moduleState={moduleState} />
      </Module>
    </>
  );
}
