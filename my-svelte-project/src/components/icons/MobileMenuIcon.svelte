<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	let defaultColor = '#e3a73e';
	let hoverColor = '#F4FFF4';
	let color = '#e3a73e';
	let handleMouseOver = () => {
		color = hoverColor;
	};
	let handleMouseOut = () => {
		color = defaultColor;
	};
</script>

<nav id="mobile-nav">
	<div
		id="menu-btn"
		on:mouseover={handleMouseOver}
		on:mouseout={handleMouseOut}
		in:fly={{ y: -50, duration: 500 }}
		out:fly={{ y: -50, duration: 500 }}
		on:introstart={() => dispatch('transitionStart')}
		on:introend={() => dispatch('transitionEnd')}
		on:outrostart={() => dispatch('transitionStart')}
		on:outroend={() => dispatch('transitionEnd')}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="6.5rem"
			height="35"
			viewBox="0 0 85.107 35.107"
		>
			<g fill={color}>
				<path
					d="M65.554 5.107h-63a2.554 2.554 0 010-5.107h63a2.554 2.554 0 010 5.107zM82.554 5.107h-4a2.554 2.554 0 010-5.107h4a2.554 2.554 0 010 5.107zM65.554 35.107h-63a2.554 2.554 0 010-5.107h63a2.554 2.554 0 010 5.107zM82.554 35.107h-4a2.554 2.554 0 010-5.107h4a2.554 2.554 0 010 5.107z"
				/>
				<g>
					<path
						d="M82.554 20.107h-63a2.554 2.554 0 010-5.107h63a2.554 2.554 0 010 5.107zM6.554 20.107h-4a2.554 2.554 0 010-5.107h4a2.554 2.554 0 110 5.107z"
					/>
				</g>
			</g>
		</svg>
	</div>
</nav>

<style>
	#mobile-nav {
        position: absolute;
        right: 0;
		top: 0;
		display: flex;
		width: 80%;
		height: 100%;
		justify-content: flex-end;
		align-items: center;
	}

	#menu-btn {
		height: 36px;
		width: 86px;
	}
</style>
