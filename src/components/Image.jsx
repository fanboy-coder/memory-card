import { React, useState } from "react";

export default function Image(props) {

	const [selectedImage,setSelectedImage] = useState(false);

	function clickImage() {
		if(!selectedImage) {
			setSelectedImage(true)
			props.onScoreChange();
		} else {
			props.bestScore();
		}
	}

	return (
		<div className="img-container" onClick={clickImage}>
			<img src={props.image} alt={props.name} />
			<p>{props.name}</p>
		</div>
	)
}