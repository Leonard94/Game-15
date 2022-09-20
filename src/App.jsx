import { useState } from 'react'

import { Menu } from './pages/Menu/Menu'
import { Game } from './pages/Game/Game'

const App = () => {
  const [info, setInfo] = useState({ level: null, counter: 0 })

  const handleClickLevel = (level) => {
    setInfo({ ...info, level })
  }

  const counterIncrement = () => {
    setInfo({ ...info, counter: info.counter + 1 })
  }

  const goBack = () => {
    setInfo({ ...info, level: null })
  }

  const startNewGame = () => {
    setInfo({ level: 'light', counter: 0 })
  }

  return (
    <div className='app'>
      {!info.level ? <Menu handleClickLevel={handleClickLevel} /> : <Game info={info} startNewGame={startNewGame} goBack={goBack} counterIncrement={counterIncrement} />}
    </div>
  );
}

export default App;
