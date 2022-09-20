import style from './style.module.scss'

export const Cell = ({ number, index, handleClick }) => {
    if (number) return <div className={style.cell} onClick={() => handleClick(index)}>{number}</div>
    return <div className={style.cell_empty} />
}