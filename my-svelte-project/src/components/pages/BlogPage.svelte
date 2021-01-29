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

	#wrapper {
		width: 90%;
		margin-bottom: 4rem;
	}

	.date {
		font-family: 'lato', sans-serif;
		font-weight: 300;
		font-size: 2rem;
	}

	.text {
		font-family: 'lato', sans-serif;
		font-weight: 500;
		font-size: 2rem;
		margin-top: 4rem;
		line-height: 1.2;
	}
</style>
