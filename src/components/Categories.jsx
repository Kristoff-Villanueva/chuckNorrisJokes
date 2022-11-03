import React from "React";
import { jokesCategories, categoryColors } from "../data";

export default function Categories() {
	// const [categoryList, setCategoryList] = React.useState(
	// 	jokesCategories.slice(0, 6)
	// );

	const [categoryToggle, setCategoryToggle] = React.useState(false);
	const [categoryList, setCategoryList] = React.useState(jokesCategories);
	const [buttonText, setButtonText] = React.useState("View More");

	React.useEffect(() => {
		if (categoryToggle === true) {
			setCategoryList(jokesCategories);
			setButtonText("See Less");
		} else {
			setCategoryList(jokesCategories.slice(0, 6));
			setButtonText("View More");
		}
	}, [categoryToggle]);

	const buttonElements = [];

	for (let i = 0; i < categoryList.length; i++) {
		buttonElements.push(
			<button
				style={{ backgroundColor: categoryColors[i] }}
				key={categoryList[i]}
			>
				{categoryList[i]}
			</button>
		);
	}

	function handleClick() {
		setCategoryToggle((prevToggle) => !prevToggle);
	}

	return (
		<div className="categoryButtons">
			{buttonElements}
			<button className="viewMore" onClick={handleClick}>
				{buttonText}
			</button>
		</div>
	);
}
