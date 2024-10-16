//Components
import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';
import PickCategory from './components/PickCategory';

import { QuizContext } from './context/quiz';
import { useContext, useEffect } from 'react';

import './App.css'
import Header from './components/Header';

function App() {

  const [quizState, dispatch] = useContext(QuizContext);
    
  return (
    <>
      <div className='App'>
        <Header/>     
      </div>
    </>
  )
}

export default App
