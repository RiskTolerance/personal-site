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

<ul in:fly={{ y: -50, duration: 500 }} out:fly={{ y: -50, duration: 500 }}>
	<li style="color: {aboutColor}" on:click={() => dispatch('navpress', {
		text: 'About'
	})}>
		About
	</li>
	<li style="color: {workColor}" on:click={() => dispatch('navpress', {
		text: 'Work'
	})}>
		Work
	</li>
	<li style="color: {blogColor}" on:click={() => dispatch('navpress', {
		text: 'Blog'
	})}>
		Blog
	</li>
	<li style="color: {contactColor}" on:click={() => dispatch('navpress', {
		text: 'Contact'
	})}>
		Contact
	</li>
</ul>

<style>
	* {
		display: flex;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	ul {
		height: 100%;
		width: 100%;
		justify-content: space-between;
		list-style: none;
	}

	li {
		height: 40%;
		align-self: center;
		font-family: 'Lato', sans-serif;
		font-weight: 700;
		font-size: 1.5rem;
	}

	li:hover {
		color: #e0a43e !important;
		cursor: pointer;
		border-bottom: 3px solid #e0a43e;
	}
</style>
