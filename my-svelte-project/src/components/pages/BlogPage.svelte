<script>
	export let currentFocusItem;
	import ANewSite from '../../data/blog_text/ANewSite.svx'
	import SvelteFirstImpressions from '../../data/blog_text/SvelteFirstImpressions.svx'
</script>

<div id="wrapper">
	<div class="date">{currentFocusItem.date}</div>
	<div class="text">
		{#if currentFocusItem.titleUrl === 'ANewSite'}
			<ANewSite />
		{:else if currentFocusItem.titleUrl === 'SvelteFirstImpressions'}
			<SvelteFirstImpressions />
		{/if}
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#wrapper {
		margin: 0 10% 40px 10%;
	}

	.date {
		font-family: 'lato', sans-serif;
		font-weight: 300;
		font-size: 1.5rem;
	}

	.text {
		font-family: 'lato', sans-serif;
		font-weight: 500;
		font-size: 1.5rem;
		margin-top: 40px;
		line-height: 1.2;
	}
</style>
