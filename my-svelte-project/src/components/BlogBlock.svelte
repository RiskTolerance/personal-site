<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../node_modules/vanilla-tilt/lib/vanilla-tilt';
	export let post;
	export let i;
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition'
	const dispatch = createEventDispatcher();

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	let src = `/images/blogs/${post.titleUrl}/${post.thumbnail}`

	onMount(async () => {
		VanillaTilt.init(document.querySelectorAll('.blog-block'), {
			reverse: true,
			max: 5,
			speed: 400,
			glare: true,
			'max-glare': 0.2,
		});
	});
</script>

<div class="blog-block">
	<img
		class="image"
		alt="placeholder"
		style="background-image: url({post.thumbPlaceholder});"
	/>

	{#await preload(src) then _}
	<img
		{src}
		in:fade="{{ duration: 500 }}"
		alt="description"
		class="image"
	/>
	{/await}

	<div
		id="click"
		on:click={() =>
			dispatch('blogItemPress', {
				text: i,
			})}
	/>

	<div class="info-container-color"/>
	<div class="info-container">
		<h4 id="title">{post.title}</h4>
		<div id="date-container">
			<p id="date">{post.date}</p>
			<div id="line" />
		</div>
	</div>
</div>

<style>
	* {
		color: #272727;
		margin: 0;
		padding: 0;
	}

	#click {
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0px;
		transform: translateZ(51px);
		cursor: default;
	}

	.blog-block {
		display: flex;
		align-items: flex-end;
		position: relative;
		width: 550px;
		height: 400px;
		transform-style: preserve-3d;
		border: 40px solid #272727;
	}

	.image {
		position: absolute;
		bottom: -10%;
		left: -8%;
		width: 116%;
		height: 120%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		transform: translateZ(-120px);
	}

	.info-container-color {
		padding: 10px;
		height: 30%;
		width: 100%;
		background-color: #e0a43e;
		clip-path: polygon(0 0, 100% 30%, 100% 100%, 0% 100%);
		transform: translateZ(1px);
	}

	.info-container {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 10px;
		height: 25%;
		width: 90%;
		transform: translateZ(50px);
	}

	#title {
		font-family: 'Lato', sans-serif;
		font-weight: 900;
		font-size: 2.5rem;
		margin-left: 2rem;
		margin-bottom: 5px;
	}

	#date-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 1rem;
	}

	#line {
		height: 5px;
		margin-top: 2.5px;
		width: 70%;
		background-color: #272727;
	}

	#date {
		font-family: 'Lato', sans-serif;
		font-weight: 500;
		font-size: 1.8rem;
		margin-left: 2rem;
	}
</style>
