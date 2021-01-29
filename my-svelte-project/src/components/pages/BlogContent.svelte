<script>
	import BlogBlock from '../BlogBlock.svelte';
	import { posts } from '../../data/BlogPosts.js';
</script>

<div id="blog-block-wrapper">
	<div id="section-description">
		<p>
			There’s something motivational about keeping a public-facing blog.
			Maybe it’s just the assurance that comes with proving that I’ve been
			doing something while I’ve been dating my computer in the era of
			Covid.
		</p>
	</div>
	{#each posts as post, i}
		<BlogBlock
			on:blogItemPress
			{post}
			{i}
		/>
	{/each}
</div>

<style>
	#blog-block-wrapper {
		display: flex;
		justify-content: flex-start;
		margin-left: 5%;
		margin-bottom: 4rem;
		width: 90%;
		height: 90%;
		flex-wrap: wrap;
	}

	#section-description {
		margin: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
	}
</style>
