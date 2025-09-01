
import './App.css'
import HardlyLanding from './Hardly/Screens/HardlyLanding/HardlyLanding'
import HardlyForm from './Hardly/Screens/HardlyForm/HardlyForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HardlyProvider from './Hardly/Context/HardlyContext';

function App() {
  return (
    <HardlyProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HardlyLanding />} />
          <Route path='/apply' element={<HardlyForm />} />
        </Routes>
      </Router>
    </HardlyProvider>
  );
}

export default App
