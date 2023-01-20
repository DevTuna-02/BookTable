import './App.css';
import BookingPage from './components/BookingPage';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
            <Route path='/' element={<BookingPage/>}/>
        </Routes>
    </>
    
  );
}

export default App;
