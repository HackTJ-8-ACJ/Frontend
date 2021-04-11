import { parking } from './datatypes'
import React from 'react'
interface I {
    data: parking;
    size: number;
}

export const ParkingBlock:React.FC<I> = (props) => {

    const data = props.data

    const width = props.size

    const height = props.size * 1.5

    const linewidth = props.size / 12.5

    const [clicks, setClicks] = React.useState(0);

    const [color, setColor] = React.useState('rgb(70, 70, 70)');

    const numToColor = (num: number) => {
        var t = 1 - 1 / (0.1 * num + 1)
        var colors = [185 * t + 70, 58 * t + 70, -70 * t + 70]
        return colors
    }

    const clickHandler = () => {
        setClicks(clicks + 1)
        const colors = numToColor(clicks)
        setColor(`rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`)
        console.log(clicks)
    }

    var parking_space: JSX.Element;
    
    if (props.data.occupied) {
        parking_space = <rect x={data.point[0]} y={data.point[1]} width={width} height={height} transform={`rotate(${data.direction})`} fill={'rgb(255,0,0)'}/>
    }

    else {
        parking_space = <rect x={data.point[0]} y={data.point[1]} width={width} height={height} transform={`rotate(${data.direction}, ${data.point[0]}, ${data.point[1]})`} fill={color} onClick={clickHandler}/>
    }

    return (
        <svg>
            {parking_space}
            <line x1={data.point[0]} y1={data.point[1]} x2={data.point[0] + width} y2={data.point[1]} stroke="white" strokeWidth={linewidth} transform={`rotate(${data.direction})`}/>
            <line x1={data.point[0] + linewidth / 2} y1={data.point[1] - props.size / 25} x2={data.point[0] + linewidth / 2} y2={data.point[1] + height} stroke="white" strokeWidth={linewidth} transform={`rotate(${data.direction})`}/>
            <line x1={data.point[0] + linewidth / 2} y1={data.point[1] - props.size / 25} x2={data.point[0] + linewidth / 2} y2={data.point[1] + height} stroke="white" strokeWidth={linewidth} transform={`rotate(${data.direction}) translate(${props.size})`}/>
        </svg>
    )
    // (0, 255, 0) => (255, 0, 0) as counts tends to infinity
    // Map 0 -> infinity to 0 -> 1
}