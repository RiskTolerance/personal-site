<script>
	import { fade } from 'svelte/transition';

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	let src = '/images/portrait.webp';
</script>

<div id="content-wrapper">
	<div id="portrait-container">
		{#await preload(src) then _}
			<img
				id="portrait"
				{src}
				alt="Portrait of Isaac Druin"
				in:fade={{ duration: 100 }}
			/>
		{/await}
	</div>
	<div id="text-container">
		<p>
			<strong
				style="color: #e0a43e; font-family: 'Lato', sans-serif; font-weight: 900; font-size: 2rem;"
			>
				Hello!
			</strong>
			<br />
			<br />
			My name is Isaac and I hail from the frozen wasteland of South Dakota.
			I'm a graphic designer interested in web development, tradtional media,
			3D modeling, and photography.
			<br />
			<br />
			My undergraduate degree is in graphic design with a minor in art history.
			In 2020 (before all the covid nonsense came into play) I spent three
			months at Ironhack, a web development bootcamp in Miami.
			<br />
			<br />
			Some other hobbies of mine include gaming and spending time outdoors
			(camping, snowboarding).
		</p>
	</div>
</div>

<style type="text/css">
	#content-wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		margin: 4rem 0 8rem;
		justify-content: center;
	}

	#portrait-container {
		display: block;
		height: 400px;
		width: 285.5px;
		background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQyIDE2MDAiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiMzOTM5MzkiIGQ9Ik0wIDBoMTE0M3YxNjAwSDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09Im1hdHJpeCg2LjI1IDAgMCA2LjI1IDMuMSAzLjEpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSBmaWxsPSIjZTllOGU5IiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDE2Ni45IDM5LjcgNTYuNCkgc2NhbGUoMjcuMTY5MTUgOTEuNDA4MTgpIi8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgzNS4yMDc4NCA2MS4yMjgzIC0yNC4wNTE0MyAxMy44MzAxOSAxNjEuMSAxOTMuMykiLz48ZWxsaXBzZSBjeD0iMzciIGN5PSIxOTMiIHJ4PSI1NyIgcnk9IjExNyIvPjxlbGxpcHNlIGN4PSIxNzEiIGN5PSI4MSIgcng9IjYyIiByeT0iNjIiLz48ZWxsaXBzZSBjeD0iNSIgY3k9IjQ2IiByeD0iNTciIHJ5PSI1NyIvPjxlbGxpcHNlIGZpbGw9IiNiYWJhYmEiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTMxLjA1MTM1IC4zNTMyNSAtLjYzMzQ2IC01NS42ODIxIDg0LjUgNzAuOCkiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDE4Ljk2ODUzIDkuMjQyMjMgLTI4LjE4ODgyIDU3Ljg1NDA1IDEwNi4yIDIyMy4xKSIvPjxlbGxpcHNlIGN4PSIxNDIiIGN5PSIyMSIgcng9IjQwIiByeT0iNDAiLz48L2c+PC9zdmc+');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	#portrait {
		display: block;
		height: 400px;
		width: 285.5px;
	}

	#text-container {
		width: 50%;
		margin-left: 8rem;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
	}
</style>
