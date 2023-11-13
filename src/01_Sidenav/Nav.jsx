import { useState } from "react";

import { LogoIcon } from "../assets/LogoIcon";
import { LogogrpahIcon } from "../assets/LogographIcon";
import FileBrokenIcon from "../assets/FileBrokenIcon";
import { ArrowDownIcon } from "../assets/ArrowDownIcon";
import PlugIcon from "../assets/PlugIcon";
import PlugIcon_s from "../assets/PlugIcon_s";

export function Nav({ children, className }) {
  return <nav className={className}>{children}</nav>;
}

export function Logo({ navState }) {
  const [theme] = useState("dark");

  function onHandleTheme() {
    document.body.classList.toggle(theme);
  }

  return (
    <div className="logo" onClick={onHandleTheme}>
      {navState === "open" ? <LogoIcon /> : <LogogrpahIcon />}
    </div>
  );
}

export function Modules({ children }) {
  return <div className="modules">{children}</div>;
}

export function ModuleBtn({
  navState,
  // onHandleNavState,
  icon = <FileBrokenIcon />,
  title = "Title",
  children,
  onClick,
}) {
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);

  // function handleToggleDropdown() {
  //   if (navState === "closed") onHandleNavState();
  //   setIsDropdownToggled((toggleDropdown) => !toggleDropdown);
  // }

  return (
    <>
      <div
        className={isDropdownToggled ? "module-selected" : "module"}
        onClick={onClick}
        onChange={
          navState === "closed" && isDropdownToggled
            ? setIsDropdownToggled(false)
            : null
        }
      >
        <div className="btn-icon">{icon}</div>
        <p>{title}</p>
        <ArrowDownIcon />
      </div>
      {isDropdownToggled ? <ul>{children}</ul> : <></>}
    </>
  );
}

export function ModuleItem({ item = "no content" }) {
  return <li>{item}</li>;
}

export function Plug({ navState }) {
  return (
    <div className="plug">
      {navState === "open" ? <PlugIcon /> : <PlugIcon_s />}
    </div>
  );
}
