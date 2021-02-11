<script>
    import Close from '../icons/Close.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let currentFocusItem;
    export let titleSize;
    export let graphicDesignColor;
    export let webDevelopmentColor;
    export let photographyColor;
</script>

{#if currentFocusItem === ''}
	<div style="width: 40px" class="baseline" />
	<h3
		style="color: {graphicDesignColor}"
		on:click={() =>
			dispatch('workNavPress', {
				text: 'Graphic Design',
			})}
	>
		Graphic Design
	</h3>
	<div style="width: 40px" class="baseline" />
	<h3
		style="color: {webDevelopmentColor}"
		id="web-development"
		on:click={() =>
			dispatch('workNavPress', {
				text: 'Web Development',
			})}
	>
		Web Development
	</h3>
	<div style="width: 40px" class="baseline" />
	<h3
		style="color: {photographyColor}"
		id="photography"
		on:click={() =>
			dispatch('workNavPress', {
				text: 'Photography',
			})}
	>
		Photography
	</h3>
	<div style="width: 50%;" class="baseline" />
{:else}
	<div id="subtitle">
		<div style="width: 30%; background-color: #e0a43e;" class="baseline" />
		<h3
			style="color: #e0a43e; width: 40%; font-size: {titleSize}rem; font-family: essonnes-headline, serif; line-height: 33px;"
		>
			{currentFocusItem.title}
		</h3>
		<div style="width: 30%; background-color: #e0a43e;" class="baseline" />
	</div>
	<Close on:closeItem={() => dispatch('closeItem')} />
{/if}


<style>
	* {
		margin: 0;
		padding: 0;
	}
    
    .baseline {
		height: 1rem;
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
		font-size: 2rem;
		min-width: 220px;
		color: '#F4FFF4';
	}

	h3:hover {
		color: #e0a43e !important;
		cursor: default;
	}
</style>
