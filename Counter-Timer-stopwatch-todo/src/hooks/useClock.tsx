import { useEffect, useRef, useState } from "react";

const useClock = () => {
	// TODO
	// refer readme.md for what to return
	const timeRef = useRef<number | null>(null);
	const [hours, setHours] = useState(new Date().getHours());
	const [minutes, setMins] = useState(new Date().getMinutes());
	const [seconds, setSecs] = useState(new Date().getSeconds());

	const startCounting = () => {
		if (!timeRef.current) {
			timeRef.current = window.setInterval(() => {
				setHours(new Date().getHours());
				setMins(new Date().getMinutes());
				setSecs(new Date().getSeconds());
			}, 1000);
		}
	};

	// const stopCounting = () => {
	// 	if (timeRef.current) {
	// 		clearInterval(timeRef.current);
	// 	}
	// };

	useEffect(() => {
		startCounting();
		// return stopCounting;
	}, []);

	return {
		hours,
		minutes,
		seconds,
	};
};

export default useClock;
