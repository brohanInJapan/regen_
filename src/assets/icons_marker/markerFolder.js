import leaflet from "leaflet";

const markerFolder = new leaflet.Icon({
  iconUrl: "src/assets/icons_general/folder_node_inv.svg",
  iconRetinaUrl: "src/assets/icons_general/folder_node_inv.svg",
  iconAnchor: null,
  popupAnchor: [100, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new leaflet.Point(35, 35),
  className: "",
});

export { markerFolder };
