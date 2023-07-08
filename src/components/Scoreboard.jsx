import React, {useState} from "react";

export default function Scoreboard (props) {

	return(
		<>
		<div>
			<p>{props.scoretype} {props.score}</p>
		</div>
		</>
	)
}