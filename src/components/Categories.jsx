import React from "React";
import { categoryColors, getJokes } from "../utils";

export default function Categories() {
	const [showAllCategory, setShowAllCategory] = React.useState(false);
	const [categoryList, setCategoryList] = React.useState([]);
	const [constantCategories, setConstantCategories] = React.useState([]);
	const [buttonText, setButtonText] = React.useState("View More ⬇️");
	const [selectedCategory, setSelectedCategory] = React.useState("");
	const [allJokes, setAllJokes] = React.useState([]);
	const [categoryJokes, setCategoryJokes] = React.useState([]);

	// Get All Jokes
	React.useEffect(() => {
		getJokes().then((data) => {
			setAllJokes(data.result);
			// console.log(allJokes);
		});
	}, []);

	// Get Categories
	React.useEffect(() => {
		getJokes().then((data) => {
			let jokesWithCategories = data.result.filter((jokes) => {
				return jokes.categories.length !== 0;
			});
			let categories = [];
			for (let joke of jokesWithCategories) {
				categories.push(...joke.categories);
			}
			let filteredCategories = [...new Set(categories)];
			setCategoryList(filteredCategories.slice(0, 6));
			setConstantCategories(filteredCategories);
		});
	}, []);

	// Toggle Category View
	React.useEffect(() => {
		if (showAllCategory === false) {
			setCategoryList(constantCategories.slice(0, 6));
			setButtonText("View More ⬇️");
		} else if (showAllCategory === true) {
			setButtonText("See Less ⬆️");
			setCategoryList(constantCategories);
		}
	}, [showAllCategory]);

	// Filter Jokes According to Category
	React.useEffect(() => {
		let filteredJokes = allJokes.filter(function (joke) {
			return joke.categories[0] === selectedCategory;
		});
		setCategoryJokes(filteredJokes);
		console.log(filteredJokes);
	}, [selectedCategory]);

	// Render Category Buttons
	const buttonElements = [];
	for (let i = 0; i < categoryList.length; i++) {
		buttonElements.push(
			<button
				style={{ backgroundColor: categoryColors[i] }}
				key={categoryList[i]}
				name={categoryList[i]}
				onClick={handleCategoryClick}
			>
				{categoryList[i]}
			</button>
		);
	}

	// Render Joke Elements
	const jokeElements = [];
	for (let joke of categoryJokes) {
		jokeElements.push(
			<div className="jokeDiv" key={joke.value}>
				<p>{joke.value}</p>
			</div>
		);
	}

	//Functions
	function handleCategoryClick(event) {
		setSelectedCategory(event.target.name);
	}

	function handleClick() {
		setShowAllCategory((prevToggle) => !prevToggle);
	}

	return (
		<div>
			<div className="categoryButtons">
				{buttonElements}
				<button className="viewMore" onClick={handleClick}>
					{buttonText}
				</button>
			</div>
			<div className="jokeElements">{jokeElements}</div>
		</div>
	);
}
