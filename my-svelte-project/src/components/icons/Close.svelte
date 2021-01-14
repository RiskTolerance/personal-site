<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let fill = '#e3a73e';
	let handleMouseOver = () => {
		fill = '#F4FFF4';
	};
	let handleMouseOut = () => {
		fill = '#e3a73e';
	};
</script>

<div
	id="closeBtn"
	on:click={() => dispatch('closeItem')}
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="43.51"
		height="43.51"
		viewBox="0 0 43.51 43.51"
	>
		<path
			{fill}
			d="M43.51 6.218L37.292 0 21.755 15.537 6.218 0 0 6.218 15.537 21.755 0 37.292 6.218 43.51 21.755 27.973 37.292 43.51 43.51 37.292 27.973 21.755 43.51 6.218z"
		/>
	</svg>
</div>

<style>
	#closeBtn {
		scale: 0.8;
		margin-left: 2rem;
		margin-right: 2rem;
		cursor: pointer;
	}
</style>
