import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Image from './components/Image';
import clans from './data/clansData';
import './App.css';

function App(props) {
	const [bestScore, setBestScore] = useState(0);
	const [score, setScore] = useState(0);

	const imageArray= [];

	const [newImageArray,setNewImageArray] = useState(imageArray)

	useEffect(() => {
		shuffleImageArray();
	}, []);

	function shuffleImageArray () {
		const randomImages = [...newImageArray];

		for (let i= randomImages.length -1; i> 0; i--) {
			const j = Math.floor(Math.random() * (i+1));
			[randomImages[i],randomImages[j]] = [randomImages[j], randomImages[i]];
		}

		setNewImageArray(randomImages);
	}

	function handleScore () {
		setScore(score +1);
	}

	function handleBestScore () {
		if (bestScore < score) {
			setBestScore(score);
		}
	}

	for (let i=0; i<clans.length;i++) {
		const image = <Image key={i} name={clans[i].name} image={clans[i].image} clicked={clans[i].clicked} onScoreChange={handleScore} bestScore={handleBestScore}/>
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
				{newImageArray}
			</div>
		</div>
	);
}

export default App;
