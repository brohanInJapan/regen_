import { useContext, createContext } from "react";
import { useState } from "react";

import { LogoIcon } from "./assets/LogoIcon";
import { LogogrpahIcon } from "./assets/LogographIcon";
import { FileBrokenIcon } from "./assets/FileBrokenIcon";
import { ArrowDownIcon } from "./assets/ArrowDownIcon";
import PlugIcon from "./assets/PlugIcon";
import PlugIcon_s from "./assets/PlugIcon_s";

const toggleNavContext = createContext({});

export function Nav({ ...onToggleNavState }) {
  const navStateProps = { ...onToggleNavState.onToggleNavState };
  const toggleNav = navStateProps.navState;

  return (
    <nav
      className={toggleNav === "open" ? "unselectable" : "closed unselectable"}
    >
      <toggleNavContext.Provider value={navStateProps}>
        <Logo />
        <Modules />
        <Plug />
      </toggleNavContext.Provider>
    </nav>
  );
}

function Logo() {
  const onToggleNav = useContext(toggleNavContext);
  const navState = onToggleNav.navState;
  const [theme, setTheme] = useState("dark");

  function onHandleTheme() {
    document.body.classList.toggle(theme);
  }

  return (
    <div className="logo" onClick={onHandleTheme}>
      {navState === "open" ? <LogoIcon /> : <LogogrpahIcon />}
    </div>
  );
}

function Modules() {
  return (
    <div className="modules">
      <ModuleBtn />
      <ModuleBtn />
      <ModuleBtn />
      <ModuleBtn />
    </div>
  );
}

function ModuleBtn() {
  const [toggleDropdown, setToggleDropdown] = useState("closed");

  const onToggleNav = useContext(toggleNavContext);
  const navState = onToggleNav.navState;
  const setNavState = onToggleNav.setNavState;

  function handleToggleDropdown() {
    toggleDropdown === "open"
      ? setToggleDropdown("closed")
      : setToggleDropdown("open");

    if (navState !== "open") setNavState("open");
  }

  return (
    <>
      <div
        className={"module"}
        onClick={handleToggleDropdown}
        onChange={
          navState === "closed" && toggleDropdown === "open"
            ? setToggleDropdown("closed")
            : null
        }
      >
        <div className="btn-icon">
          <FileBrokenIcon />
        </div>
        <p>Title</p>
        <ArrowDownIcon />
      </div>
      {toggleDropdown === "open" ? (
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

function Plug() {
  const onToggleNav = useContext(toggleNavContext);
  const navState = onToggleNav.navState;

  return (
    <div className="plug">
      {navState === "open" ? <PlugIcon /> : <PlugIcon_s />}
    </div>
  );
}
