import type { LatLngTuple } from 'leaflet';

export type MapProps = {
  center: LatLngTuple;
  zoom?: number;
  className?: string;
};
