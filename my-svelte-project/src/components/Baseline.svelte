<script>
	import Close from '../components/icons/Close.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let page;
	export let currentFocusItem;
</script>

<div id="wrapper">
	{#if page === 'Welcome'}
		<div style="width: 100%" class="baseline" />
	{:else if page === 'About'}
		<div style="width: 100%" class="baseline" />
	{:else if page === 'Work'}
		{#if currentFocusItem === ''}
			<div style="width: 40px" class="baseline" />
			<h3 on:click={() => dispatch('workNavPress')}>Graphic Design</h3>
			<div style="width: 40px" class="baseline" />
			<h3 on:click={() => dispatch('workNavPress')}>Web Development</h3>
			<div style="width: 40px" class="baseline" />
			<h3 on:click={() => dispatch('workNavPress')}>Photography</h3>
			<div style="width: 50%;" class="baseline" />
		{:else}
			<div id="subtitle">
				<div
					style="width: 30%; background-color: #e0a43e;"
					class="baseline"
				/>
				<h3
					style="color: #e0a43e; width: 40%; font-size: 2.5rem; font-family: essonnes-headline, serif; line-height: 33px;"
				>
					{currentFocusItem.title}
				</h3>
				<div
					style="width: 30%; background-color: #e0a43e;"
					class="baseline"
				/>
			</div>

			<Close on:closeItem={() => dispatch('closeItem')} />
		{/if}
	{:else if page === 'Blog'}
		{#if currentFocusItem === ''}
			<div style="width: 40px" class="baseline" />
			<h3>Thoughts and things.</h3>
			<div style="width: 100%" class="baseline" />
		{:else}
			<div id="subtitle">
				<div
					style="width: 30%; background-color: #e0a43e;"
					class="baseline"
				/>
				<h3
					style="color: #e0a43e; width: 40%; font-size: 2.5rem; font-family: essonnes-headline, serif; line-height: 33px;"
				>
					{currentFocusItem.title}
				</h3>
				<div
					style="width: 30%; background-color: #e0a43e;"
					class="baseline"
				/>
			</div>
			<Close on:closeItem={() => dispatch('closeItem')} />
		{/if}
	{:else if page === 'Contact'}
		<div style="width: 100%" class="baseline" />
	{/if}
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#wrapper {
		display: flex;
		width: 100%;
		align-self: flex-end;
	}

	.baseline {
		height: 10px;
		background-color: white;
		align-self: flex-end;
		vertical-align: bottom;
	}

	#subtitle {
		display: flex;
		align-self: flex-end;
		width: 100%;
		height: 50%;
	}

	h3 {
		text-align: center;
		line-height: 17px;
		font-family: 'Lato', sans-serif;
		font-size: 1.4rem;
		min-width: 220px;
	}

	h3:hover {
		color: #e0a43e;
		cursor: pointer;
	}
</style>
