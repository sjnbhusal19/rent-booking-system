
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound'
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';




function App() {
  
  return (
    
    <div className="p-6">
        
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}
export default App
