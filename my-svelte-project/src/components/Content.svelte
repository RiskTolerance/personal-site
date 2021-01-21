<script>
	import WelcomeContent from './pages/WelcomeContent.svelte';
	import AboutContent from './pages/AboutContent.svelte';
	import WorkContent from './pages/WorkContent.svelte';
	import BlogContent from './pages/BlogContent.svelte';
	import ContactContent from './pages/ContactContent.svelte';
	import WorkPage from './pages/WorkPage.svelte';
	import BlogPage from './pages/BlogPage.svelte';
	export let page;
	export let subPage;
	export let clipRatio;
	export let currentFocusItem;
</script>

<div id="outer-content-wrapper">
	<div style="margin-left: {clipRatio + 3}%" id="inner-content-wrapper">
		{#if page === 'Welcome'}
			<WelcomeContent />
		{:else if page === 'About'}
			<AboutContent />
		{:else if page === 'Work'}
			{#if currentFocusItem === ''}
				<WorkContent
					on:workItemPress
					{subPage}
				/>
			{:else}
				<WorkPage {currentFocusItem} {subPage} />
			{/if}
		{:else if page === 'Blog'}
			{#if currentFocusItem === ''}
				<BlogContent
					on:blogItemPress
				/>
			{:else}
				<BlogPage {currentFocusItem} />
			{/if}
		{:else if page === 'Contact'}
			<ContactContent />
		{/if}
	</div>
</div>

<style>
	#outer-content-wrapper {
		display: flex;
		min-height: 60vh;
		width: 100%;
	}

	#inner-content-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: 5vh;
		width: 100%;
		height: 100%;
		justify-content: center;
	}
</style>
