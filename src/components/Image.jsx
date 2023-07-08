import { React, useState } from "react";
import Scoreboard from "./Scoreboard";

export default function Image(props) {

	const [selectedImage,setSelectedImage] = useState(false);

	function clickImage() {
		setSelectedImage(true);
	}

	return (
		<div className="img-container" onClick={clickImage}>
			<img src={props.image} alt={props.name} />
			<p>{props.name}</p>
		</div>
	)
}