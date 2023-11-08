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

import { usersData } from "./Data/UsersData";
import { moduleData } from "./Data/ModulesData";

export default function App() {
  const [user, setUser] = useState(usersData[0]);
  const [module, setModule] = useState(...moduleData);
  const modules = user.modules;

  console.log(module.Home);

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
        className={navState === "open" ? "unselectable" : "closed unselectable"}
      >
        <Logo navState={navState} />

        <Modules>
          {modules.map((_module) => (
            <ModuleBtn
              key={_module}
              navState={navState}
              onHandleNavState={handleNavState}
              title={_module}
              onClick={() => setModuleState(_module)}
              icon={module[_module]}
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
            <Setting onClick={() => setModuleState("home")} />
            <MapTest onClick={() => setModuleState("map")} />
          </QuickAccess>
        </Toolbar>

        <ModuleWindow moduleState={moduleState} />
      </Module>
    </>
  );
}
