<script>
	export let currentFocusItem;
	import marked from 'marked';
</script>

<div id="wrapper">
	<div class="date">{currentFocusItem.date}</div>
	<div class="text">
		{@html marked(currentFocusItem.text)}
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		color: white;
	}

	#wrapper {
		margin: 0 5% 0 5%;
	}

	.date {
		font-family: 'lato', sans-serif;
		font-weight: 700;
		font-size: 1.3rem;
	}

	.text {
		font-family: 'lato', sans-serif;
		font-weight: 700;
		font-size: 1.3rem;
		margin-top: 40px;
	}
</style>
