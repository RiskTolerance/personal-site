<script>
	import BlogBlock from '../BlogBlock.svelte';
	import { posts } from '../../data/BlogPosts.js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div id="blog-block-wrapper">
	<div id="section-description">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
			libero accusamus ea quidem sunt eum facere saepe? Dolorem nam fugit,
			libero neque omnis voluptas optio quaerat nisi deleniti! Provident,
			eos?
		</p>
	</div>
	{#each posts as post, i}
		<BlogBlock
			on:blogItemPress={() => dispatch('blogItemPress')}
			{post}
			{i}
		/>
	{/each}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#blog-block-wrapper {
		display: flex;
		justify-content: flex-start;
		margin-left: 5%;
		margin-bottom: 40px;
		width: 90%;
		height: 90%;
		flex-wrap: wrap;
	}

	#section-description {
		margin: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
	}
</style>
