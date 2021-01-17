<script>
	export let post;
	export let i;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div
	class="blog-block"
	style="background-image: url(/images/blogs/{post.titleUrl}/{post.thumbnail});"
>
	<div
		id="click"
		data-item={i}
		data-link={post.titleUrl}
		on:click={() => dispatch('blogItemPress')}
	/>
	<div id="info-container">
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
		width: 40%;
		height: 350px;
		margin: 3%;
		background-repeat: no-repeat;
		background-size: cover;
	}

	#info-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 10px;
		height: 25%;
		width: 100%;
		background-color: #e0a43e;
		clip-path: polygon(0 0, 100% 30%, 100% 100%, 0% 100%);
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
