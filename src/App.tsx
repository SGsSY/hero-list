import React from 'react';
import {HeroPage} from 'view/HeroPage/HeroPage';
import { useNavigate } from 'react-router-dom';

function App() {

  const naviage = useNavigate();

  React.useEffect(() => {
    naviage('heroes')
  }, [])

  return <HeroPage />
}

export default App;
