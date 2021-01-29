<script>
	import Baseline from './Baseline.svelte';
	export let title;
	export let leftHeaderMargin;
	export let page;
	export let subPage;
	export let currentFocusItem;
</script>

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
	/>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#wrapper {
		display: flex;
		height: 15vh;
		margin-top: 15vh;
	}

	#title-wrapper {
		display: flex;
		align-items: flex-end;
	}

	#title {
		height: 100%;
		font-family: essonnes-headline, serif;
		font-weight: 700;
		font-style: italic;
		font-size: 13.5rem;
		margin-right: 4rem;
		margin-left: 4rem;
		align-self: flex-end;
	}
</style>
