<script>
	import GitHub from '../components/icons/GitHub.svelte';
	import LinkedIn from '../components/icons/LinkedIn.svelte';
	import SocialArrow from '../components/icons/SocialArrow.svelte';
	import { fade } from 'svelte/transition';
	export let page = '';
</script>

<div id="footer-wrapper">
	<div id="content">
		{#if page === 'Contact'}
			<div id="social-arrow" transition:fade={{ duration: 250 }}>
				<SocialArrow />
			</div>
		{/if}
		<div id="social-links">
			<GitHub />
			<LinkedIn />
		</div>
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
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	#social-links {
		width: 200px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	#social-arrow {
		position: relative;
		left: -140px;
		top: 0px;
	}
</style>
