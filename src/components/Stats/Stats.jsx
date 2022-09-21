import style from './style.module.scss'

export const Stats = ({ level, counter }) => {

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
