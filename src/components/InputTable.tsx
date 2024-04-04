import { Container, Card, Flex, ActionIcon, Progress, Text, Group, Menu, rem, SimpleGrid, Grid, Tabs, Table, Checkbox, ScrollArea } from "@mantine/core";
import { Tab } from "@mantine/core/lib/Tabs/Tab/Tab";
import { IconAffiliate, IconSettings, IconPlayerPlay, IconPlayerStop, IconDatabase, IconView360, IconEye, IconDots, IconFileZip, IconTrash, IconPhoto, IconMessageCircle, IconDownload } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface Customer {
    Id: string;
    Name: string;
    Location: string;
    Coor: string;
    Distance: string;
}

interface Props {
    onCustomerChange: (customer: string[]) => void;
}

function InputTable({ onCustomerChange }: Props) {
    const [customer, setCustormer] = useState<string[]>([]);
    const [isCheckAll, setCheckAll] = useState(false);

    const elements =  [{"Id":"1","Name":"Mark Smith","Location":"Lorem ispsum","Coor":"-73.98:40.79:0.86","Distance":"0.863018"},{"Id":"2","Name":"Thomas Jones","Location":"Lorem ispsum","Coor":"-74:40.73:0.2","Distance":"0.216333"},{"Id":"3","Name":"Kenneth Thompson","Location":"Lorem ispsum","Coor":"-73.98:40.79:0.2","Distance":"0.212603"},{"Id":"4","Name":"Robert Jones","Location":"Lorem ispsum","Coor":"-73.96:40.76:0.2","Distance":"0.204206"},{"Id":"5","Name":"David Miller","Location":"Lorem ispsum","Coor":"-73.96:40.79:0.48","Distance":"0.483322"},{"Id":"6","Name":"John Garcia","Location":"Lorem ispsum","Coor":"-73.96:40.76:1.69","Distance":"1.6905"},{"Id":"7","Name":"John Anderson","Location":"Lorem ispsum","Coor":"-73.97:40.74:0.33","Distance":"0.333916"},{"Id":"8","Name":"Paul Williams","Location":"Lorem ispsum","Coor":"-73.95:40.81:0.2","Distance":"0.21095"},{"Id":"9","Name":"Joseph Martin","Location":"Lorem ispsum","Coor":"-73.95:40.81:0.2","Distance":"0.21095"},{"Id":"10","Name":"Matthew Jones","Location":"Lorem ispsum","Coor":"-73.94:40.81:0.2","Distance":"0.209762"},{"Id":"11","Name":"Robert Thomas","Location":"Lorem ispsum","Coor":"-73.97:40.78:0.2","Distance":"0.208327"},{"Id":"12","Name":"Anthony Williams","Location":"Lorem ispsum","Coor":"-73.99:40.74:0.2","Distance":"0.212132"},{"Id":"13","Name":"John Martin","Location":"Lorem ispsum","Coor":"-73.99:40.74:2.21","Distance":"2.21113"},{"Id":"14","Name":"Kenneth Moore","Location":"Lorem ispsum","Coor":"-73.98:40.76:2.83","Distance":"2.83065"},{"Id":"15","Name":"Joseph Davis","Location":"Lorem ispsum","Coor":"-73.96:40.78:0.2","Distance":"0.206155"},{"Id":"16","Name":"Matthew Thompson","Location":"Lorem ispsum","Coor":"-73.94:40.81:3.53","Distance":"3.53057"},{"Id":"17","Name":"Thomas Taylor","Location":"Lorem ispsum","Coor":"-73.98:40.74:0.2","Distance":"0.209045"},{"Id":"18","Name":"Joseph White","Location":"Lorem ispsum","Coor":"-73.96:40.77:0.2","Distance":"0.204939"},{"Id":"19","Name":"Paul Hernandez","Location":"Lorem ispsum","Coor":"-73.98:40.75:0.2","Distance":"0.208806"},{"Id":"20","Name":"Michael Anderson","Location":"Lorem ispsum","Coor":"-73.98:40.75:0.23","Distance":"0.237697"},{"Id":"21","Name":"Robert Thomas","Location":"Lorem ispsum","Coor":"-73.99:40.78:2.7","Distance":"2.70107"},{"Id":"22","Name":"Donald Jones","Location":"Lorem ispsum","Coor":"-73.97:40.8:0.2","Distance":"0.212132"},{"Id":"23","Name":"John Anderson","Location":"Lorem ispsum","Coor":"-73.97:40.77:0.21","Distance":"0.216795"},{"Id":"24","Name":"Donald Rodriguez","Location":"Lorem ispsum","Coor":"-73.97:40.77:0.2","Distance":"0.207123"},{"Id":"25","Name":"Joseph Jones","Location":"Lorem ispsum","Coor":"-73.98:40.75:0.2","Distance":"0.208806"},{"Id":"26","Name":"Robert Jackson","Location":"Lorem ispsum","Coor":"-73.96:40.8:0.59","Distance":"0.593464"},{"Id":"27","Name":"Andrew White","Location":"Lorem ispsum","Coor":"-73.94:40.78:0.22","Distance":"0.222935"},{"Id":"28","Name":"Michael Johnson","Location":"Lorem ispsum","Coor":"-73.95:40.82:0.2","Distance":"0.214009"},{"Id":"29","Name":"Thomas Thompson","Location":"Lorem ispsum","Coor":"-73.93:40.8:0.2","Distance":"0.206398"},{"Id":"30","Name":"Steven Moore","Location":"Lorem ispsum","Coor":"-73.99:40.74:0.65","Distance":"0.653835"},{"Id":"31","Name":"Daniel Williams","Location":"Lorem ispsum","Coor":"-73.98:40.77:0.22","Distance":"0.22891"},{"Id":"32","Name":"Charles Davis","Location":"Lorem ispsum","Coor":"-73.96:40.8:0.2","Distance":"0.21"},{"Id":"33","Name":"James Williams","Location":"Lorem ispsum","Coor":"-73.94:40.78:2.22","Distance":"2.22029"},{"Id":"34","Name":"William Rodriguez","Location":"Lorem ispsum","Coor":"-73.94:40.79:9.17","Distance":"9.17011"},{"Id":"35","Name":"Richard Miller","Location":"Lorem ispsum","Coor":"-73.96:40.77:0.85","Distance":"0.851176"},{"Id":"36","Name":"Daniel Wilson","Location":"Lorem ispsum","Coor":"-73.94:40.82:0.27","Distance":"0.279643"},{"Id":"37","Name":"Daniel Martinez","Location":"Lorem ispsum","Coor":"-73.97:40.77:0.76","Distance":"0.761906"},{"Id":"38","Name":"Richard Johnson","Location":"Lorem ispsum","Coor":"-73.95:40.81:0.21","Distance":"0.220454"},{"Id":"39","Name":"Donald Rodriguez","Location":"Lorem ispsum","Coor":"-73.99:40.76:7.62","Distance":"7.62033"},{"Id":"40","Name":"Thomas Brown","Location":"Lorem ispsum","Coor":"-73.98:40.76:0.98","Distance":"0.981886"},{"Id":"41","Name":"William Hernandez","Location":"Lorem ispsum","Coor":"-73.97:40.75:2.51","Distance":"2.5105"},{"Id":"42","Name":"Steven Smith","Location":"Lorem ispsum","Coor":"-73.94:40.79:12.43","Distance":"12.4301"},{"Id":"43","Name":"Richard Martin","Location":"Lorem ispsum","Coor":"-73.93:40.8:0.21","Distance":"0.216102"},{"Id":"44","Name":"Matthew Rodriguez","Location":"Lorem ispsum","Coor":"-73.99:40.73:0.2","Distance":"0.212838"},{"Id":"45","Name":"William White","Location":"Lorem ispsum","Coor":"-73.98:40.76:0.67","Distance":"0.672756"},{"Id":"46","Name":"Richard Brown","Location":"Lorem ispsum","Coor":"-73.96:40.78:0.2","Distance":"0.206155"},{"Id":"47","Name":"Andrew Thompson","Location":"Lorem ispsum","Coor":"-73.96:40.78:0.21","Distance":"0.21587"},{"Id":"48","Name":"Kenneth Williams","Location":"Lorem ispsum","Coor":"-73.98:40.74:0.2","Distance":"0.209045"},{"Id":"49","Name":"Thomas Johnson","Location":"Lorem ispsum","Coor":"-73.98:40.74:0.2","Distance":"0.209045"},{"Id":"50","Name":"Donald Moore","Location":"Lorem ispsum","Coor":"-73.98:40.76:0.2","Distance":"0.209045"},{"Id":"51","Name":"Joshua Thompson","Location":"Lorem ispsum","Coor":"-73.98:40.75:0.37","Distance":"0.374833"},{"Id":"52","Name":"William Martinez","Location":"Lorem ispsum","Coor":"-73.97:40.76:12.88","Distance":"12.8801"},{"Id":"53","Name":"Andrew Davis","Location":"Lorem ispsum","Coor":"-73.97:40.77:0.2","Distance":"0.207123"},{"Id":"54","Name":"Donald Davis","Location":"Lorem ispsum","Coor":"-73.96:40.77:0.64","Distance":"0.641561"},{"Id":"55","Name":"John Miller","Location":"Lorem ispsum","Coor":"-73.95:40.79:0.2","Distance":"0.206155"},{"Id":"56","Name":"William Taylor","Location":"Lorem ispsum","Coor":"-73.95:40.81:2.43","Distance":"2.43093"},{"Id":"57","Name":"Daniel Wilson","Location":"Lorem ispsum","Coor":"-73.98:40.75:18.4","Distance":"18.4001"},{"Id":"58","Name":"Andrew Thomas","Location":"Lorem ispsum","Coor":"-73.95:40.79:0.21","Distance":"0.21587"},{"Id":"59","Name":"Andrew Taylor","Location":"Lorem ispsum","Coor":"-73.99:40.77:0.2","Distance":"0.212838"},{"Id":"60","Name":"Richard Martinez","Location":"Lorem ispsum","Coor":"-73.95:40.79:1.3","Distance":"1.30096"},{"Id":"61","Name":"John Martin","Location":"Lorem ispsum","Coor":"-73.95:40.77:0.22","Distance":"0.222935"},{"Id":"62","Name":"Paul Garcia","Location":"Lorem ispsum","Coor":"-74:40.76:1.29","Distance":"1.29252"},{"Id":"63","Name":"Paul Hernandez","Location":"Lorem ispsum","Coor":"-73.99:40.74:0.2","Distance":"0.212132"},{"Id":"64","Name":"Matthew Taylor","Location":"Lorem ispsum","Coor":"-73.96:40.78:0.2","Distance":"0.206155"},{"Id":"65","Name":"Daniel Martinez","Location":"Lorem ispsum","Coor":"-73.93:40.75:0.2","Distance":"0.20025"},{"Id":"66","Name":"John Jones","Location":"Lorem ispsum","Coor":"-73.94:40.75:0.2","Distance":"0.200998"},{"Id":"67","Name":"Richard Martinez","Location":"Lorem ispsum","Coor":"-73.94:40.74:0.49","Distance":"0.49051"},{"Id":"68","Name":"Joseph Anderson","Location":"Lorem ispsum","Coor":"-73.95:40.75:0.2","Distance":"0.202237"},{"Id":"69","Name":"Joseph Jackson","Location":"Lorem ispsum","Coor":"-73.94:40.75:11.01","Distance":"11.01"},{"Id":"70","Name":"Andrew Garcia","Location":"Lorem ispsum","Coor":"-73.95:40.75:3.11","Distance":"3.11014"},{"Id":"71","Name":"Donald Brown","Location":"Lorem ispsum","Coor":"-73.94:40.76:0.2","Distance":"0.201246"},{"Id":"72","Name":"David Wilson","Location":"Lorem ispsum","Coor":"-73.93:40.75:13.29","Distance":"13.29"},{"Id":"73","Name":"Thomas Thompson","Location":"Lorem ispsum","Coor":"-73.94:40.75:0.2","Distance":"0.200998"},{"Id":"74","Name":"John Rodriguez","Location":"Lorem ispsum","Coor":"-73.99:40.77:0.21","Distance":"0.222261"},{"Id":"75","Name":"Robert Davis","Location":"Lorem ispsum","Coor":"-73.97:40.75:0.47","Distance":"0.472652"},{"Id":"76","Name":"Richard Martinez","Location":"Lorem ispsum","Coor":"-73.93:40.82:0.24","Distance":"0.2502"},{"Id":"77","Name":"Donald Rodriguez","Location":"Lorem ispsum","Coor":"-73.94:40.81:1.73","Distance":"1.73116"},{"Id":"78","Name":"James Anderson","Location":"Lorem ispsum","Coor":"-73.99:40.77:1.12","Distance":"1.12236"},{"Id":"79","Name":"Robert Moore","Location":"Lorem ispsum","Coor":"-73.97:40.8:0.21","Distance":"0.221585"},{"Id":"80","Name":"Daniel White","Location":"Lorem ispsum","Coor":"-73.96:40.78:0.28","Distance":"0.284429"},{"Id":"81","Name":"William Jackson","Location":"Lorem ispsum","Coor":"-73.98:40.77:0.2","Distance":"0.209762"},{"Id":"82","Name":"Charles Brown","Location":"Lorem ispsum","Coor":"-73.98:40.79:0.3","Distance":"0.308545"},{"Id":"83","Name":"Paul Johnson","Location":"Lorem ispsum","Coor":"-73.98:40.77:0.2","Distance":"0.209762"},{"Id":"84","Name":"Robert Martinez","Location":"Lorem ispsum","Coor":"-73.96:40.81:0.2","Distance":"0.212603"},{"Id":"85","Name":"Matthew Martin","Location":"Lorem ispsum","Coor":"-73.98:40.74:0.3","Distance":"0.306105"},{"Id":"86","Name":"Mark Smith","Location":"Lorem ispsum","Coor":"-73.98:40.78:0.2","Distance":"0.21095"},{"Id":"87","Name":"Steven Johnson","Location":"Lorem ispsum","Coor":"-73.94:40.82:0.38","Distance":"0.386911"},{"Id":"88","Name":"Charles White","Location":"Lorem ispsum","Coor":"-73.94:40.81:9.1","Distance":"9.10022"},{"Id":"89","Name":"Charles Jones","Location":"Lorem ispsum","Coor":"-74:40.76:0.2","Distance":"0.215639"},{"Id":"90","Name":"John Hernandez","Location":"Lorem ispsum","Coor":"-73.98:40.75:4.28","Distance":"4.28042"},{"Id":"91","Name":"Donald White","Location":"Lorem ispsum","Coor":"-73.94:40.75:0.22","Distance":"0.220907"},{"Id":"92","Name":"Kenneth Thompson","Location":"Lorem ispsum","Coor":"-73.98:40.77:3.92","Distance":"3.92051"},{"Id":"93","Name":"James Rodriguez","Location":"Lorem ispsum","Coor":"-73.93:40.81:0.2","Distance":"0.209045"},{"Id":"94","Name":"Joseph Garcia","Location":"Lorem ispsum","Coor":"-73.93:40.75:1.01","Distance":"1.01005"},{"Id":"95","Name":"Charles Thomas","Location":"Lorem ispsum","Coor":"-73.97:40.75:0.2","Distance":"0.206155"},{"Id":"96","Name":"Charles Brown","Location":"Lorem ispsum","Coor":"-73.97:40.76:0.21","Distance":"0.216102"},{"Id":"97","Name":"Joseph Johnson","Location":"Lorem ispsum","Coor":"-73.97:40.74:0.67","Distance":"0.671937"},{"Id":"98","Name":"Daniel Jackson","Location":"Lorem ispsum","Coor":"-73.97:40.81:0.2","Distance":"0.214709"},{"Id":"99","Name":"Donald Hernandez","Location":"Lorem ispsum","Coor":"-73.95:40.74:9.87","Distance":"9.87005"},{"Id":"100","Name":"Thomas Martin","Location":"Lorem ispsum","Coor":"-73.95:40.75:1.51","Distance":"1.5103"}];

    const handleCheck = (id: string) => {
        setCustormer(prev => {
            const updatedCustomer = prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id];

            onCustomerChange(updatedCustomer);
            return updatedCustomer;
        })
    }

    const handleCheckAll = () => {
        console.log(isCheckAll)
        setCheckAll(prevIsCheckAll => {
            const newState = !prevIsCheckAll;
            if (!newState) {
                setCustormer([]);
                onCustomerChange([]);
            } else {
                const allCustomerIds = elements.map(tmp => tmp.Id);
                setCustormer(allCustomerIds);
                onCustomerChange(allCustomerIds);
            }
            
            return newState;
        });
    }

    const rows = elements.map((tmp) => (
        <tr key={tmp.Id}>
            <td><Checkbox onChange={() => handleCheck(tmp.Id)} checked={customer.includes(tmp.Id)}></Checkbox></td>
            <td>{tmp.Id}</td>
            <td>{tmp.Name}</td>
            <td>{tmp.Location}</td>
            <td>{tmp.Coor}</td>
            <td>{tmp.Distance}</td>
        </tr>
    ));


    return (
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
                <Group position="apart">
                    <Text weight={500}>Input table</Text>
                    <ActionIcon><IconDownload></IconDownload></ActionIcon>
                </Group>
                
            </Card.Section>

            <Card.Section withBorder inheritPadding py="xs">
                <Tabs variant="outline" orientation="vertical" className="tab" defaultValue="Customer">
                    <Grid className = "container" >
                        <Grid.Col span={2} className="col">
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
                        </Grid.Col>
                        <Grid.Col span={10}>    
                            <ScrollArea h={"25vw"} w={"100%"}>
                                <Tabs.Panel value="Customer">
                                    <Table striped highlightOnHover  captionSide="bottom"  withBorder withColumnBorders>
                                        <thead>
                                            <tr>
                                                <th><Checkbox onChange={handleCheckAll} checked={isCheckAll}/></th>
                                                <th>ID Khách hàng</th>
                                                <th>Khách hàng</th>
                                                <th>Địa chỉ</th>
                                                <th>Tọa độ</th>
                                                <th>Khoảng cách</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                rows
                                            }
                                        </tbody>
                                    </Table>
                                </Tabs.Panel>
                            
                            </ScrollArea>
                        </Grid.Col>
                    </Grid>
                </Tabs>
            </Card.Section>
        </Card>
    )
}
export default InputTable