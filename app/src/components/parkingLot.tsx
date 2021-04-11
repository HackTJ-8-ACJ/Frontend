import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { parking } from './datatypes'
import { ParkingBlock } from './parking'


interface I {
  data: parking[];
}

export const ParkingLot:React.FC<I> = (props) => {
  const [data, setData] = React.useState(props.data);

  useEffect(() => {
      const interval = setInterval(() => { 
        var new_data = [...data]
        new_data[Math.floor(Math.random() * new_data.length)].occupied = true;
        new_data[Math.floor(Math.random() * new_data.length)].occupied = false;
        setData(new_data)
      //code goes here that will be run every 5 seconds.    
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return <Container>
    <Row className="justify-content-md-center pt-3">
      <svg width={"100%"} height={450}>
      {data.map((value: parking, index: number) => {
      return <ParkingBlock data={value} size={75} key={index}></ParkingBlock>
      })}
      </svg>
      </Row>
    <Row className="justify-content-md-center pt-3">
      <Button variant="dark"> Toggle Real Data </Button>
    </Row>
  </Container>
}