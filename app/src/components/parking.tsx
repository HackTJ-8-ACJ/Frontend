import { parking } from './datatypes'
import React from 'react'
interface I {
    data: parking;
}

export const ParkingBlock:React.FC<I> = (props) => {

    const [value, setValue] = React.useState(0);

    return (
    <rect x={props.data.point[0]} y={props.data.point[1]} width={20} height={20} transform={`rotate(${props.data.direction})`} stroke="green" strokeWidth={200} fill="purple" onClick={() => {
        setValue(value + 1)
        console.log(value)
    }}/>
    )
}