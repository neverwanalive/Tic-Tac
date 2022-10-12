import { winArray } from '../constants/common'

export const checkWinner = (array) => {
    return (winArray
            .map((_, idx) => arrayComparison(array, idx)).find(value => value))
}

const arrayComparison = (array, index) => {
    return array
            .filter((_, idx) => winArray[index].includes(idx))
            .filter((value, _, result) => value === result[0] && value !== null)
            .find((_, __, array) => array.length === 3)
}