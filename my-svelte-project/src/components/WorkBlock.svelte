<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../node_modules/vanilla-tilt/lib/vanilla-tilt';
	export let project;
	export let i;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

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
		on:click={() => dispatch('workItemPress', {
			text: i
		})}
	/>
	<div
		class="image"
		style="background-image: url(/images/projects/{project.type}/{project.titleUrl}/{project.headerImg})"
	/>
	<p class="project-title">{project.title}</p>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#click {
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0px;
		transform: translateZ(51px);
		cursor: pointer;
	}

	.project-title {
		font-family: 'Lato', sans-serif;
		font-weight: 900;
		font-size: 2rem;
		transform: translateZ(50px);
		text-shadow: 0px 0px 4px #000000;
	}

	.work-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 320px;
		height: 320px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		transform-style: preserve-3d;
		border: 20px solid #272727;
	}

	.image {
		position: absolute;
		bottom: -5%;
		left: -5%;
		width: 110%;
		height: 110%;
		background-repeat: no-repeat;
		background-size: cover;
		transform: translateZ(-70px);
	}
</style>
