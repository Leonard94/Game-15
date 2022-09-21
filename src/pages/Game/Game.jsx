import style from './style.module.scss'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import { getCovertedLineToNumber } from '../../helpers'

import { Stats } from '../../components/Stats/Stats'
import { Board } from '../../components/Board/Board'
import { Buttons } from '../../components/Buttons/Buttons'
import { Popup } from '../../components/Popup/Popup'

export const Game = () => {
    const [isCompleted, setIsCompleted] = useState(false)

    const { level, counter } = useSelector(state => state.info)

    return (
        <div className={style.game}>
            <Stats level={level} counter={counter} />
            <Board setIsCompleted={setIsCompleted} levelNumber={getCovertedLineToNumber[level]} />
            <Buttons />
            {isCompleted && <Popup />}
        </div>
    )
}
