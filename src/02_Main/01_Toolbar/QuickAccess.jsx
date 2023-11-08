import { createContext, useContext, useRef, useState, useEffect } from "react";
import FileBrokenIcon from "../../assets/FileBrokenIcon";

const toggleModuleState = createContext({});

export function QuickAccess({ children }) {
  return <div className="settings">{children}</div>;
}

export function Profile({ user }) {
  return (
    <>
      <div className="btn-icon">
        <FileBrokenIcon fill_a="#fff" />
      </div>
      <p>Hello, {user.name} </p>
    </>
  );
}

export function Setting({ onClick }) {
  return <FileBrokenIcon className="can-click" onClick={onClick} size={24} />;
}

export function MapTest({ onClick }) {
  return <FileBrokenIcon className="can-click" onClick={onClick} size={24} />;
}
