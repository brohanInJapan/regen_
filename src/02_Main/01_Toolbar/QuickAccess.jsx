import { createContext, useContext, useRef, useState, useEffect } from "react";
import FileBrokenIcon from "../../assets/FileBrokenIcon";

const toggleModuleState = createContext({});

export function QuickAccess({ children }) {
  return <div className="settings">{children}</div>;
}

export function Profile() {
  return (
    <div className="btn-icon">
      <FileBrokenIcon fill_a="#fff" />
    </div>
  );
}

export function Setting({ onClick }) {
  return (
    <div className="can-click" onClick={onClick}>
      <FileBrokenIcon />
    </div>
  );
}

export function MapTest({ onClick }) {
  return (
    <div className="can-click" onClick={onClick}>
      <FileBrokenIcon fill_a={"pink"} />
    </div>
  );
}
