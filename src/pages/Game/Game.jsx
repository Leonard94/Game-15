import style from './style.module.scss'

import { useState } from 'react'

import { Stats } from '../../components/Stats/Stats'
import { Board } from '../../components/Board/Board'
import { Buttons } from '../../components/Buttons/Buttons'
import { Popup } from '../../components/Popup/Popup'

export const Game = (props) => {
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <div className={style.game}>
            <Stats info={props.info} />
            <Board counterIncrement={props.counterIncrement} setIsCompleted={setIsCompleted} />
            <Buttons {...props} />
            {isCompleted && <Popup info={props.info} />}
        </div>
    )
}
