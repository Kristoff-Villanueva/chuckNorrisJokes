import React from "react";

function Header() {
	return (
		<div className="header">
			<h1>The Joke Bible</h1>
			<p>Daily Laughs for you and yours</p>
			<input
				type="text"
				className="search-bar"
				name=""
				id=""
				placeholder="How can we make you laugh today?"
			/>
		</div>
	);
}

export default Header;
