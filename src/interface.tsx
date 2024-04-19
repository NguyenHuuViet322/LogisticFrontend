export const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "gray",
    "brown",
    "black",
];

export interface Customer {
    Id: string;
    Name: string;
    Location: string;
    Coor: string;
    Distance: string;
}

export interface Result {
    Id: string;
    Journey: string;
}

export interface Drone {
    Id: string;
    Type: string;
    Battery: string;
    Condition: string;
}

export interface Truck {
    Id: string;
    Type: string;
    Stat: string;
    Condition: string;
}

export interface Feature {
    isOptimize: boolean;
    optimizeOnClick: (isStarted: boolean) => void;
}

export interface MapProps {
    result: any;
    customerList: string[];
}

export interface droneList {
    drone: string[];
    selected: string;
    onSelectedDroneChange: (drone: string) => void;
    onNumDroneChange: (drone: string[])=>void;
}

export interface CustomerProps {
    onCustomerChange: (customer: string[]) => void;
}

export interface DroneProps {
    onDroneChange: (drone: string[]) => void;
}
