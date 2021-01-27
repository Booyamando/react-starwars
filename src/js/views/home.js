import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const buildRow = (data, type) => {
		return data.map((item, index) => {
			return (
				<Card
					key={index}
					img={"https://via.placeholder.com/300"}
					title={item.name}
					btnUrl={`/${type}/${index}`}
					btnTitle={"View More"}
				/>
			);
		});
	};

	return (
		<div className="text center mt-5">
			<h1>Star Wars</h1>
			<div className="resource-row mb-4">{buildRow(store.planets, "planets")}</div>
			<div className="resource-row mb-4">{buildRow(store.planets, "people")}</div>
			<div className="resource-row mb-4">{buildRow(store.planets, "vehicles")}</div>
		</div>
	);
};
