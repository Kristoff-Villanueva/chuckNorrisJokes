const jokesCategories = [];

// Retrieving data from the API
async function getCategories() {
	let response = await fetch(
		"https://api.chucknorris.io/jokes/search?query=all"
	);
	let data = await response.json();
	return data;
}

getCategories().then((data) => {
	let jokesWithCategories = data.result.filter((jokes) => {
		return jokes.categories.length !== 0;
	});
	for (let jokes of jokesWithCategories) {
		if (jokesCategories.indexOf(...jokes.categories) === -1) {
			jokesCategories.push(...jokes.categories);
		}
	}
});

// Category Colors
const categoryColors = [
	"#F8D95E",
	"#8ACFF0",
	"#406E4C",
	"#C59102",
	"#7852A8",
	"#4DBA16",
	"#97FA96",
	"#B168EF",
	"#FE67CC",
	"#7B0B00",
	"#F8D95E",
	"#FE2200",
	"#FF7516",
];

export { jokesCategories, categoryColors };
