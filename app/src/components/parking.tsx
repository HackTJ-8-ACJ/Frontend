import { parking } from './datatypes'
import React from 'react'
interface I {
    data: parking;
}

export const ParkingBlock:React.FC<I> = (props) => {

    const [clicks, setClicks] = React.useState(0);

    const [color, setColor] = React.useState('rgb(0, 255, 0)');

    const numToColor = (num: number) => {
        var t = 1 - 1 / (0.1 * num + 1)
        var colors = [255 * t, 255 * (1 - t), 0]
        return colors
    }

    return (
    <rect x={props.data.point[0]} y={props.data.point[1]} width={250} height={250} transform={`rotate(${props.data.direction})`} stroke="green" strokeWidth={0} fill={color} onClick={() => {
        setClicks(clicks + 1)
        const colors = numToColor(clicks)
        setColor(`rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
        console.log(clicks)
    }}/>
    )
    // (0, 255, 0) => (255, 0, 0) as counts tends to infinity
    // Map 0 -> infinity to 0 -> 1
}