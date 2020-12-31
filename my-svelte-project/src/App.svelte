<script>
	import Navbar from "./components/Navbar.svelte";
	import PageHeader from "./components/PageHeader.svelte";
	import Background from "./components/Background.svelte";
	import Content from "./components/Content.svelte";
	import Footer from "./components/Footer.svelte";

	// data
	let title = "Welcome!";
	let page = "Welcome";
	let subPage = "Graphic Design";
	let colors = { dark: "#272727", orange: "#E0A926", light: "#F4FFF4" };
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

	let handleSubNavigation = (event) => {
		subPage = event.explicitOriginalTarget.innerHTML
		//console.log(subPage);
	};

	let handleMouseMove = (event) => {
		m.x = event.clientX;
		m.y = event.clientY;
		console.log(y);
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
	on:subnavpress={handleSubNavigation}
	on:homepress={() => {
		page = 'Welcome';
		title = 'Welcome!';
		clipRatio = 40;
		leftHeaderMargin = '25';
	}}
	{colors}
	{y} />

<main on:mousemove={handleMouseMove}>
	<Background {clipRatio} {colors} />
	<PageHeader
		{title}
		{leftHeaderMargin}
		{page}
		{colors}
		{subPage}
		on:subpress={handleSubNavigation} />
	<Content {page} {subPage} {clipRatio} {colors} />
	<Footer {colors} />
</main>

<!-- fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
	rel="stylesheet" />
<link rel="stylesheet" href="https://use.typekit.net/bar8qrt.css" />
