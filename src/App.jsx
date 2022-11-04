import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import "./App.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<Categories />
		</div>
	);
}
