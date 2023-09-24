import './style.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="green"></div>
        <div className="cream"></div>
        {/* <div className="content"></div> */}
        <LoginPage />
      </div>
    </>
  );
}

export default App
