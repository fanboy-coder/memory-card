import Scoreboard from './components/Scoreboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Scoreboard score="Score: "/>
	  <Scoreboard score="Best score: "/>
    </div>
  );
}

export default App;
