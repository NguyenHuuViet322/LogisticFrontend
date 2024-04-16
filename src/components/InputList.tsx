import { Card, Group, ActionIcon, Text } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { droneList } from "../interface";
import MethodList from "./MethodList";
import { useState } from "react";

function InputList({drone, onSelectedDroneChange} : droneList) {
    const handleSelectedDroneChange = (newSelectedDrone: string) => {
        onSelectedDroneChange(newSelectedDrone)
    }

    return (
        <Card.Section withBorder inheritPadding py="xs">
            <Group position="apart">
                <Text weight={500}>Phương tiện sử dụng</Text>
                <MethodList onSelectedDroneChange={handleSelectedDroneChange} drone={drone}></MethodList>
                <ActionIcon><IconDownload/></ActionIcon>
            </Group>
        </Card.Section>
    )
}

export default InputList