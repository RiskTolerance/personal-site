<script>
	import { dimentions } from '../data/ColoredBoxDimentions';
	import TweenedStore from './TweenedStore.svelte';
	export let clipRatio;
	
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	let widthConstraint = windowWidth * (clipRatio * 0.01);
	let heightConstraint = windowHeight;

	let updateConstraints = (windowWidth, windowHeight) => {
		widthConstraint = windowWidth * (clipRatio * 0.01);
		heightConstraint = windowHeight;
	};

	const generateDimention = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generatePosition = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generateNewDimentions = () => {
		dimentions.width = generateDimention(100, widthConstraint / 2);
		dimentions.height = generateDimention(100, heightConstraint / 3);
		dimentions.left = generatePosition(
			40,
			widthConstraint - dimentions.width - 40
		);
		dimentions.top = generatePosition(
			160,
			heightConstraint - dimentions.height - 40
		);
	};

	generateNewDimentions();

	setInterval(() => {
		generateNewDimentions();
		updateConstraints(windowWidth, windowHeight);
	}, 12000);
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	on:resize={updateConstraints(windowWidth, windowHeight)}
/>

<div id="wrapper">
	<div id="img-wrapper" style="width: {clipRatio}%;">
		<img src="./images/backgrounds/2.webp" alt="background" />
		<div id="color-box-container" style="width: {clipRatio}%;">
			<TweenedStore />
		</div>
	</div>
</div>

<style>
	#wrapper {
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: -2;
		top: 0px;
		left: 0px;
	}

	#img-wrapper {
		display: flex;
		height: 100%;
		clip-path: inset(0px 0px 0px 0px);
	}

	img {
		position: relative;
		height: 1080px;
		top: 0px;
		left: 0px;
	}

	#color-box-container {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		clip-path: inset(0px 0px 0px 0px);
	}
</style>
