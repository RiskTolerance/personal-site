<script>
	import { onMount } from 'svelte';
	import VanillaTilt from '../../node_modules/vanilla-tilt/lib/vanilla-tilt';
	export let post;
	export let i;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	onMount(async () => {
		VanillaTilt.init(document.querySelectorAll('.blog-block'), {
			reverse: true,
			max: 5,
			speed: 400,
			glare: true,
			'max-glare': 0.1,
		});
		VanillaTilt.init(document.querySelectorAll('.image-frame'), {
			reverse: true,
			max: 5,
			speed: 400,
			glare: true,
			'max-glare': 0.2,
		});
	});
</script>

<div class="blog-block">
	<div
		class="image"
		style="background-image: url(/images/blogs/{post.titleUrl}/{post.thumbnail});"
	/>
	<div
		id="click"
		data-item={i}
		data-link={post.titleUrl}
		on:click={() => dispatch('blogItemPress')}
	/>
	<div class="info-container-color" />
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
		margin: 0;
		padding: 0;
		color: #272727;
	}

	#click {
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0px;
		z-index: 10;
	}

	.blog-block {
		display: flex;
		align-items: flex-end;
		position: relative;
		width: 465px;
		height: 350px;
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
		transform: translateZ(-100px);
	}

	.info-container-color {
		padding: 10px;
		height: 25%;
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
		font-size: 2rem;
		margin-left: 20px;
	}

	#date-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	#line {
		height: 5px;
		width: 70%;
		background-color: #272727;
	}

	#date {
		font-family: 'Lato', sans-serif;
		font-weight: 300;
		font-size: 1.3rem;
		margin-left: 20px;
	}
</style>
