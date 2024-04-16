import { Tooltip } from "@mantine/core";
import { IconDrone } from "@tabler/icons-react";
import { useState } from "react";
import { useHover } from "@mantine/hooks";

interface numberIcon {
    number: string;
    onSelectedChange: (selected: string) => void;
}

function IconWithCustomNumber({ number, onSelectedChange }: numberIcon) {
    const { hovered, ref } = useHover();
    const [seletedrone, setSelectedDrone] = useState<string>();

    if (hovered) {
        onSelectedChange(number);
    }

    return (
        <Tooltip label={"Drone " + number}>
            <div className="icon-with-custom-number">
                <IconDrone ref={ref} className="methodIcon" stroke="1" />
                <span className="custom-number">{number}</span>
            </div>
        </Tooltip>
    );
}

export default IconWithCustomNumber;
