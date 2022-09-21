import style from './style.module.scss'

import { useDispatch } from 'react-redux'
import { removeGame } from '../../redux/infoSlice'

export const Buttons = () => {
    const dispatch = useDispatch()

    const goBack = () => {
        dispatch(removeGame())
    }

    return (
        <div className={style.column}>
            <button onClick={goBack}>меню</button>
            {/* <button onClick={startNewGame}>заново</button> */}
        </div>
    )
}
