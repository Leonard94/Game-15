import style from './style.module.scss'
import { useSelector } from 'react-redux'

export const Stats = () => {
    const { level, counter } = useSelector(state => state.info)

    const showLevel = {
        light: 'лёгкий',
        medium: 'средний',
        hard: 'тяжёлый'
    }

    return (
        <ul className={style.stats}>
            <li>
                уровень
                <span>
                    {showLevel[level]}
                </span>
            </li>
            <li>
                ход
                <span>
                    {counter}
                </span>
            </li>
        </ul>
    )
}
