<script>
	import Navlist from './Navlist.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let page;
	export let y;
</script>

<div id="outer-wrapper">
	<div id="inner-wrapper">
		<div id="logo">
			<img
				on:click={() => dispatch('homepress')}
				src="./images/Logo.svg"
				alt="logo"
			/>
		</div>
		{#if y === 0}
			<Navlist on:navpress={() => dispatch('navpress')} {page}/>
		{:else}
			<div />
		{/if}
	</div>
</div>

<style>
	* {
		display: flex;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#outer-wrapper {
		width: 92vw;
		z-index: 20;
		position: fixed;
		top: 0px;
		left: 0px;
		align-content: center;
		justify-self: center;
		margin-top: 3vw;
		margin-left: 4vw;
	}

	#inner-wrapper {
		width: 100%;
		height: 100%;
		justify-content: space-between;
		align-content: center;
	}

	#logo img {
		width: 80px;
	}

	#logo img:hover {
		cursor: pointer;
	}
</style>
