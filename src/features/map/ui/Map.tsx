import dynamic from 'next/dynamic';
import type { MapProps } from '../model/types';

export const Map = dynamic<MapProps>(() => import('./Map.client').then((m) => m.MapClient), {
  ssr: false,
  loading: () => <div style={{ height: 400 }} />,
});
