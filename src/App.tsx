import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ActionIcon, Card, Container, Flex, Grid, Progress } from '@mantine/core'
import { Text } from '@mantine/core';
import { IconAdjustments, IconAffiliate, IconPlayerPlay, IconPlayerStop, IconSettings } from '@tabler/icons-react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import InputTable from './components/InputTable';



function App() {
  const [customer, setCustomer] = useState<string[]>([]);

  const handleCustomerChange = (updatedCustomer: string[]) => {
      setCustomer(updatedCustomer);
  };

  return (
    <div>
        <Grid grow gutter="0">
          <Grid.Col className='col' span={2}>
            <Sidebar></Sidebar>
          </Grid.Col>
          <Grid.Col className='col' span={10}>
            <Map customerList={customer}></Map>
          </Grid.Col>
          <Grid.Col className='col'>
            <InputTable onCustomerChange={handleCustomerChange}></InputTable>
          </Grid.Col>
        </Grid>
    </div>
  )
}

export default App
