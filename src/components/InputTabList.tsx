import { Input, Tabs } from "@mantine/core";

function InputTabList() {
    return (
        <Tabs.List grow>
            <Tabs.Tab value="Customer" >
                Customer
            </Tabs.Tab>
            <Tabs.Tab value="Drone">
                Drone
            </Tabs.Tab>
            <Tabs.Tab value="Truck">
                Truck
            </Tabs.Tab>
        </Tabs.List>
    )
}

export default InputTabList