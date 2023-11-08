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

import { usersMap } from "./Users";

export default function App() {
  const [user, setUser] = useState(usersMap[0]);
  const modules = user.modules;

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
      >
        <Logo navState={navState} />

        <Modules>
          {modules.map((module) => (
            <ModuleBtn
              key={module}
              navState={navState}
              onHandleNavState={handleNavState}
              title={module}
              onClick={() => setModuleState(module)}
            ></ModuleBtn>
          ))}
        </Modules>

        <Plug navState={navState} />
      </Nav>

      <Module>
        <Toolbar>
          <Breadcrums
            onClick={() => handleNavState()}
            moduleState={moduleState}
          />

          <QuickAccess>
            <Profile user={user} />
            <Setting onClick={() => setModuleState("home")} />
            <MapTest onClick={() => setModuleState("map")} />
          </QuickAccess>
        </Toolbar>

        <ModuleWindow moduleState={moduleState} />
      </Module>
    </>
  );
}
