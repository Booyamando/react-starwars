import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<Link to={props.btnUrl} className="btn btn-primary">
					{props.btnTitle}
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	btnUrl: PropTypes.string,
	btnTitle: PropTypes.string,
	img: PropTypes.string
};
