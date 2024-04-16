import { Flex, Tooltip } from "@mantine/core";
import { droneList } from "../../interface";
import IconWithCustomNumber from "./IconWithCustomNumber";
import { IconBorderAll, IconTruck } from "@tabler/icons-react";
import {} from "react-leaflet";
import { useHover } from "@mantine/hooks";

function MethodList({ drone, onSelectedDroneChange }: droneList) {
    const { hovered, ref } = useHover();
    const handleSelectedChange = (selected: string) => {
        onSelectedDroneChange(selected);
    };

    const icon = drone.map((item) => (
        <IconWithCustomNumber
            onSelectedChange={handleSelectedChange}
            number={item}
        />
    ));

    if (hovered) {
        onSelectedDroneChange("0");
    }

    return (
        <Flex justify={"flex-start"} align={"flex-start"} gap="md">
            <Tooltip label="Truck mặc định">
                <IconTruck className="methodIcon" ref={ref} stroke={1} />
            </Tooltip>
            {icon}
        </Flex>
    );
}

export default MethodList;
