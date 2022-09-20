import style from './style.module.scss'

export const Menu = ({ handleClickLevel }) => {
    return (
        <div className={style.menu}>
            <div className={style.title}>
                Новая игра
            </div>
            <ul className={style.levels}>
                <li onClick={() => handleClickLevel('light')}><span>Легко</span> поле 3х3</li>
                <li onClick={() => handleClickLevel('medium')}><span>Средне</span>поле 4х4</li>
                <li onClick={() => handleClickLevel('hard')}><span>Сложно</span>поле 5х5</li>
            </ul>
        </div>
    )
}
