'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { MapProps } from '../model/types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import styles from './Map.module.scss';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

export function MapClient({ center, zoom = 13 }: MapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      {...(styles.map ? { className: styles.map } : {})}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={center}>
        <Popup>Мы здесь</Popup>
      </Marker>
    </MapContainer>
  );
}
