<script>
import Img from '../workPagePartials/Img.svelte';
export let currentFocusItem;
console.log(currentFocusItem.images[0]);
</script>

<div id="wrapper">
	<p>{currentFocusItem.description}</p>
	<p>Tools used: {currentFocusItem.tools}</p>
	{#each currentFocusItem.images as image}
		<Img {currentFocusItem} {image}/>
	{/each}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#wrapper {
		margin: 0 5% 0 5%;
		display: flex;
		flex-flow: wrap;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
		margin-bottom: 4rem;
	}
</style>
