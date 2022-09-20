import style from './style.module.scss'

export const Buttons = ({ goBack, startNewGame }) => {
    return (
        <div className={style.column}>
            <button onClick={goBack}>меню</button>
            <button onClick={startNewGame}>заново</button>
        </div>
    )
}
