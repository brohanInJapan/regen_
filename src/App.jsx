import { useState } from "react";

import { Nav, Logo, Modules, ModuleBtn, Plug } from "./01_Sidenav/Nav";

import { Module, ModuleWindow } from "./02_Main/Module";

import { Toolbar } from "./02_Main/01_Toolbar/Toolbar";
import { Breadcrums } from "./02_Main/01_Toolbar/Breadcrums";
import {
  QuickAccess,
  Profile,
  Setting,
  MapTest,
} from "./02_Main/01_Toolbar/QuickAccess";

import { Map } from "./02_Main/Map";
import { Settings } from "./02_Main/02_Settings/Settings";

import { usersData } from "./Data/UsersData";
import { moduleData } from "./Data/ModulesData";

export default function App() {
  const [user] = useState(usersData[0]);
  const [posibleModules] = useState(moduleData);
  const userModules = user.modules;

  const [navState, setNavState] = useState("closed");
  const [moduleState, setModuleState] = useState("Home");

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
        className={
          navState === "open"
            ? "unselectable sidenav "
            : "closed unselectable sidenav"
        }
      >
        <Logo navState={navState} />

        <Modules>
          {userModules.map((_module) => (
            <ModuleBtn
              key={_module}
              navState={navState}
              onHandleNavState={handleNavState}
              title={_module}
              onClick={() => setModuleState(_module)}
              icon={posibleModules[0][_module]}
            ></ModuleBtn>
          ))}
        </Modules>

        <Plug navState={navState} />
      </Nav>

      <Module>
        <Toolbar>
          <Breadcrums
            onClick={() => handleNavState()}
            onHome={() => setModuleState("home")}
            moduleState={moduleState}
          />

          <QuickAccess>
            <Profile user={user} />
            <Setting />
            <MapTest />
          </QuickAccess>
        </Toolbar>

        <ModuleWindow moduleState={moduleState}>
          {moduleState === "Home" && <TestHome />}
          {moduleState === "Map" && <Map />}
          {moduleState === "Settings" && <Settings user={user} />}
        </ModuleWindow>
      </Module>
    </>
  );
}

function TestHome() {
  return (
    <>
      <h2>Home Screen</h2>
    </>
  );
}
