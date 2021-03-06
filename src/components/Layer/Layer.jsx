import React from 'react';
import { TileLayer } from 'react-leaflet';

import mapTilerProvider from '../../configs/mapTilerProvider';

const Layer = () => {
  const { url, attribution } = mapTilerProvider;

  return <TileLayer url={url} attribution={attribution} />;
};

export default Layer;
