import style from './style.module.scss'

export const Stats = ({ info }) => {

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
                    {showLevel[info.level]}
                </span>
            </li>
            <li>
                ход
                <span>
                    {info.counter}
                </span>
            </li>
        </ul>
    )
}
