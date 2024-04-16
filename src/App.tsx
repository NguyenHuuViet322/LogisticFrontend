import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ActionIcon, Card, Container, Flex, Grid, Progress } from '@mantine/core'
import { Text } from '@mantine/core';
import { IconAdjustments, IconAffiliate, IconPlayerPlay, IconPlayerStop, IconSettings } from '@tabler/icons-react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import InputTable from './components/InputTable';
import { DroneProps } from './interface';



function App() {
  const [customer, setCustomer] = useState<string[]>([]);
  const [drone, setDrone] = useState<string[]>([]);
  const [selectedDrone, setSelectedDrone] = useState<string>("/");
  const [isStarted, setStarted] = useState<boolean>(false);

  const handleCustomerChange = (updatedCustomer: string[]) => {
      setCustomer(updatedCustomer);
  };
  const handleDroneChange = (updatedDrone: string[]) => {
    setDrone(updatedDrone);
  };
  const handleSelectedChange = (item : string) => {
    setSelectedDrone(item);
    console.log("change" + item)
  }
  const handleOptimize = (condition:boolean) => {
    setStarted(condition)
    console.log(isStarted)
  }

  return (
    <div>
        <Grid grow gutter="0">
          <Grid.Col className='col' span={2}>
            <Sidebar optimizeOnClick={handleOptimize} isOptimize={isStarted} ></Sidebar>
          </Grid.Col>
          <Grid.Col className='col' span={10}>
            <Map customerList={customer} isOptimize={isStarted} selected={selectedDrone}></Map>
          </Grid.Col>
          <Grid.Col className='col'>
            <InputTable onCustomerChange={handleCustomerChange} onSelectedDroneChange={handleSelectedChange} drone={[]}></InputTable>
          </Grid.Col>
        </Grid>
    </div>
  )
}

export default App
