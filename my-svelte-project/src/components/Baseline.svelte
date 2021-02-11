<script>
	import BaselineWork from './baselinePartials/BaselineWork.svelte';
	import BaselineBlog from './baselinePartials/BaselineBlog.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let page;
	export let currentFocusItem;
	export let subPage;
	export let windowHeightPercent;
	export let layout;

	let graphicDesignColor = '#F4FFF4';
	let webDevelopmentColor = '#F4FFF4';
	let photographyColor = '#F4FFF4';

	$: titleSize = windowHeightPercent * 4.5;

	let clearSelection = () => {
		graphicDesignColor = '#F4FFF4';
		webDevelopmentColor = '#F4FFF4';
		photographyColor = '#F4FFF4';
	};

	$: if (subPage === 'Graphic Design') {
		clearSelection();
		graphicDesignColor = '#e0a43e';
	} else if (subPage === 'Web Development') {
		clearSelection();
		webDevelopmentColor = '#e0a43e';
	} else if (subPage === 'Photography') {
		clearSelection();
		photographyColor = '#e0a43e';
	}
</script>

<div id="wrapper">
	{#if page === 'Welcome'}
		<div style="width: 100%" class="baseline" />
	{:else if page === 'About'}
		<div style="width: 100%" class="baseline" />
	{:else if page === 'Work'}
		{#if layout === 'desktop'}
			<BaselineWork
				on:workNavPress
				on:closeItem
				{currentFocusItem}
				{titleSize}
				{graphicDesignColor}
				{webDevelopmentColor}
				{photographyColor}
			/>
		{:else if layout === 'mobile'}
			<div style="width: 100%" class="baseline" />
		{/if}
	{:else if page === 'Blog'}
		<BaselineBlog on:closeItem {currentFocusItem} {titleSize} />
	{:else if page === 'Contact'}
		<div style="width: 100%" class="baseline" />
	{/if}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#wrapper {
		display: flex;
		width: 100%;
		align-self: flex-end;
	}

	.baseline {
		height: 1rem;
		background-color: white;
		align-self: flex-end;
		vertical-align: bottom;
	}
</style>
