import { useState } from "react";
import reactLogo from "./assets/react.svg";
import dataCoor from "./json/dataCoor.json";
import "./App.css";
import {
    ActionIcon,
    Card,
    Container,
    Flex,
    Grid,
    Progress,
} from "@mantine/core";
import { Text } from "@mantine/core";
import {
    IconAdjustments,
    IconAffiliate,
    IconPlayerPlay,
    IconPlayerStop,
    IconSettings,
} from "@tabler/icons-react";
import Sidebar from "./App/Sidebar";
import Map from "./App/Map";
import InputTable from "./App/InputTable";
import { DroneProps } from "./interface";

function App() {
    const [customer, setCustomer] = useState<string[]>([]);
    const [drone, setDrone] = useState<string[]>([]);
    const [journeyPath, setJourney] = useState();
    const [data, setData] = useState([]);
    const [selectedDrone, setSelectedDrone] = useState<string>("/");
    const [isStarted, setStarted] = useState<boolean>(false);
    var initialData = [{
        "Id": "-1",
        "Name": "0",
        "Location": "0",
        "x": drone.length,
        "y": 0, 
        "Distance": "0"
    },{
        "Id": "0",
        "Name": "",
        "Location": "0",
        "x": -71.438477,
        "y": 41.849023, 
        "Distance": "0"
    }]

    let journey = {}

    const handleCustomerChange = (updatedCustomer: string[]) => {
        setCustomer(updatedCustomer);
        setData(initialData)
        updatedCustomer.map((item) => {
            var tmp = {
                "Id": item,
                "Name": dataCoor.filter((t) => t.Id == item)[0].Name,
                "Location": dataCoor.filter((t) => t.Id == item)[0].Location,
                "x": dataCoor.filter((t) => t.Id == item)[0].x,
                "y": dataCoor.filter((t) => t.Id == item)[0].y, 
                "Distance": dataCoor.filter((t) => t.Id == item)[0].Distance
            }
            setData(prevData => [...prevData, tmp])
        })
        
    };
    const handleDroneChange = (updatedDrone: string[]) => {
        setDrone(updatedDrone);

        initialData = [{
            "Id": "-1",
            "Name": "0",
            "Location": "0",
            "x": updatedDrone.length,
            "y": 0, 
            "Distance": "0"
        },{
            "Id": "0",
            "Name": "",
            "Location": "0",
            "x": -71.438477,
            "y": 41.849023, 
            "Distance": "0"
        }]
        handleCustomerChange(customer)

    };
    const handleSelectedChange = (item: string) => {
        setSelectedDrone(item);
    };
    const handleOptimize = async (condition: boolean) => {
        setSelectedDrone("/");
        setStarted(condition);
        console.log(data)
        if (condition) {
            console.log("Preparing")
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch('http://127.0.0.1:8080/InputProccessor', requestOptions)
                .then(response => response.json())
                .then(data =>  data);
                console.log( response)
            
                journey = response;
                setJourney(response);

        }
    };

    return (
        <div>
            <Grid grow gutter="0">
                <Grid.Col className="col" span={2}>
                    <Sidebar
                        optimizeOnClick={handleOptimize}
                        isOptimize={isStarted}
                    ></Sidebar>
                </Grid.Col>
                <Grid.Col className="col" span={10}>
                    <Map
                        result={journeyPath}
                        customerList={customer}
                        isOptimize={isStarted}
                        selected={selectedDrone}
                        optimizeOnClick={function (isStarted: boolean): void {
                            throw new Error("Function not implemented.");
                        }}
                        drone={drone}
                        onSelectedDroneChange={function (drone: string): void {
                            throw new Error("Function not implemented.");
                        }}
                    ></Map>
                </Grid.Col>
                <Grid.Col className="col">
                    <InputTable
                        onNumDroneChange={handleDroneChange}
                        onCustomerChange={handleCustomerChange}
                        onSelectedDroneChange={handleSelectedChange}
                        drone={[]}
                        selected={""}
                    ></InputTable>
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default App;
