<script>
	import { dimentions } from '../data/ColoredBoxDimentions';
	import ColoredBox from './ColoredBox.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const tweenHeight = tweened(dimentions.height, {
		duration: 4000,
		easing: cubicOut,
	});
	const tweenWidth = tweened(dimentions.width, {
		duration: 4000,
		easing: cubicOut,
	});
	const tweenLeft = tweened(dimentions.left, {
		duration: 4000,
		easing: cubicOut,
	});
	const tweenTop = tweened(dimentions.top, {
		duration: 4000,
		easing: cubicOut,
	});

	setInterval(() => {
		tweenHeight.set(dimentions.height);
		tweenWidth.set(dimentions.width);
		tweenLeft.set(dimentions.left);
		tweenTop.set(dimentions.top);
	}, 500);
</script>

<ColoredBox
	tweenHeight={$tweenHeight}
	tweenWidth={$tweenWidth}
	tweenLeft={$tweenLeft}
	tweenTop={$tweenTop}
/>
