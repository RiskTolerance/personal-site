<script>
	export let currentFocusItem;
	export let image;
	import { fade } from 'svelte/transition';

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	let src = `./images/projects/${currentFocusItem.type}/${currentFocusItem.titleUrl}/${image.imageUrl}`;

	let sideMargin;
	if (image.width === '20') {
		sideMargin = 2.5;
	} else if (image.width === '40') {
		sideMargin = 5;
	} else if (image.width === '90') {
		sideMargin = 5;
	}
</script>

{#if image.hasDescription === true}
	<p>{image.description}</p>
{/if}

<div id="image-wrapper" style="width: {image.width}%; margin: 0 {sideMargin}% 40px {sideMargin}%;">
	{#await preload(src) then _}
		<img
			id="image"
			{src}
			in:fade={{ duration: 100 }}
			alt={image.alt}
		/>
	{/await}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: #f4fff4;
	}

	p {
		width: 100%;
		margin-bottom: 2rem;
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
	}

	#image-wrapper {
		margin-bottom: 40px;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
