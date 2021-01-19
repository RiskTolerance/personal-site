<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let page;
	let pageList = ['About', 'Work', 'Blog', 'Contact'];

	let clearNav = () => {
		pageList.forEach((x) => {
			document.getElementById(x).style.color = '#F4FFF4';
			document.getElementById(x).style.borderBottom = 'none';
		});
	};

	let homePress = function () {
		console.log('Home :)');
	};

	onMount(async () => {
		if (page === 'Welcome') {
			clearNav();
		} else {
			document.getElementById(page).style.color = '#e0a43e';
			document.getElementById(page).style.borderBottom =
				'3px solid #e0a43e';
		}
		homePress = function () {
			clearNav();
		};
	});

	let updateSelection = (buttonVal) => {
		clearNav();
		document.getElementById(buttonVal).style.color = '#e0a43e';
		document.getElementById(buttonVal).style.borderBottom =
			'3px solid #e0a43e';
	};

	$: if (page === 'Welcome') {
		homePress();
	}
</script>

<nav>
	<ul>
		<li
			id="About"
			data-menu-item="About"
			on:click={() => {
				dispatch('navpress');
				updateSelection('About');
			}}
		>About</li>
		<li
			id="Work"
			data-menu-item="Work"
			on:click={() => {
				dispatch('navpress');
				updateSelection('Work');
			}}
		>Work</li>
		<li
			id="Blog"
			data-menu-item="Blog"
			on:click={() => {
				dispatch('navpress');
				updateSelection('Blog');
			}}
		>Blog</li>
		<li
			id="Contact"
			data-menu-item="Contact"
			on:click={() => {
				dispatch('navpress');
				updateSelection('Contact');
			}}
		>Contact</li>
	</ul>
</nav>

<style>
	* {
		display: flex;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	nav {
		width: 33%;
		align-items: center;
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
		color: white;
		font-family: 'Lato', sans-serif;
		font-weight: 700;
		font-size: 1.5rem;
	}

	/* .selected {
		color: #e0a43e;
		border-bottom: 3px solid #e0a43e;
	} */

	li:hover {
		color: #e0a43e;
		cursor: pointer;
		border-bottom: 3px solid #e0a43e;
	}
</style>
