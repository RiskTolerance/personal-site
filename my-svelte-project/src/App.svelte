<script>
	//node

	//components
	import Navbar from "./components/Navbar.svelte";
	import PageHeader from "./components/PageHeader.svelte";
	import Background from "./components/Background.svelte";
	import Content from "./components/Content.svelte";
	import Footer from "./components/Footer.svelte";

	// data
	import { graphicDesignProjects } from "./data/GraphicDesignWork.js";
	import { webDevProjects } from "./data/WebDevWork.js";
	import { photographyProjects } from "./data/PhotographyWork.js";
	import { posts } from "./data/BlogPosts.js";

	//variables
	let title = "Welcome!";
	let page = "Welcome";
	let subPage = "Graphic Design";
	let currentFocusIndex = "";
	let currentFocusItem = "";
	// let colors = { dark: "#272727", orange: "#E0A926", light: "#F4FFF4" };
	let leftHeaderMargin = "25";
	let clipRatio = 40;
	let m = { x: 0, y: 0 };
	let y;

	//functions
	let handleNavigation = (event) => {
		clipRatio = 25;
		leftHeaderMargin = "5";
		page = event.explicitOriginalTarget.dataset.menuItem;
		title = event.explicitOriginalTarget.innerHTML;
	};

	let handleWorkNavigation = (event) => {
		subPage = event.explicitOriginalTarget.innerHTML;
	};

	let handleBlogItemNavigation = (event) => {
		currentFocusIndex =
			event.explicitOriginalTarget.attributes[1].nodeValue;
		currentFocusItem = posts[currentFocusIndex];
	};

	let handleWorkItemNavigation = (event) => {
		currentFocusIndex =
			event.explicitOriginalTarget.attributes[1].nodeValue;
		if (subPage === "Graphic Design") {
			currentFocusItem = graphicDesignProjects[currentFocusIndex];
		} else if (subPage === "Web Development") {
			currentFocusItem = webDevProjects[currentFocusIndex];
		} else if (subPage === "Photography") {
			currentFocusItem = photographyProjects[currentFocusIndex];
		}
	};

	let handleMouseMove = (event) => {
		m.x = event.clientX;
		m.y = event.clientY;
		console.log(y);
	};

	let closeItem = () => {
		currentFocusIndex = "";
		currentFocusItem = "";
	};
</script>

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
		margin-left: 4vw;
		flex-direction: column;
		height: 100%;
	}
</style>

<svelte:window bind:scrollY={y} />

<Navbar
	on:navpress={handleNavigation}
	on:navpress={closeItem}
	on:workNavPress={handleWorkNavigation}
	on:homepress={() => {
		page = 'Welcome';
		title = 'Welcome!';
		clipRatio = 40;
		leftHeaderMargin = '25';
	}}
	{y} {page} />

<main on:mousemove={handleMouseMove}>
	<Background {clipRatio} />
	<PageHeader
		{title}
		{leftHeaderMargin}
		{page}
		{subPage}
		{currentFocusItem}
		on:workNavPress={handleWorkNavigation}
		on:closeItem={closeItem} />
	<Content
		on:workItemPress={handleWorkItemNavigation}
		on:blogItemPress={handleBlogItemNavigation}
		{page}
		{subPage}
		{currentFocusItem}
		{clipRatio} />
	<Footer {page} />
</main>

<!-- fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
	rel="stylesheet" />
<link rel="stylesheet" href="https://use.typekit.net/bar8qrt.css" />
