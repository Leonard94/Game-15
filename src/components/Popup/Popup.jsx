import style from './style.module.scss'

import { Buttons } from '../Buttons/Buttons'
import { getDeclension } from '../../helpers'

export const Popup = ({ info }) => {
    const showLevel = {
        light: 'лёгком',
        medium: 'среднем',
        hard: 'тяжёлом'
    }

    return (
        <div className={style.popup}>
            <h2 className={style.title}>Победа!</h2>
            <p className={style.subtitle}>Ты прошёл игру на {showLevel[info.level]} уровне сложности за {info.counter} {getDeclension(info.counter)}!</p>
            <Buttons />
        </div>
    )
}
