async function getJokes() {
	let response = await fetch(
		"https://api.chucknorris.io/jokes/search?query=all"
	);
	let data = await response.json();
	return data;
}

// Category Colors
const categoryColors = [
	"#FE2200",
	"#F8D95E",
	"#8ACFF0",
	"#406E4C",
	"#C59102",
	"#7852A8",
	"#4DBA16",
	"#97FA96",
	"#B168EF",
	"#FE67CC",
	"#FF7516",
	"#7B0B00",
	"#F8D95E",
];

export { categoryColors, getJokes };
