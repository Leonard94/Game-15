import { useSelector } from 'react-redux'

import { Menu } from './pages/Menu/Menu'
import { Game } from './pages/Game/Game'

const App = () => {
  const level = useSelector(state => state.info.level)

  return (
    <div className='app'>
      {!level ? <Menu /> : <Game />}
    </div>
  );
}

export default App;
