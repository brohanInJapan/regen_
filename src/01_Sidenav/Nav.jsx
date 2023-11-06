import { useContext, createContext } from "react";
import { useState } from "react";

import { LogoIcon } from "../assets/LogoIcon";
import { LogogrpahIcon } from "../assets/LogographIcon";
import FileBrokenIcon from "../assets/FileBrokenIcon";
import { ArrowDownIcon } from "../assets/ArrowDownIcon";
import PlugIcon from "../assets/PlugIcon";
import PlugIcon_s from "../assets/PlugIcon_s";

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
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);

  const onToggleNav = useContext(toggleNavContext);
  const navState = onToggleNav.navState;
  const handleNavState = onToggleNav.handleNavState;

  function handleToggleDropdown() {
    if (navState === "closed") handleNavState();

    setIsDropdownToggled((toggleDropdown) => !toggleDropdown);
  }

  return (
    <>
      <div
        className={isDropdownToggled ? "module-selected" : "module"}
        onClick={handleToggleDropdown}
        onChange={
          navState === "closed" && isDropdownToggled
            ? setIsDropdownToggled(false)
            : null
        }
      >
        <div className="btn-icon">
          <FileBrokenIcon />
        </div>
        <p>Title</p>
        <ArrowDownIcon />
      </div>
      {isDropdownToggled ? (
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
