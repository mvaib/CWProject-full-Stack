import './App.css';
import Home from './pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SingIn'; // Make sure the import matches the correct filename!

function App() {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <SignIn />}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
