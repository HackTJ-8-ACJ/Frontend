import { parking } from './datatypes'
import { ParkingBlock } from './parking'

export function ParkingLot(props: any) {

  return <svg width="1000" height="1000">
    {props.data.map((value: parking, index: number) => {
      return <ParkingBlock data={value} size={75} key={index}></ParkingBlock>
    })}
  </svg>
}