<script>
	export let currentFocusItem;
	export let image;

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

<img
	id="image"
	style="width: {image.width}%; margin: 0 {sideMargin}% 40px {sideMargin}%;"
	src="./images/projects/{currentFocusItem.type}/{currentFocusItem.titleUrl}/{image.imageUrl}"
	alt={image.alt}
/>

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

	img {
		margin-bottom: 40px;
	}
</style>
