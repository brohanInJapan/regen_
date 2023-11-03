import { useState } from "react";
import { Module } from "./Module";
import { Nav } from "./Nav";

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
        onToggleNavState={{ navState, setNavState, handleNavState }}
        onToggleModule={{ moduleState, setModuleState }}
      />
      <Module
        onToggleNavState={{ navState, setNavState, handleNavState }}
        onToggleModule={{ moduleState, setModuleState }}
      />
    </>
  );
}
