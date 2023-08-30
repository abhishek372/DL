import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import LaunchPage from './Components/launchPage';

function App() {
  return (
	<div className="App relative">
      <BrowserRouter>
          <Routes>
            <Route empty path='' element={<LaunchPage />} />
          </Routes>
      </BrowserRouter>
  </div>
  );
} 

export default App;
