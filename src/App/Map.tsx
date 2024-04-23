import {
    Container,
    Card,
    Flex,
    ActionIcon,
    Progress,
    Text,
} from "@mantine/core";
import {
    IconAffiliate,
    IconSettings,
    IconPlayerPlay,
    IconPlayerStop,
} from "@tabler/icons-react";
import {
    MapContainer,
    Marker,
    Polyline,
    Popup,
    TileLayer,
    Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import base from "../assets/base.png";
import customer from "../assets/customer.png";
import data from "../json/dataCoor.json";
import journey from "../json/result.json";
import { colors } from "../interface";
import L from "leaflet";
import { Customer, droneList, Feature, MapProps } from "../interface";

const customerIcon = L.icon({
    iconUrl: customer,
    iconSize: [21, 21],
    iconAnchor: [10.5, 10.5],
    popupAnchor: [0, -41],
});

const baseIcon = L.icon({
    iconUrl: base,
    iconSize: [31, 31],
    iconAnchor: [15.5, 15.5],
    popupAnchor: [0, -41],
});

const baseCoor = [41.849023, -71.438477];

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Map({
    drone,
    result,
    customerList,
    isOptimize,
    selected,
}: MapProps & Feature & droneList) {
    const marker = customerList.map((id) => (
        <Marker
            position={[
                data.filter((item) => item.Id == id)[0].y,
                data.filter((item) => item.Id == id)[0].x,
            ]}
            icon={customerIcon}
        >
            <Popup>{data.filter((item) => item.Id == id)[0].Name}</Popup>
        </Marker>
    ));

    const line = [];

    if (isOptimize && result != null) {
        console.log(result)
        for (var i = 0; i < result.length; i++) {
            var stt=0;
            var array = result
                .filter((item) => item.Id == i.toString())[0]
                .Journey.split(" ");
            array.pop();
            if (i != 0) {
                const text = L.divIcon({
                    html: `<div style="background-color: ${colors[i]};margin-top:-4px; margin-left:-5px; border-radius: 50%; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;"><span style="color: white;"></span></div>`,
                });
                stt++;
                line[parseInt(drone[i-1])] = array.filter((item) => item > '0' && item <= '9').map((id, index) => (
                    <>
                        <Polyline className="polyline"
                            pathOptions={{ color: colors[i], weight: 2 }}
                            positions={[
                                [41.849023, -71.438477],
                                [
                                    data.filter((item) => item.Id == id)[0].y,
                                    data.filter((item) => item.Id == id)[0].x,
                                ],
                            ]}
                        >
                            <Marker
                                icon={L.divIcon({
                                    html: `<div style="background-color: ${colors[i]};margin-top:-4px; margin-left:-5px; border-radius: 50%; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;"><span style="color: white;">${index+1}</span></div>`,
                                })}
                                position={[
                                    (data.filter((item) => item.Id == id)[0].y + baseCoor[0]) / 2,
                                    (data.filter((item) => item.Id == id)[0].x + baseCoor[1]) / 2,
                                ]}
                            ></Marker>
                        </Polyline>  
                    </>
                ));
            } else {
                var roadhistory = [baseCoor];
                array.map((id) => {
                    console.log(id);
                    if (id != "0") {
                        roadhistory.push([
                            data.filter((item) => item.Id == id)[0].y,
                            data.filter((item) => item.Id == id)[0].x,
                        ]);
                    }
                });
                line[i] = (
                    <Polyline className="polyline"
                        pathOptions={{ color: colors[i], weight: 2 }}
                        positions={roadhistory}
                    />
                );
            }
        }
    }

    return (
        <MapContainer
            center={[41.849023, -71.438477]}
            zoom={12}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.849023, -71.438477]} icon={baseIcon}>
                <Popup>Factory</Popup>
            </Marker>
            {marker}
            {selected == "/" ? line.map((i) => i) : line[parseInt(selected)]}
        </MapContainer>
    );
}
export default Map;
