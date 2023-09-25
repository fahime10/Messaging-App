import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MessagesList from './components/MessagesList';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container-fluid">
        <div className="green"></div>
        <div className="cream"></div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/messages-list" element={<MessagesList />} />
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App
