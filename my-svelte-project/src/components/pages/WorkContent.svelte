<script>
	import WorkBlock from '../WorkBlock.svelte';
	import { fly } from 'svelte/transition';
	import { graphicDesignProjects } from '../../data/GraphicDesignWork.js';
	import { webDevProjects } from '../../data/WebDevWork.js';
	import { photographyProjects } from '../../data/PhotographyWork.js';
	import { createEventDispatcher } from 'svelte';
	export let subPage;
	const dispatch = createEventDispatcher();
</script>

<div id="work-block-wrapper">
	<div id="section-description">
		{#if subPage === 'Graphic Design'}
			<h1>Graphic Design Work</h1>
			<p id="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique libero accusamus ea quidem sunt eum facere saepe?
				Dolorem nam fugit, libero neque omnis voluptas optio quaerat
				nisi deleniti! Provident, eos?
			</p>
		{:else if subPage === 'Web Development'}
			<h1>Web Dev Work</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique libero accusamus ea quidem sunt eum facere saepe?
				Dolorem nam fugit, libero neque omnis voluptas optio quaerat
				nisi deleniti! Provident, eos?
			</p>
		{:else if subPage === 'Photography'}
			<h1>Photography Work</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique libero accusamus ea quidem sunt eum facere saepe?
				Dolorem nam fugit, libero neque omnis voluptas optio quaerat
				nisi deleniti! Provident, eos?
			</p>
		{/if}
	</div>

	{#if subPage === 'Graphic Design'}
		{#each graphicDesignProjects as project, i}
			<WorkBlock
				on:workItemPress={() => dispatch('workItemPress')}
				{project}
				{i}
			/>
		{/each}
	{:else if subPage === 'Web Development'}
		{#each webDevProjects as project, i}
			<WorkBlock
				on:workItemPress={() => dispatch('workItemPress')}
				{project}
				{i}
			/>
		{/each}
	{:else if subPage === 'Photography'}
		{#each photographyProjects as project, i}
			<WorkBlock
				on:workItemPress={() => dispatch('workItemPress')}
				{project}
				{i}
			/>
		{/each}
	{/if}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#work-block-wrapper {
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
