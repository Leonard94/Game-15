import style from './style.module.scss'

import { useDispatch } from 'react-redux'
import { removeGame } from '../../redux/infoSlice'

export const Buttons = () => {
    const dispatch = useDispatch()

    const goBack = () => {
        dispatch(removeGame())
    }

    return (
        <button className={style.btn} onClick={goBack}>меню</button>
    )
}
