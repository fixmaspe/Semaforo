import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("green");
	return (
		<div className="text-center">
			<div className="soporte"></div>
			<div className="semaforo">
				<div
					onClick={() => setColor("red")}
					className={
						"red" + (color === "red" ? " iluminado" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"yellow" + (color === "yellow" ? " iluminado" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"green" + (color === "green" ? " iluminado" : "")
					}></div>
			</div>
		</div>
	);
}
