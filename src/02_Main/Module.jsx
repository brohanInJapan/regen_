import { Map } from "./Map";
import Button from "../03_Generic/Button";

export function Module({ children }) {
  return <main className="unselectable">{children}</main>;
}

export function ModuleWindow({ moduleState }) {
  return (
    <div className="container">
      {moduleState === "home" && <TestHome />}
      {moduleState === "map" && <Map />}
      {moduleState === "settings"}
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
