const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = "https://www.swapi.tech/api";
	return {
		store: {
			planets: [],
			people: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			initData: () => {
				getActions().loadSomeData("planets");
				getActions().loadSomeData("people");
				getActions().loadSomeData("vehicles");
			},
			loadSomeData: type => {
				return fetch(`${baseURL}/${type}`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);

						return res.json();
					})
					.then(data => {
						let aux = data.results.sort(function(a, b) {
							var x = a.name.toLowerCase();
							var y = b.name.toLowerCase();
							if (x < y) {
								return -1;
							}
							if (x > y) {
								return 1;
							}
							return 0;
						});

						setStore({
							[type]: aux
						});
					})
					.catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
