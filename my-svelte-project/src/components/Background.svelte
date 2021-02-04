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

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	let src = './images/backgrounds/0.webp';
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	on:resize={updateConstraints(windowWidth, windowHeight)}
/>

<div id="wrapper">
	<div id="bg-wrapper" style="width: {clipRatio}%;">
		<div id="img-wrapper">
			{#await preload(src) then _}
				<img {src} alt="background" />
			{/await}
		</div>
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

	#bg-wrapper {
		display: flex;
		height: 100%;
		clip-path: inset(0px 0px 0px 0px);
	}

	#img-wrapper {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NjAgMTA4MCI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiIC8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzFmMWYxZiIgZD0iTTAgMGg5NTd2MTA4MEgweiIvPjxnIGZpbHRlcj0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4xIDIuMSkgc2NhbGUoNC4yMTg3NSkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiM2NjYiIGN4PSIyMCIgY3k9IjEzNiIgcng9IjQxIiByeT0iNDEiLz48ZWxsaXBzZSBmaWxsPSIjNTQ1NDU0IiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDM0LjI2NDA2IDY4Ljk4NTUgLTI1LjE1OTU3IDEyLjQ5NjM4IDEzMSAxMzEuMykiLz48cGF0aCBkPSJNNDUuNy0xLjFsNjUuNS02My4yTDI4OC4zIDExOWwtNjUuNSA2My4yeiIvPjxlbGxpcHNlIGZpbGw9IiM1ZTVlNWUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoNDEuNTM2NjEgLTEuOTAyNiAxLjAzOTM5IDIyLjY5MTQ2IDEwNSAyNTAuOCkiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDE0MCA1OS45IDE1NC40KSBzY2FsZSg1NS4yNDMyOCAzOS4xMzcxNikiLz48ZWxsaXBzZSBmaWxsPSIjN2Q3YzdkIiBjeD0iNjMiIGN5PSIxOTciIHJ4PSIyNyIgcnk9IjkiLz48cGF0aCBkPSJNMTcuNyA3MC4zTC0xNiAxMjQuN2w0MC40LTUuNC0zNS03MC4yeiIvPjxlbGxpcHNlIGZpbGw9IiM1MzUzNTMiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTguNjA3NSAtMTEuNjc0OTIgMjYuMjM4MTUgLTE5LjM0NDQzIDIyNCAzMy4yKSIvPjwvZz48L3N2Zz4=');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		top: 0px;
		left: 0px;
		height: 1080px;
		width: 960px;
	}

	img {
		height: 1080px;
		width: 960px;
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
