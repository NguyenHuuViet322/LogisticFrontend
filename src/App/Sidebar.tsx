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
    IconDatabase,
    IconView360,
    IconEye,
} from "@tabler/icons-react";
import { Feature } from "../interface";

function Sidebar({ optimizeOnClick, isOptimize }: Feature) {
    const startOptimize = () => {
        optimizeOnClick(true);
    };

    const stopOptimize = () => {
        optimizeOnClick(false);
    };

    return (
        <Container>
            <Text
                pt="0.5rem"
                pl="0.5rem"
                pb="0.5rem"
                color="dark.3"
                sx={{ fontFamily: "sans-serif" }}
                ta="left"
                fz="sm"
                fw={100}
            >
                General Data
            </Text>

            <Card p="xl" radius="xs" shadow="xs" pb="1em">
                <Card.Section>
                    <Flex align={"center"} gap={"xs"}>
                        <IconDatabase className="icon-pulse" stroke={1.5} />
                        <Text span color="dark.9" ta="left" fw={600} fz="xs">
                            General Data
                        </Text>
                        <ActionIcon
                            className="action-icon"
                            variant="default"
                            size={"xs"}
                        >
                            <IconEye />
                        </ActionIcon>
                    </Flex>
                </Card.Section>
            </Card>

            <Text
                pt="0.5rem"
                pl="0.5rem"
                pb="0.5rem"
                color="dark.3"
                sx={{ fontFamily: "sans-serif" }}
                ta="left"
                fz="sm"
                fw={100}
            >
                Experiments
            </Text>

            <Card p="xl" radius="xs" shadow="xs" pb="1em">
                <Card.Section>
                    <Flex align={"center"} gap={"xs"}>
                        <IconAffiliate className="icon-pulse" stroke={1.5} />
                        <Text span color="dark.9" ta="left" fw={600} fz="xs">
                            Network optimization
                        </Text>
                        <ActionIcon
                            className="action-icon"
                            variant="default"
                            size={"xs"}
                        >
                            <IconSettings />
                        </ActionIcon>
                    </Flex>
                </Card.Section>
                <Card.Section pt={"0.5em"} pb={"0.5em"}>
                    <Flex>
                        <ActionIcon
                            onClick={startOptimize}
                            variant="subtle"
                            size={"xs"}
                            color="blue.3"
                        >
                            <IconPlayerPlay size="1rem" />
                        </ActionIcon>
                        <ActionIcon
                            onClick={stopOptimize}
                            variant="subtle"
                            size={"xs"}
                            color="blue.3"
                        >
                            <IconPlayerStop size="1rem" />
                        </ActionIcon>
                    </Flex>
                </Card.Section>
                <Card.Section pb={"0.5em"}>
                    <Progress value={isOptimize == true ? 100 : 0}></Progress>
                </Card.Section>
            </Card>
        </Container>
    );
}
export default Sidebar;
