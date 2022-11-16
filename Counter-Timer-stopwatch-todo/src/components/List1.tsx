import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
	initialValues: Array<number>;
	label: string;
};
const List1 = ({ initialValues, label }: List1Props) => {
	const { list, appendStart, popEnd, clear, reset } =
		useNumberList(initialValues);
	const [myNum, setMyNum] = useState<number>(0);
	const handleChange = (num: number) => {
		setMyNum(num);
	};
	// console.log(label, list);
	return (
		<div data-testid="list1">
			<h3 data-testid="list1-label">
				{/* Label */}
				{label}
			</h3>
			<div style={{ display: "flex", gap: "10px" }}>
				{/* Iterate List and wrap the element div below inside */}
				{list.map((ele, id) => (
					<div key={ele + id} data-testid="list1-element">
						{ele}
					</div>
				))}
			</div>

			<input
				data-testid="list1-input"
				value={myNum}
				type="number"
				onChange={(e) => {
					handleChange(+e.currentTarget.value);
				}}
			/>
			<button
				data-testid="list1-btn-append-start"
				onClick={() => {
					appendStart(myNum);
				}}>
				{/* Append to start of list btn */}Append
			</button>
			<button data-testid="list1-btn-pop-end" onClick={popEnd}>
				{/* po last element btn */}Pop End
			</button>
			<button data-testid="list1-btn-clear" onClick={clear}>
				{/* clear list and set empty button */}Clear
			</button>
			<button data-testid="list1-btn-reset" onClick={reset}>
				Reset
				{/* Reset list to default value btn */}
			</button>
		</div>
	);
};

export default List1;
