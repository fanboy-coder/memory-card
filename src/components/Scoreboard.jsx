import React, {useState} from "react";

export default function Scoreboard (props) {
	const [score, setScore] = useState(0);

	return(
		<>
		<div>
			<p>{props.score} {score}</p>
		</div>
		</>
	)
}