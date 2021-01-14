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
	<a href="https://github.com/RiskTolerance" target="_blank">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
			<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
				<g transform="translate(-264 -939)">
					<g transform="translate(264 939)">
						<path
							fill={secondaryColor}
							d="M8 72h56a8 8 0 008-8V8a8 8 0 00-8-8H8a8 8 0 00-8 8v56a8 8 0 008 8z"
						/>
						<path
							fill={primaryColor}
							d="M35.998 13C22.746 13 12 23.787 12 37.097c0 10.644 6.876 19.675 16.415 22.861 1.2.222 1.637-.522 1.637-1.16 0-.573-.02-2.088-.032-4.098-6.677 1.456-8.085-3.23-8.085-3.23-1.091-2.784-2.665-3.525-2.665-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.674 2.483 3.674 2.483 2.143 3.683 5.618 2.62 6.986 2.002.218-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.234-6.377 0 0 2.017-.647 6.6 2.47 1.916-.534 3.968-.801 6.01-.811 2.038.01 4.091.277 6.008.811 4.582-3.117 6.593-2.47 6.593-2.47 1.31 3.318.486 5.767.239 6.377 1.538 1.685 2.467 3.835 2.467 6.466 0 9.256-5.611 11.293-10.957 11.89.86.744 1.629 2.213 1.629 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.431 1.394 1.65 1.157C53.13 56.763 60 47.738 60 37.097 60 23.787 49.254 13 35.998 13"
						/>
					</g>
				</g>
			</g>
		</svg>
	</a>
</div>

<style>
	#btn {
		scale: 0.8;
		margin-left: 20px;
		cursor: pointer;
	}
</style>
