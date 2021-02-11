<script>
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	const dispatch = createEventDispatcher();
	export let page;

	let aboutColor,
		workColor,
		blogColor,
		contactColor = '#F4FFF4';

	let clearColor = () => {
		aboutColor = '#F4FFF4';
		workColor = '#F4FFF4';
		blogColor = '#F4FFF4';
		contactColor = '#F4FFF4';
	};

	$: if (page === 'About') {
		clearColor();
		aboutColor = '#e0a43e';
	} else if (page === 'Work') {
		clearColor();
		workColor = '#e0a43e';
	} else if (page === 'Blog') {
		clearColor();
		blogColor = '#e0a43e';
	} else if (page === 'Contact') {
		clearColor();
		contactColor = '#e0a43e';
	} else if (page === 'Welcome') {
		clearColor();
	}
</script>

<nav id="desktop-nav">
	<ul
		in:fly={{ y: -50, duration: 500 }}
		out:fly={{ y: -50, duration: 500 }}
		on:introstart={() => dispatch('transitionStart')}
		on:introend={() => dispatch('transitionEnd')}
		on:outrostart={() => dispatch('transitionStart')}
		on:outroend={() => dispatch('transitionEnd')}
	>
		<li
			style="color: {aboutColor}"
			on:click={() =>
				dispatch('navpress', {
					text: 'About',
				})}
		>
			About
		</li>
		<li
			style="color: {workColor}"
			on:click={() =>
				dispatch('navpress', {
					text: 'Work',
				})}
		>
			Work
		</li>
		<li
			style="color: {blogColor}"
			on:click={() =>
				dispatch('navpress', {
					text: 'Blog',
				})}
		>
			Blog
		</li>
		<li
			style="color: {contactColor}"
			on:click={() =>
				dispatch('navpress', {
					text: 'Contact',
				})}
		>
			Contact
		</li>
	</ul>
</nav>

<style>
	* {
		display: flex;
	}

	#desktop-nav {
		position: absolute;
		right: 0;
		top: 0;
		justify-content: flex-end;
		align-items: center;
		width: 500px;
		height: 100%;
	}

	ul {
		width: 100%;
		height: 50%;
		justify-content: space-between;
		list-style: none;
	}

	li {
		align-self: center;
		font-family: 'Lato', sans-serif;
		font-weight: 700;
		font-size: 2rem;
	}

	li:hover {
		color: #e0a43e !important;
		cursor: default;
		border-bottom: 3px solid #e0a43e;
		transition: 100ms;
	}
</style>
