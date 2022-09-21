import style from './style.module.scss'

import { useState, useEffect } from 'react'
import { getMixedArray } from '../../helpers'

import { useDispatch } from 'react-redux'
import { setCounterIncrement } from '../../redux/infoSlice'

import { Cell } from '../Cell/Cell'

export const Board = ({ setIsCompleted, levelNumber }) => {
    const [cells, setCells] = useState(getMixedArray([...Array(levelNumber).keys()]))
    // const [cells, setCells] = useState([1, 2, 3, 4, 5, 0, 7, 8, 6]) // Тестирование 3х3
    // const [cells, setCells] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 13, 14, 15, 12]) // Тестирование 4х4
    // const [cells, setCells] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 0, 22, 23, 24, 25, 21]) // Тестирование 5х5

    const dispatch = useDispatch()

    const handleClick = (index) => {
        if (isCanMove(index)) {
            moveTheCell(index)
            dispatch(setCounterIncrement())
        }
    }

    const isCanMove = (index) => {
        const emptyIndex = cells.indexOf(0)
        const devider = {
            9: 3,
            16: 4,
            25: 5
        }
        return (
            index + 1 === emptyIndex ||
            index - 1 === emptyIndex ||
            index - devider[levelNumber] === emptyIndex ||
            index + devider[levelNumber] === emptyIndex
        )
    }

    const moveTheCell = (index) => {
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

    const sizes = {
        9: '3, 100px',
        16: '4, 75px',
        25: '5, 50px'
    }

    const styleForBoard = {
        gridTemplateColumns: `repeat(${sizes[levelNumber]})`,
        gridTemplateRows: `repeat(${sizes[levelNumber]})`
    }

    return (
        <div style={styleForBoard} className={style.board}>
            {cells.map((number, index) =>
                <Cell key={index} number={number} index={index} handleClick={handleClick} />
            )}
        </div>
    )
}
