import { useContext, createContext } from "react";
import { useState } from "react";

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
      <img
        src={
          navState === "open"
            ? "src/assets/logo.svg"
            : "src/assets/logograph.svg"
        }
      ></img>
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
          navState === "close" && toggleDropdown === "open"
            ? setToggleDropdown("closed")
            : null
        }
      >
        <div className="btn-icon">
          <img
            className="icon-24"
            src="src/assets/icons_general/folder_node_inv.svg"
          />
        </div>
        <p>Title</p>
        <img className="arrow" src="src/assets/arrow_down.svg" />
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
    <img
      className="plug"
      src={
        navState === "open"
          ? "src/assets/empower.svg"
          : "src/assets/empower_s.svg"
      }
      href="#"
    ></img>
  );
}
