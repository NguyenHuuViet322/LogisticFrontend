import { Container, Card, Flex, ActionIcon, Progress, Text } from "@mantine/core";
import { IconAffiliate, IconSettings, IconPlayerPlay, IconPlayerStop } from "@tabler/icons-react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import base from "../assets/base.png"
import customer from "../assets/customer.png"
import L from "leaflet";

interface Customer {
  Id: string;
  Name: string;
  Location: string;
  Coor: string;
  Distance: string;
}

interface MapProps {
  customerList: string[];
}

const customerIcon = L.icon({
  iconUrl: customer,
  iconSize: [41, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const baseIcon = L.icon({
  iconUrl: base,
  iconSize: [41, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

function Map({ customerList }: MapProps) {
    const data = [{"Id":"1","Name":"Mark Smith","Location":"Lorem ispsum","x":-73.98,"y":40.79,"Distance":"0.863018"},{"Id":"2","Name":"Thomas Jones","Location":"Lorem ispsum","x":-74,"y":40.73,"Distance":"0.216333"},{"Id":"3","Name":"Kenneth Thompson","Location":"Lorem ispsum","x":-73.98,"y":40.79,"Distance":"0.212603"},{"Id":"4","Name":"Robert Jones","Location":"Lorem ispsum","x":-73.96,"y":40.76,"Distance":"0.204206"},{"Id":"5","Name":"David Miller","Location":"Lorem ispsum","x":-73.96,"y":40.79,"Distance":"0.483322"},{"Id":"6","Name":"John Garcia","Location":"Lorem ispsum","x":-73.96,"y":40.76,"Distance":"1.6905"},{"Id":"7","Name":"John Anderson","Location":"Lorem ispsum","x":-73.97,"y":40.74,"Distance":"0.333916"},{"Id":"8","Name":"Paul Williams","Location":"Lorem ispsum","x":-73.95,"y":40.81,"Distance":"0.21095"},{"Id":"9","Name":"Joseph Martin","Location":"Lorem ispsum","x":-73.95,"y":40.81,"Distance":"0.21095"},{"Id":"10","Name":"Matthew Jones","Location":"Lorem ispsum","x":-73.94,"y":40.81,"Distance":"0.209762"},{"Id":"11","Name":"Robert Thomas","Location":"Lorem ispsum","x":-73.97,"y":40.78,"Distance":"0.208327"},{"Id":"12","Name":"Anthony Williams","Location":"Lorem ispsum","x":-73.99,"y":40.74,"Distance":"0.212132"},{"Id":"13","Name":"John Martin","Location":"Lorem ispsum","x":-73.99,"y":40.74,"Distance":"2.21113"},{"Id":"14","Name":"Kenneth Moore","Location":"Lorem ispsum","x":-73.98,"y":40.76,"Distance":"2.83065"},{"Id":"15","Name":"Joseph Davis","Location":"Lorem ispsum","x":-73.96,"y":40.78,"Distance":"0.206155"},{"Id":"16","Name":"Matthew Thompson","Location":"Lorem ispsum","x":-73.94,"y":40.81,"Distance":"3.53057"},{"Id":"17","Name":"Thomas Taylor","Location":"Lorem ispsum","x":-73.98,"y":40.74,"Distance":"0.209045"},{"Id":"18","Name":"Joseph White","Location":"Lorem ispsum","x":-73.96,"y":40.77,"Distance":"0.204939"},{"Id":"19","Name":"Paul Hernandez","Location":"Lorem ispsum","x":-73.98,"y":40.75,"Distance":"0.208806"},{"Id":"20","Name":"Michael Anderson","Location":"Lorem ispsum","x":-73.98,"y":40.75,"Distance":"0.237697"},{"Id":"21","Name":"Robert Thomas","Location":"Lorem ispsum","x":-73.99,"y":40.78,"Distance":"2.70107"},{"Id":"22","Name":"Donald Jones","Location":"Lorem ispsum","x":-73.97,"y":40.8,"Distance":"0.212132"},{"Id":"23","Name":"John Anderson","Location":"Lorem ispsum","x":-73.97,"y":40.77,"Distance":"0.216795"},{"Id":"24","Name":"Donald Rodriguez","Location":"Lorem ispsum","x":-73.97,"y":40.77,"Distance":"0.207123"},{"Id":"25","Name":"Joseph Jones","Location":"Lorem ispsum","x":-73.98,"y":40.75,"Distance":"0.208806"},{"Id":"26","Name":"Robert Jackson","Location":"Lorem ispsum","x":-73.96,"y":40.8,"Distance":"0.593464"},{"Id":"27","Name":"Andrew White","Location":"Lorem ispsum","x":-73.94,"y":40.78,"Distance":"0.222935"},{"Id":"28","Name":"Michael Johnson","Location":"Lorem ispsum","x":-73.95,"y":40.82,"Distance":"0.214009"},{"Id":"29","Name":"Thomas Thompson","Location":"Lorem ispsum","x":-73.93,"y":40.8,"Distance":"0.206398"},{"Id":"30","Name":"Steven Moore","Location":"Lorem ispsum","x":-73.99,"y":40.74,"Distance":"0.653835"},{"Id":"31","Name":"Daniel Williams","Location":"Lorem ispsum","x":-73.98,"y":40.77,"Distance":"0.22891"},{"Id":"32","Name":"Charles Davis","Location":"Lorem ispsum","x":-73.96,"y":40.8,"Distance":"0.21"},{"Id":"33","Name":"James Williams","Location":"Lorem ispsum","x":-73.94,"y":40.78,"Distance":"2.22029"},{"Id":"34","Name":"William Rodriguez","Location":"Lorem ispsum","x":-73.94,"y":40.79,"Distance":"9.17011"},{"Id":"35","Name":"Richard Miller","Location":"Lorem ispsum","x":-73.96,"y":40.77,"Distance":"0.851176"},{"Id":"36","Name":"Daniel Wilson","Location":"Lorem ispsum","x":-73.94,"y":40.82,"Distance":"0.279643"},{"Id":"37","Name":"Daniel Martinez","Location":"Lorem ispsum","x":-73.97,"y":40.77,"Distance":"0.761906"},{"Id":"38","Name":"Richard Johnson","Location":"Lorem ispsum","x":-73.95,"y":40.81,"Distance":"0.220454"},{"Id":"39","Name":"Donald Rodriguez","Location":"Lorem ispsum","x":-73.99,"y":40.76,"Distance":"7.62033"},{"Id":"40","Name":"Thomas Brown","Location":"Lorem ispsum","x":-73.98,"y":40.76,"Distance":"0.981886"},{"Id":"41","Name":"William Hernandez","Location":"Lorem ispsum","x":-73.97,"y":40.75,"Distance":"2.5105"},{"Id":"42","Name":"Steven Smith","Location":"Lorem ispsum","x":-73.94,"y":40.79,"Distance":"12.4301"},{"Id":"43","Name":"Richard Martin","Location":"Lorem ispsum","x":-73.93,"y":40.8,"Distance":"0.216102"},{"Id":"44","Name":"Matthew Rodriguez","Location":"Lorem ispsum","x":-73.99,"y":40.73,"Distance":"0.212838"},{"Id":"45","Name":"William White","Location":"Lorem ispsum","x":-73.98,"y":40.76,"Distance":"0.672756"},{"Id":"46","Name":"Richard Brown","Location":"Lorem ispsum","x":-73.96,"y":40.78,"Distance":"0.206155"},{"Id":"47","Name":"Andrew Thompson","Location":"Lorem ispsum","x":-73.96,"y":40.78,"Distance":"0.21587"},{"Id":"48","Name":"Kenneth Williams","Location":"Lorem ispsum","x":-73.98,"y":40.74,"Distance":"0.209045"},{"Id":"49","Name":"Thomas Johnson","Location":"Lorem ispsum","x":-73.98,"y":40.74,"Distance":"0.209045"},{"Id":"50","Name":"Donald Moore","Location":"Lorem ispsum","x":-73.98,"y":40.76,"Distance":"0.209045"},{"Id":"51","Name":"Joshua Thompson","Location":"Lorem ispsum","x":-73.98,"y":40.75,"Distance":"0.374833"},{"Id":"52","Name":"William Martinez","Location":"Lorem ispsum","x":-73.97,"y":40.76,"Distance":"12.8801"},{"Id":"53","Name":"Andrew Davis","Location":"Lorem ispsum","x":-73.97,"y":40.77,"Distance":"0.207123"},{"Id":"54","Name":"Donald Davis","Location":"Lorem ispsum","x":-73.96,"y":40.77,"Distance":"0.641561"},{"Id":"55","Name":"John Miller","Location":"Lorem ispsum","x":-73.95,"y":40.79,"Distance":"0.206155"},{"Id":"56","Name":"William Taylor","Location":"Lorem ispsum","x":-73.95,"y":40.81,"Distance":"2.43093"},{"Id":"57","Name":"Daniel Wilson","Location":"Lorem ispsum","x":-73.98,"y":40.75,"Distance":"18.4001"},{"Id":"58","Name":"Andrew Thomas","Location":"Lorem ispsum","x":-73.95,"y":40.79,"Distance":"0.21587"},{"Id":"59","Name":"Andrew Taylor","Location":"Lorem ispsum","x":-73.99,"y":40.77,"Distance":"0.212838"},{"Id":"60","Name":"Richard Martinez","Location":"Lorem ispsum","x":-73.95,"y":40.79,"Distance":"1.30096"},{"Id":"61","Name":"John Martin","Location":"Lorem ispsum","x":-73.95,"y":40.77,"Distance":"0.222935"},{"Id":"62","Name":"Paul Garcia","Location":"Lorem ispsum","x":-74,"y":40.76,"Distance":"1.29252"},{"Id":"63","Name":"Paul Hernandez","Location":"Lorem ispsum","x":-73.99,"y":40.74,"Distance":"0.212132"},{"Id":"64","Name":"Matthew Taylor","Location":"Lorem ispsum","x":-73.96,"y":40.78,"Distance":"0.206155"},{"Id":"65","Name":"Daniel Martinez","Location":"Lorem ispsum","x":-73.93,"y":40.75,"Distance":"0.20025"},{"Id":"66","Name":"John Jones","Location":"Lorem ispsum","x":-73.94,"y":40.75,"Distance":"0.200998"},{"Id":"67","Name":"Richard Martinez","Location":"Lorem ispsum","x":-73.94,"y":40.74,"Distance":"0.49051"},{"Id":"68","Name":"Joseph Anderson","Location":"Lorem ispsum","x":-73.95,"y":40.75,"Distance":"0.202237"},{"Id":"69","Name":"Joseph Jackson","Location":"Lorem ispsum","x":-73.94,"y":40.75,"Distance":"11.01"},{"Id":"70","Name":"Andrew Garcia","Location":"Lorem ispsum","x":-73.95,"y":40.75,"Distance":"3.11014"},{"Id":"71","Name":"Donald Brown","Location":"Lorem ispsum","x":-73.94,"y":40.76,"Distance":"0.201246"},{"Id":"72","Name":"David Wilson","Location":"Lorem ispsum","x":-73.93,"y":40.75,"Distance":"13.29"},{"Id":"73","Name":"Thomas Thompson","Location":"Lorem ispsum","x":-73.94,"y":40.75,"Distance":"0.200998"},{"Id":"74","Name":"John Rodriguez","Location":"Lorem ispsum","x":-73.99,"y":40.77,"Distance":"0.222261"},{"Id":"75","Name":"Robert Davis","Location":"Lorem ispsum","x":-73.97,"y":40.75,"Distance":"0.472652"},{"Id":"76","Name":"Richard Martinez","Location":"Lorem ispsum","x":-73.93,"y":40.82,"Distance":"0.2502"},{"Id":"77","Name":"Donald Rodriguez","Location":"Lorem ispsum","x":-73.94,"y":40.81,"Distance":"1.73116"},{"Id":"78","Name":"James Anderson","Location":"Lorem ispsum","x":-73.99,"y":40.77,"Distance":"1.12236"},{"Id":"79","Name":"Robert Moore","Location":"Lorem ispsum","x":-73.97,"y":40.8,"Distance":"0.221585"},{"Id":"80","Name":"Daniel White","Location":"Lorem ispsum","x":-73.96,"y":40.78,"Distance":"0.284429"},{"Id":"81","Name":"William Jackson","Location":"Lorem ispsum","x":-73.98,"y":40.77,"Distance":"0.209762"},{"Id":"82","Name":"Charles Brown","Location":"Lorem ispsum","x":-73.98,"y":40.79,"Distance":"0.308545"},{"Id":"83","Name":"Paul Johnson","Location":"Lorem ispsum","x":-73.98,"y":40.77,"Distance":"0.209762"},{"Id":"84","Name":"Robert Martinez","Location":"Lorem ispsum","x":-73.96,"y":40.81,"Distance":"0.212603"},{"Id":"85","Name":"Matthew Martin","Location":"Lorem ispsum","x":-73.98,"y":40.74,"Distance":"0.306105"},{"Id":"86","Name":"Mark Smith","Location":"Lorem ispsum","x":-73.98,"y":40.78,"Distance":"0.21095"},{"Id":"87","Name":"Steven Johnson","Location":"Lorem ispsum","x":-73.94,"y":40.82,"Distance":"0.386911"},{"Id":"88","Name":"Charles White","Location":"Lorem ispsum","x":-73.94,"y":40.81,"Distance":"9.10022"},{"Id":"89","Name":"Charles Jones","Location":"Lorem ispsum","x":-74,"y":40.76,"Distance":"0.215639"},{"Id":"90","Name":"John Hernandez","Location":"Lorem ispsum","x":-73.98,"y":40.75,"Distance":"4.28042"},{"Id":"91","Name":"Donald White","Location":"Lorem ispsum","x":-73.94,"y":40.75,"Distance":"0.220907"},{"Id":"92","Name":"Kenneth Thompson","Location":"Lorem ispsum","x":-73.98,"y":40.77,"Distance":"3.92051"},{"Id":"93","Name":"James Rodriguez","Location":"Lorem ispsum","x":-73.93,"y":40.81,"Distance":"0.209045"},{"Id":"94","Name":"Joseph Garcia","Location":"Lorem ispsum","x":-73.93,"y":40.75,"Distance":"1.01005"},{"Id":"95","Name":"Charles Thomas","Location":"Lorem ispsum","x":-73.97,"y":40.75,"Distance":"0.206155"},{"Id":"96","Name":"Charles Brown","Location":"Lorem ispsum","x":-73.97,"y":40.76,"Distance":"0.216102"},{"Id":"97","Name":"Joseph Johnson","Location":"Lorem ispsum","x":-73.97,"y":40.74,"Distance":"0.671937"},{"Id":"98","Name":"Daniel Jackson","Location":"Lorem ispsum","x":-73.97,"y":40.81,"Distance":"0.214709"},{"Id":"99","Name":"Donald Hernandez","Location":"Lorem ispsum","x":-73.95,"y":40.74,"Distance":"9.87005"},{"Id":"100","Name":"Thomas Martin","Location":"Lorem ispsum","x":-73.95,"y":40.75,"Distance":"1.5103"}]

    const marker = customerList.map((id) => (
          <Marker position={[data.filter((item) => item.Id == id)[0].x*(-0.5), data.filter((item) => item.Id == id)[0].y]} icon={customerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )
      )
    

    console.log(customerList)
    return (
      <MapContainer center={[-73.92*(-0.5), 40.75]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-73.92*(-0.5), 40.75]} icon={baseIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {marker}
      </MapContainer>
    )
}
export default Map