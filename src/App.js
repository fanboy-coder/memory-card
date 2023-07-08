import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Image from './components/Image';
import clans from './data/clansData';
import './App.css';

function App(props) {
	const [bestScore, setBestScore] = useState(0);
	const [score, setScore] = useState(0);
	const imageArray= [];

	useEffect(() => {

	}, []);

	for (let i=0; i<clans.length;i++) {
		const image = <Image key={i} name={clans[i].name} image={clans[i].image}/>
		imageArray.push(image);
	}

	return (
		<div className="App">
			<div className='container' id="top">
				<div className='title'>
					<h1 id="headline">Vampire: the Masquerade clan memory game</h1>
					<p>Get points by clicking on a clan symbol you haven't clicked before.</p>
				</div>
				<div className="scoreboard">
					<Scoreboard scoretype="Score: " score={score}/>
					<Scoreboard scoretype="Best score: " score={bestScore}/>
				</div>
			</div>
			<div className='container' id="bottom">
				{imageArray}
			</div>
		</div>
	);
}

export default App;
