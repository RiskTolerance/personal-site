<script>
	import BlogBlock from '../BlogBlock.svelte';
	import { posts } from '../../data/BlogPosts.js';
</script>

<div id="content-wrapper">
	<div id="section-description">
		<p>
			There’s something motivational about keeping a public-facing blog.
			Maybe it’s just the assurance that comes with proving that I’ve been
			doing something while I’ve been dating my computer in the era of
			Covid.
		</p>
	</div>
	<div id="section">
		{#each posts as post, i}
			<BlogBlock on:blogItemPress {post} {i} />
		{/each}
	</div>
</div>

<style>
	#content-wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 40px 0;
		width: 90%;
	}

	#section-description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 1100px;
		margin-bottom: 4rem;
	}

	#section {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		max-width: 1100px;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
	}
</style>
