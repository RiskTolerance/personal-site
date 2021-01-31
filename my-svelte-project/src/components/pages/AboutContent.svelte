<div id="wrapper">
	<div id="content">
		<img
			id="portrait"
			src="/images/portrait.webp"
			alt="Portrait of Isaac Druin"
		/>
		<p>
			Hello! <br />
			<br />
			My name is Isaac and I hail from the frozen wasteland of South
			Dakota. I'm a graphic designer interested in web development,
			tradtional media, 3D modeling, and photography.
			<br />
			<br />
			My undergraduate degree is in graphic design with a minor in art
			history. In 2020 (before all the covid nonsense came into play) I
			spent three months at Ironhack, a web development bootcamp in Miami.
			<br />
			<br />
			Some other hobbies of mine include gaming and spending time outdoors
			(camping, snowboarding).
		</p>
	</div>
</div>

<style>
	#wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		margin-top: 4rem;
		margin-bottom: 4rem;
		justify-content: center;
	}

	#content {
		display: flex;
		flex-direction: row;
		width: 80%;
		height: 100%;
		padding-bottom: 4rem;
		justify-content: space-around;
	}

	#portrait {
		display: block;
		height: 400px;
		margin-right: 60px;
	}

	p {
		width: 50%;
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		font-size: 2rem;
	}
</style>
