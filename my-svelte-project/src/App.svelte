<script>
	//lazy load images 
	import LazyLoad from 'vanilla-lazyload';
	if (!document.lazyLoadInstance) {
		document.lazyLoadInstance = new LazyLoad({
			elements_selector: '.lazy',
		});
	}

	//components
	import Navbar from './components/Navbar.svelte';
	import PageHeader from './components/PageHeader.svelte';
	import Background from './components/Background.svelte';
	import Content from './components/Content.svelte';
	import Footer from './components/Footer.svelte';

	// data
	import { graphicDesignProjects } from './data/GraphicDesignWork.js';
	import { webDevProjects } from './data/WebDevWork.js';
	import { photographyProjects } from './data/PhotographyWork.js';
	import { posts } from './data/BlogPosts.js';

	//variables
	let title = 'Welcome!';
	let page = 'Welcome';
	let subPage = 'Graphic Design';
	let currentFocusItem = '';
	let leftHeaderMargin = '100px';
	// clip ratio default: 40
	$: clipRatio = 40;
	let m = { x: 0, y: 0 };
	let y;

	//functions
	let handleNavigation = (event) => {
		//clip ratio default: 25
		clipRatio = 15;
		currentFocusItem = '';
		page = event.detail.text;
		title = event.detail.text;
	};

	let handleWorkNavigation = (event) => {
		subPage = event.detail.text;
	};

	let handleBlogItemNavigation = (event) => {
		currentFocusItem = posts[event.detail.text];
	};

	let handleWorkItemNavigation = (event) => {
		if (subPage === 'Graphic Design') {
			currentFocusItem = graphicDesignProjects[event.detail.text];
		} else if (subPage === 'Web Development') {
			currentFocusItem = webDevProjects[event.detail.text];
		} else if (subPage === 'Photography') {
			currentFocusItem = photographyProjects[event.detail.text];
		}
	};

	let handleMouseMove = (event) => {
		m.x = event.clientX;
		m.y = event.clientY;
	};

	let closeItem = () => {
		currentFocusItem = '';
	};
</script>

<svelte:window bind:scrollY={y} />

<Navbar
	on:navpress={handleNavigation}
	on:homepress={() => {
		page = 'Welcome';
		title = 'Welcome!';
		clipRatio = 45;
		leftHeaderMargin = '100px';
	}}
	{y}
	{page}
/>

<main on:mousemove={handleMouseMove}>
	<Background {clipRatio} />
	<PageHeader
		{title}
		{leftHeaderMargin}
		{page}
		{subPage}
		{currentFocusItem}
		on:workNavPress={handleWorkNavigation}
		on:closeItem={closeItem}
	/>
	<Content
		on:workItemPress={handleWorkItemNavigation}
		on:blogItemPress={handleBlogItemNavigation}
		{page}
		{subPage}
		{currentFocusItem}
		{clipRatio}
	/>
	<Footer {page} />
</main>

<!-- links -->
<link as="image" href="./images/backgrounds/2.webp" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
	rel="stylesheet"
/>
<link rel="stylesheet" href="https://use.typekit.net/bar8qrt.css" />

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
		width: 100%;
		height: 100%;
		background-color: #272727;
	}

	main {
		width: 92vw;
		margin: 0 4vw 0;
		flex-direction: column;
		height: 100%;
	}
</style>
