import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { markerGeopin } from "../assets/icons_marker/markerGeopin";
import { markerFolder } from "../assets/icons_marker/markerFolder";

export function Map() {
  const [position] = useState({
    iglobe: [-25.861838028191734, 28.215873956951587],
    file: [-25.861838028191734, 28.21187395951587],
  });

  return (
    <div className="container">
      <MapContainer
        id="map"
        center={position.iglobe}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position.iglobe} icon={markerGeopin}>
          <Popup>Welkom by iGlobe, jou pragtige bliksem, jy</Popup>
        </Marker>
        <Marker position={position.file} icon={markerFolder}>
          <Popup>Welkom by iGlobe, jou pragtige bliksem, jy</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
