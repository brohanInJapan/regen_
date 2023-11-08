import { Map } from "./Map";
import { Settings } from "./Settings";
import Button from "../03_Generic/Button";

export function Module({ children }) {
  return <main className="unselectable">{children}</main>;
}

export function ModuleWindow({ moduleState }) {
  return (
    <div className="container">
      {moduleState === "Home" && <TestHome />}
      {moduleState === "Map" && <Map />}
      {moduleState === "Settings" && <Settings />}
    </div>
  );
}

function TestHome() {
  return (
    <>
      <h2>Home Screen</h2>
    </>
  );
}
