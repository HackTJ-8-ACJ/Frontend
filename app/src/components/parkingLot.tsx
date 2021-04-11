import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { parking } from './datatypes'
import { ParkingBlock } from './parking'


interface I {
  data: parking[];
}

export const ParkingLot:React.FC<I> = (props) => {
  return <Container>
    <Row className="justify-content-md-center pt-3">
      <Col  xs lg="3">
        <svg width={750} height={450}>
        {props.data.map((value: parking, index: number) => {
        return <ParkingBlock data={value} size={75} key={index}></ParkingBlock>
        })}
        </svg>
      </Col>
      <Col  xs lg="3">
        <Button variant="dark"> Hello </Button>
      </Col>
    </Row>
  </Container>
}