import styled, { keyframes } from 'styled-components'

export const pulse = keyframes`
    0% {
        transform: scale(0.35, 0.35)
    }
    50% {
        transform: scale(0.4, 0.4)
    }
    100% {
        transform: scale(0.35, 0.35)
    }
`

export default pulse