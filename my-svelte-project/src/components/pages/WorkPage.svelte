<script>
	import Img from '../workPagePartials/Img.svelte';
	export let currentFocusItem;
</script>

<div id="wrapper">
	<p>{@html currentFocusItem.description}</p>
	<p>Tools used: {currentFocusItem.tools}</p>
	{#each currentFocusItem.images as image}
		<Img {currentFocusItem} {image} />
	{/each}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#wrapper {
		margin: 0 5% 4rem 5%;
		display: flex;
		flex-flow: wrap;
	}

	p :global(a) {
		color: #e0a43e;
		text-decoration: none;
		cursor: default;
	}

	p :global(a):hover {
		color: #f4fff4;
	}

	p,
	p :global(a) {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
		margin-bottom: 4rem;
		width: 100%;
	}
</style>
