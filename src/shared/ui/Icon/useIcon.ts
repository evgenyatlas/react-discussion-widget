import { IconProps } from "./types";

export function useIcon(props: IconProps) {
    let width, height
    switch (props.size) {
        case 'S':
            width = 8, height = 8
            break
        case 'M':
            width = 16, height = 16
            break
        case 'L':
        default:
            width = 32, height = 32
            break;
    }
    return { ...props, width, height }
}