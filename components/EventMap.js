import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";

export default function EventMap({ evt }) {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [loading, setLoading] = useState(true);
    const [viewport, setViewport] = useState({
        latitude: 40.712772,
        longitude: -73.935242,
        width: "100%",
        height: "500px",
        zoom: 12,
    });

    useEffect(() => {
        Geocode.fromAddress(evt.address).then(
            (response) => {
                const { lat, lng } = response.results[0].geomerty.location;
                setLat(lat);
                setLng(lng);
                setViewport({ ...viewport, latitude: lat, longitude: lng });
                setLoading(false);
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);

    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

    if (loading) return false;

    console.log(lat, lng);

    return <div>MAP</div>;
}
