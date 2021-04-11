export function ParkingBlock(props: any) {
    console.log('Hello!!')
    return (
    <svg width="31" height="31">
        <rect x={props.data.point[0]} y={props.data.point[1]} width={20} height={20} transform={`rotate(${props.data.direction})`} stroke="green" strokeWidth={2}/>
    </svg>
    )
}