import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
	// TODO
	const [list, setList] = useState<number[]>(initialArray);

	const appendStart = (ele: number) => {
		setList((prev) => [ele, ...prev]);
	};

	const appendEnd = (ele: number) => {
		setList((prev) => [...prev, ele]);
	};

	const popStart = () => {
		let newList = [...list];
		newList.shift();
		setList(newList);
	};
	const popEnd = () => {
		let newList = [...list];
		newList.pop();
		setList(newList);
	};

	const clear = () => {
		setList([]);
	};

	const reset = () => {
		setList(initialArray);
	};

	// refer readme.md for what to return

	return {
		list,
		appendStart,
		appendEnd,
		popStart,
		popEnd,
		clear,
		reset,
	};
};

export default useNumberList;
