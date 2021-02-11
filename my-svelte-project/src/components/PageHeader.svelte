<script>
	import Baseline from './Baseline.svelte';
	export let title;
	export let leftHeaderMargin;
	export let page;
	export let subPage;
	export let currentFocusItem;
	export let layout;
	export let windowHeight;
	$: windowHeightPercent = windowHeight / 1080;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div id="wrapper">
	<div style="margin-left: {leftHeaderMargin}" id="title-wrapper">
		<h1 id="title">{title}</h1>
	</div>
	<Baseline
		on:closeItem
		on:workNavPress
		{page}
		{subPage}
		{currentFocusItem}
		{windowHeightPercent}
		{layout}
	/>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#wrapper {
		display: flex;
		min-height: 10vh;
		margin-top: 15vh;
		z-index: 1;
	}

	#title-wrapper {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}

	#title {
		height: 11.6rem;
		line-height: 13rem;
		font-family: essonnes-headline, serif;
		font-weight: 700;
		font-style: italic;
		font-size: 13rem;
		margin-right: 4rem;
		margin-left: 4rem;
	}

	@media only screen and (max-width: 1390px) {
		#wrapper {
			margin-top: 15vh;
			height: 10vh;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
		}

		#title-wrapper {
			align-items: center;
			margin-left: 0 !important;
		}

		#title {
			font-size: 8rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (max-width: 600px) {
		#wrapper {
			margin-top: 10vh;
			height: 8vh;
			flex-direction: column;
			align-items: center;
		}
		
		#title {
			font-size: 6rem;
		}
	}
</style>
