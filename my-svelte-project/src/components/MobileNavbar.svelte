<script>
</script>

<div id="wrapper">
	<div id="menu-background">
		<img src="./images/backgrounds/0.webp" alt="" />
		<div id="menu-items">
			<h1>About</h1>
			<h1>Work</h1>
			<h1>Blog</h1>
			<h1>Contact</h1>
		</div>
	</div>
</div>

<style>
    *{
        margin: 0;
        padding: 0;
    }

	h1 {
        font-family: essonnes-headline, serif;
        font-size: 6rem;
        color: black;
    }

    h1:hover {
        color: orange;
        cursor: default;
    }
    
    img {
		display: block;
		position: relative;
		top: 0;
		left: -50%;
		min-width: 150vw;
		overflow: hidden;
		mix-blend-mode: difference;
	}
	#wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		clip-path: inset(0px 0px 0px 0px);
	}

	#menu-background {
		
        position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 90vh;
		background-color: white;
	}

    #menu-items {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
</style>
