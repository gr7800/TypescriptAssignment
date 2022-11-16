import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
	return (
		<div className="App">
			{/* Clock */}
			<Clock label="24 Hour Live Custom Component Clock" />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "10px",
					margin: "10px auto",
					width: "100%",
				}}>
				<div
					style={{
						border: "1px solid black",
						padding: "10px",
					}}>
					{/* List 1  initialValues [1, 2, 3] */}
					<List1 initialValues={[1, 2, 3]} label="List 1" />
				</div>
				<div
					style={{
						border: "1px solid black",
						padding: "10px",
					}}>
					{/* List 2  initialValues [4, 5] */}
					<List2 initialValues={[4, 5]} label="List 2" />
				</div>
			</div>
		</div>
	);
}

export default App;
