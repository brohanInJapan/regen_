import leaflet from "leaflet";

const markerGeopin = new leaflet.Icon({
  iconUrl: "src/assets/icons_general/geopin_inv.svg",
  iconRetinaUrl: "src/assets/icons_general/geopin_inv.svg",
  iconAnchor: null,
  popupAnchor: [0, -16],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new leaflet.Point(35, 35),
  className: "",
});

export { markerGeopin };
