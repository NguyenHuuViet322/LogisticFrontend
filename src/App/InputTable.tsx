import {
    Container,
    Card,
    Flex,
    ActionIcon,
    Progress,
    Text,
    Group,
    Menu,
    rem,
    SimpleGrid,
    Grid,
    Tabs,
    Table,
    Checkbox,
    ScrollArea,
} from "@mantine/core";
import { Tab } from "@mantine/core/lib/Tabs/Tab/Tab";
import {
    IconAffiliate,
    IconSettings,
    IconPlayerPlay,
    IconPlayerStop,
    IconDatabase,
    IconView360,
    IconEye,
    IconDots,
    IconFileZip,
    IconTrash,
    IconPhoto,
    IconMessageCircle,
    IconDownload,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import elements from "../json/dataTable.json";
import {
    Customer,
    CustomerProps,
    DroneProps,
    Drone,
    droneList,
} from "../interface";
import CustomerTable from "./InputTable/CustomerTable";
import InputTabList from "./InputTable/InputTabList";
import DroneTable from "./InputTable/DroneTable";
import IconWithCustomNumber from "./InputTable/IconWithCustomNumber";
import MethodList from "./InputTable/MethodList";
import TruckTable from "./InputTable/TruckTable";
import InputList from "./InputTable/InputList";

function InputTable({
    onCustomerChange,
    onSelectedDroneChange,
    onNumDroneChange,
}: CustomerProps & droneList) {
    const [drone, setDrone] = useState<string[]>([]);
    const [seletedrone, setSelectedDrone] = useState<string>();

    const handlerCustomerChange = (updatedCustomer: string[]) => {
        onCustomerChange(updatedCustomer);
    };
    const handlerDroneChange = (updatedDrone: string[]) => {
        setDrone(updatedDrone);
        onNumDroneChange(updatedDrone);
    };
    const handlerSelectedDroneChange = (updatedSelectedDrone: string) => {
        onSelectedDroneChange(updatedSelectedDrone);
    };
    const droneView = drone.map((item) => (
        <IconWithCustomNumber
            onSelectedChange={handlerSelectedDroneChange}
            number={item}
        />
    ));

    return (
        <Card withBorder shadow="sm" radius="md">
            <InputList
                onSelectedDroneChange={handlerSelectedDroneChange}
                drone={drone}
                selected={""}
            ></InputList>

            <Card.Section withBorder inheritPadding py="xs">
                <Tabs
                    variant="outline"
                    orientation="vertical"
                    className="tab"
                    defaultValue="Customer"
                >
                    <Grid className="container">
                        <Grid.Col span={2} className="col">
                            <InputTabList />
                        </Grid.Col>
                        <Grid.Col span={10}>
                            <ScrollArea h={"25vw"} w={"100%"}>
                                <Tabs.Panel value="Customer">
                                    <CustomerTable
                                        onCustomerChange={handlerCustomerChange}
                                    ></CustomerTable>
                                </Tabs.Panel>
                                <Tabs.Panel value="Drone">
                                    <DroneTable
                                        onDroneChange={handlerDroneChange}
                                    ></DroneTable>
                                </Tabs.Panel>
                                <Tabs.Panel value="Truck">
                                    <TruckTable></TruckTable>
                                </Tabs.Panel>
                            </ScrollArea>
                        </Grid.Col>
                    </Grid>
                </Tabs>
            </Card.Section>
        </Card>
    );
}
export default InputTable;
