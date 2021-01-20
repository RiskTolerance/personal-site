<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	const dispatch = createEventDispatcher();
	export let page;
	let pageList = ['About', 'Work', 'Blog', 'Contact'];

	let clearNav = () => {
		pageList.forEach((x) => {
			document.getElementById(x).style.color = '#F4FFF4';
			document.getElementById(x).style.borderBottom = 'none';
		});
	};

	let setSelectedColor = (x) => {
		document.getElementById(x).style.color = '#e0a43e';
		document.getElementById(x).style.borderBottom = '3px solid #e0a43e';
	};

	let homePress = function () {
		console.log('Home :)');
	};

	onMount(async () => {
		if (page === 'Welcome') {
			clearNav();
		} else {
			setSelectedColor(page);
		}
		homePress = function () {
			clearNav();
		};
	});

	let updateSelection = (buttonVal) => {
		clearNav();
		setSelectedColor(buttonVal);
	};

	$: if (page === 'Welcome') {
		homePress();
	}
</script>

	<ul in:fly="{{ y: -50, duration: 500 }}" out:fly="{{ y: -50, duration: 500 }}">
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
