<script>
	import { dimentions } from '../data/ColoredBoxDimentions';
	export let tweenHeight;
	export let tweenWidth;
	export let tweenLeft;
	export let tweenTop;
</script>

<div
	style="width:{tweenWidth}px; height:{tweenHeight}px; top:{tweenTop}px; left: {tweenLeft}px;"
	id="color-box"
/>

<style>
	#color-box {
		background-color: #e0a926;
		position: fixed;
		z-index: 10;
		filter: opacity(60%);
	}
</style>
