<script>
	import WorkBlock from '../WorkBlock.svelte';
	import { graphicDesignProjects } from '../../data/GraphicDesignWork.js';
	import { webDevProjects } from '../../data/WebDevWork.js';
	import { photographyProjects } from '../../data/PhotographyWork.js';
	export let subPage;
</script>

<div id="work-block-wrapper">
	<div id="section-description">
		{#if subPage === 'Graphic Design'}
			<h1>Graphic Design Work</h1>
			<p id="description">
				Illustrator has probably become the most active application on
				my desktop. I usually have something that I’m designing, be it a
				website or a logo. This category may stay somewhat small
				relative to the web development category, as most of the design
				work that I’m doing these days has to do with web development.
				But here are the projects that stand alone.
			</p>
		{:else if subPage === 'Web Development'}
			<h1>Web Development Work</h1>
			<p>
				Before I knew anything about web development (or an ounce of
				JavaScript) I was designing web pages. Because my process for
				web development begins with the design process, I’ve decided to
				include site designs in this category which might otherwise
				belong in the graphic design section. This might change in the
				future, but for now this section includes anything I’ve done
				that relates to full stack web development + design.
			</p>
		{:else if subPage === 'Photography'}
			<h1>Photography Work</h1>
			<p>
				I love photography. Someday I’m going to have my own photo
				development space and I’ll become an analog hipster, but till
				that day I guess I’ll stick to Lightroom and Photoshop.
			</p>
		{/if}
	</div>

	{#if subPage === 'Graphic Design'}
		{#each graphicDesignProjects as project, i}
			<WorkBlock
				on:workItemPress
				{project}
				{i}
			/>
		{/each}
	{:else if subPage === 'Web Development'}
		{#each webDevProjects as project, i}
			<WorkBlock
				on:workItemPress
				{project}
				{i}
			/>
		{/each}
	{:else if subPage === 'Photography'}
		{#each photographyProjects as project, i}
			<WorkBlock
				on:workItemPress
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
