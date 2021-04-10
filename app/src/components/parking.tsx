import { parking } from './datatypes'

export function parkingBlock(data: parking) {
    return (
    <svg width="31" height="31">
        <rect x="data.point[0]" y="data.point[1]" width="20" height="20" transform="rotate(data.direction)" />
    </svg>
    )
}