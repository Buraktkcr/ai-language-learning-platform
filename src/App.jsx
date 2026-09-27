import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import GrammarPage from './pages/GrammarPage';
import LandingPage from './pages/LandingPage';
import ListeningPage from './pages/ListeningPage';
import LoginPage from './pages/LoginPage';
import ReadingPage from './pages/ReadingPage';
import ShortsPage from './pages/ShortsPage';
import SignupPage from './pages/SignupPage';
import WordsPage from './pages/WordsPage';
import WritingPage from './pages/WritingPage';

function App() {

  return (
    <Routes>
      <Route path='/home' element={ <HomePage />}></Route>
      <Route path='/grammar' element={ <GrammarPage />}></Route>
      <Route path='/' element={ <LandingPage />}></Route>
      <Route path='/listening' element={ <ListeningPage />}></Route>
      <Route path='/login' element={ <LoginPage />}></Route>
      <Route path='/reading' element={ <ReadingPage />}></Route>
      <Route path='/shorts' element={ <ShortsPage />}></Route>
      <Route path='/signup' element={ <SignupPage />}></Route>
      <Route path='/words' element={ <WordsPage />}></Route>
      <Route path='/writing' element={ <WritingPage />}></Route>
    </Routes>
  )
}

export default App
