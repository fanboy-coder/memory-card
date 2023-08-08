import PropTypes from "prop-types";

export default function Scoreboard (props) {

	return(
		<>
		<div>
			<p>{props.scoreType} {props.score}</p>
		</div>
		</>
	)
}

Scoreboard.propTypes = {
	scoreType: PropTypes.string.isRequired, 
	score: PropTypes.number.isRequired,     
  };


