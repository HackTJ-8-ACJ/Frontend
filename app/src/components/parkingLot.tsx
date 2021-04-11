import { parking } from './datatypes'
import { ParkingBlock } from './parking'

export function ParkingLot(props: any) {
  return <svg width="100" height="100">
    <ul>
      {props.data.map((value: parking, index: number) => {
          return <ParkingBlock data={value} key={index}></ParkingBlock>
      })}
    </ul>
  </svg>
}