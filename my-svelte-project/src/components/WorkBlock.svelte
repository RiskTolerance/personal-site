<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../node_modules/vanilla-tilt/lib/vanilla-tilt';
	export let project;
	export let i;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { fade } from 'svelte/transition';

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	let src = `/images/projects/${project.type}/${project.titleUrl}/${project.headerImg}`;

	onMount(async () => {
		VanillaTilt.init(document.querySelectorAll('.work-block'), {
			reverse: true,
			max: 5,
			speed: 400,
			glare: true,
			'max-glare': 0.2,
		});
	});
</script>

<div class="work-block">
	<div
		id="click"
		on:click={() =>
			dispatch('workItemPress', {
				text: i,
			})}
	/>
	<div
		class="image"
		style="background-image: url()"
	/>
	<div id="image-wrapper" style="background-image: url({project.thumbPlaceholder});">
		{#await preload(src) then _}
			<img
				{src}
				in:fade={{ duration: 100 }}
				alt="description"
				class="image"
			/>
		{/await}
	</div>
	<p class="project-title">{project.title}</p>
</div>

<style type="text/css">
	#click {
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0px;
		transform: translateZ(51px);
		cursor: default;
	}

	.project-title {
		width: 80%;
		text-align: center;
		font-family: 'Lato', sans-serif;
		font-weight: 900;
		font-size: 3rem;
		transform: translateZ(50px);
		text-shadow: 0px 0px 6px #000000;
	}

	.work-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 370px;
		height: 370px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		transform-style: preserve-3d;
		border: 2.5rem solid #272727;
	}

	#image-wrapper {
		position: absolute;
		bottom: -5%;
		left: -5%;
		width: 110%;
		height: 110%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		transform: translateZ(-70px);
	}

	.image {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: translateZ(-70px);
	}
</style>
