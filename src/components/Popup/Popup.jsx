import style from './style.module.scss'

import { useSelector } from 'react-redux'

import { getDeclension } from '../../helpers'
import { getTranslatedLevel } from '../../helpers'

import { Buttons } from '../Buttons/Buttons'

export const Popup = () => {
    const { counter, level } = useSelector(state => state.info)

    return (
        <div className={style.popup}>
            <h2 className={style.title}>Победа!</h2>
            <p className={style.subtitle}>Ты прошёл игру на {getTranslatedLevel[level]} уровне сложности за {counter} {getDeclension(counter)}!</p>
            <Buttons />
        </div>
    )
}
