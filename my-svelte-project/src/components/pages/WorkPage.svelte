<script>
	export let currentFocusItem;
	console.log(currentFocusItem.images[0]);
</script>

<div id="wrapper">
	<h1>{currentFocusItem.title}</h1>
	<p>{currentFocusItem.description}</p>
	{#each currentFocusItem.images as image}
		<img
			src="./images/projects/{currentFocusItem.type}/{currentFocusItem.titleUrl}/{image}"
			alt=""
		/>
	{/each}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#wrapper {
		margin: 0 5% 0 5%;
	}

	img {
		height: 300px;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
	}
</style>
