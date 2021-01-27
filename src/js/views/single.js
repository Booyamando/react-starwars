import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const planet_id = params.planets_id;
	const person_id = params.person_id;
    const vehicle_id = params.vehicles_id;
    
    const [resourceType, setResourceType] = useState(null);
    const [resourceIndex, setResourceIndex] = useState(null);
    const [fetchedResource, setFetchedResource] = useState(null);


	const type = () => {
		if (planet_id) {
            setResourceType("planets") ;
            setResourceIndex(planet_id);
		} else if (person_id) {
			setResourceType("person") ;
            setResourceIndex(person_id);
		} else if (vehicle_id) {
			setResourceType("vehicles") ;
            setResourceIndex(vehicle_id);
		}
    };
    
    useEffect (() => {
        type();
    }, []);

    useEffect(() => {
        setTimeout(() => resourceIndex(), 500);
    },
    [resourceType,  resourceIndex]);

    const resource = () => {
        if (resourceType !== nul && resourceIndex !== null) {
            let url = store[resourceType] [resourceIndex].url;
            fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(data => {
                setFetchedResource(data.result.properties);
            })
            .catch(err => console.error(err));
        }
    }

	return <div className="" />;
};

details.propTypes = {
	match: PropTypes.object
};
