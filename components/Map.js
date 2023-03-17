import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Map = () => {
    const marker = {
        geocode: [35.785563, 51.003039],
        popUp: "I'm here",
    };

    const customIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/6736/6736205.png',
        iconSize: [38, 38],
    });

    return (
        <MapContainer center={[35.785563, 51.003039]} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>
                    <div className='text-center'>
                        <h5 className='text-black dark:text-black'>{"Hello i'm Mehdi"}</h5>
                        <p className='font-poppins font-bold'>{marker.popUp}</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
