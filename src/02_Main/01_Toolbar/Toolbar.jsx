/* eslint-disable react/prop-types */
import { Breadcrums } from "./Breadcrums";
import { Settings } from "./Settings";

export function Toolbar({ onToggleNavState, onToggleModule }) {
  return (
    <div className="toolbar">
      <Breadcrums onToggleNavState={onToggleNavState} />
      <Settings onToggleModule={onToggleModule} />
    </div>
  );
}
