<script>
	import Navlist from './Navlist.svelte';
	import MobileMenuIcon from './icons/MobileMenuIcon.svelte';
	import Logo from './icons/Logo.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let page;
	export let y;
	export let layout;

	let mobileTransition = false;
	let desktopTransition = false;
</script>

<div id="outer-wrapper">
	<div id="inner-wrapper">
		<div id="logo">
			<Logo on:homepress />
		</div>
		<div id="nav-container">
			{#if layout === 'desktop' && mobileTransition === false}
				{#if y === 0}
					<Navlist
						on:navpress
						on:transitionStart={() => {
							desktopTransition = true;
						}}
						on:transitionEnd={() => {
							desktopTransition = false;
						}}
						{page}
					/>
				{:else}
					<div />
				{/if}
			{:else if layout === 'mobile' && desktopTransition === false}
				{#if y === 0}
					<MobileMenuIcon
						on:transitionStart={() => {
							mobileTransition = true;
						}}
						on:transitionEnd={() => {
							mobileTransition = false;
						}}
					/>
				{:else}
					<div />
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	* {
		display: flex;
	}

	#outer-wrapper {
		width: 92vw;
		z-index: 0;
		position: fixed;
		top: 0px;
		left: 0px;
		align-content: center;
		margin-top: 4rem;
		margin-left: 4vw;
	}

	#inner-wrapper {
		width: 100%;
		height: 100%;
		justify-content: space-between;
		align-content: center;
	}

	#nav-container {
		width: 90%;
	}
</style>
