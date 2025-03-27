import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const TrackOrder = () => {
    const [orderLocation, setOrderLocation] = useState({ lat: 0, lng: 0 }); // Replace with dynamic order coordinates

    useEffect(() => {
        // Replace with logic to get the order's real-time location
        setOrderLocation({ lat: 40.748817, lng: -73.985428 }); // Example coordinates (NYC)
    }, []);

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={orderLocation}
                zoom={15}
            >
                <Marker position={orderLocation} />
            </GoogleMap>
        </LoadScript>
    );
}

export default TrackOrder;
