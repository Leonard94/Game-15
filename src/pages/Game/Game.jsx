import style from './style.module.scss'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Stats } from '../../components/Stats/Stats'
import { Board } from '../../components/Board/Board'
import { Buttons } from '../../components/Buttons/Buttons'
import { Popup } from '../../components/Popup/Popup'

export const Game = () => {
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <div className={style.game}>
            <Stats />
            <Board setIsCompleted={setIsCompleted} />
            <Buttons />
            {isCompleted && <Popup />}
        </div>
    )
}
