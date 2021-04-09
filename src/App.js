import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div id="app">
      <div className="container">
            <div id="canvas" className="board" >
              <Board></Board>
            </div>
        </div>
    </div>
  );
}

export default App;
