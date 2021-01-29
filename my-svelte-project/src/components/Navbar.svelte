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
		<nav>
			{#if y === 0}
			<Navlist on:navpress {page}/>
		{:else}
			<div />
		{/if}
		</nav>
		
	</div>
</div>

<style>
	* {
		display: flex;
	}

	nav {
		width: 33%;
		align-items: center;
	}

	#outer-wrapper {
		width: 92vw;
		z-index: 0;
		position: fixed;
		top: 0px;
		left: 0px;
		align-content: center;
		justify-self: center;
		margin-top: 4rem;
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
