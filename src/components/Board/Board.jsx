import style from './style.module.scss'

import { useState, useEffect } from 'react'
import { getMixedArray } from '../../helpers'

import { Cell } from '../Cell/Cell'

export const Board = ({ counterIncrement, setIsCompleted }) => {
    const [cells, setCells] = useState(getMixedArray([...Array(9).keys()]))

    const handleClick = (index) => {
        if (isCanMove(index)) {
            moveTheCell(index)
            counterIncrement()
        }
    }

    const isCanMove = (index) => {
        const zeroIndex = cells.indexOf(0)
        return index + 1 === zeroIndex || index - 1 === zeroIndex || index - 3 === zeroIndex || index + 3 === zeroIndex
    }

    const moveTheCell = (index) => {
        console.log('Перемещаем')
        const arr = [...cells]
        arr[arr.indexOf(0)] = arr[index]
        arr[index] = 0
        setCells(arr)
    }

    const isSolved = (arr) => {
        let prev = arr[0]
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] < prev) return false
            prev = arr[i]
        }
        setIsCompleted(true)
    }

    useEffect(() => {
        isSolved(cells)
    }, [cells])

    return (
        <div className={style.board}>
            {cells.map((number, index) => <Cell key={index} number={number} index={index} handleClick={handleClick} />)}
        </div>
    )
}
