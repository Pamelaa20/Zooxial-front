// components/Map.tsx
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Latitud de San Francisco (ejemplo)
  lng: -122.4194, // Longitud de San Francisco (ejemplo)
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Puedes agregar marcadores u otros elementos aquí */}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
