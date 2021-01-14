<script>
	import GitHub from '../components/icons/GitHub.svelte';
	import LinkedIn from '../components/icons/LinkedIn.svelte';
</script>

<div id="footer-wrapper">
	<div id="content">
		<GitHub />
		<LinkedIn />
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: white;
	}

	#footer-wrapper {
		display: flex;
        height: 10vh;
		width: 100%;
		justify-content: flex-end;
	}

	#content {
        width: 200px;
		display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
	}
</style>
