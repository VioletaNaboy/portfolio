import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { HomePage }  from './pages/HomePage/HomePage';
import { EducationPage } from './pages/EducationPage/EducationPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/education" element={<EducationPage/>} />    
        </Route>
      </Routes>
    </div>
  );
}

export default App;
