import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { HomePage }  from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
