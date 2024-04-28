"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapProps } from "@/lib/types";
import { useState } from "react";

const Map = ({ data }: { data: MapProps }) => {
  const [center, setCenter] = useState<[number, number]>([
    data.location.lat,
    data.location.lng,
  ]);

  return (
    <MapContainer
      className="h-[100vh] w-full"
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker {...data} />
    </MapContainer>
  );
};

export default Map;

function LocationMarker(data: MapProps) {
  var locationIcon = L.icon({
    iconUrl: "/icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [23, 56],
  });

  const map = useMap();
  map.flyTo([data.location.lat, data.location.lng], 13);

  return (
    <Marker
      icon={locationIcon}
      position={[data.location.lat, data.location.lng]}
    >
      <Popup>{data.isp}</Popup>
    </Marker>
  );
}
