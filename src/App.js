import './styles/App.css';
import './styles/Board.css';
import './styles/Cell.css';
import Board from './components/Board';

function App() {
	return (
		<div id="app">
			<div id="main">
				<div id="title">
					<h1>Snakebali</h1>
				</div>
				<div id="board">
					<div className="canvas">
						<Board></Board>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
