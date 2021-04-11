import { parking } from './datatypes'
import { ParkingBlock } from './parking'

export function ParkingLot(props: any) {

  return <svg width="500" height="500">
    {props.data.map((value: parking, index: number) => {
      return <ParkingBlock data={value} key={index}></ParkingBlock>
    })}
  </svg>
}