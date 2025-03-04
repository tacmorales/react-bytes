import { useState } from "react";
import viteLogo from "/logo.png";
import "./App.css";

const generateRandom = () => {
	return Math.round(Math.random() * 100 * (Math.random() >= 0.5 ? -1 : 1));
};

function App() {
	const [contador, setContador] = useState(0);

	const incrementCount = () => setContador(contador + 1);
	const decrementCount = () => setContador(contador - 1);
	return (
		<>
			<header>
				<a href="https://tacmorales.github.io" target="_blank">
					<img src={viteLogo} className="logo" alt="Tac Morales DEV logo" />
				</a>
			</header>
			<h1>Un contador sencillo</h1>
			<section>
				<h2>
					Conteo <span className="contador">{contador}</span>
				</h2>
			</section>
			<section className="buttons">
				<button className="btn-minus" onClick={decrementCount}>
					Decrementar ➖
				</button>
				<button className="btn-random" onClick={() => setContador(generateRandom())}>
					Al Azar 🎲
				</button>

				<button className="btn-add" onClick={incrementCount}>
					Incrementar ➕
				</button>
			</section>
		</>
	);
}

export default App;
