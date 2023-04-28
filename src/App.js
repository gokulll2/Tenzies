import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
function App() {
  const x=10;
  return (
    <div>
      <Header x={x}/>
    </div>
  );
}

export default App;
