<script>
	let primaryColor = '#F4FFF4';
	let secondaryColor = '#272727';
	let handleMouseOver = () => {
		secondaryColor = '#e3a73e';
	};
	let handleMouseOut = () => {
		secondaryColor = '#272727';
	};
</script>

<div id="btn" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
	<a href="https://www.linkedin.com/in/isaac-druin/" target="_blank">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
			<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
				<g transform="translate(-376 -267)">
					<g transform="translate(376 267)">
						<path
							fill={secondaryColor}
							d="M8 72h56a8 8 0 008-8V8a8 8 0 00-8-8H8a8 8 0 00-8 8v56a8 8 0 008 8z"
						/>
						<path
							fill={primaryColor}
							d="M62 62H51.316V43.802c0-4.99-1.896-7.777-5.845-7.777-4.296 0-6.54 2.901-6.54 7.777V62H28.632V27.333H38.93v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777V62zM16.35 22.794c-3.508 0-6.35-2.864-6.35-6.397C10 12.864 12.842 10 16.35 10c3.507 0 6.347 2.864 6.347 6.397 0 3.533-2.84 6.397-6.348 6.397zM11.032 62h10.736V27.333H11.033V62z"
						/>
					</g>
				</g>
			</g>
		</svg>
	</a>
</div>

<style>
	#btn {
		width: 50px;
		height: 50px;
		margin-left: 20px;
		cursor: pointer;
	}
</style>
