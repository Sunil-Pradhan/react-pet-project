import React from 'react'

const Home = () => {
	return (
		<>
			<div class="mb-100 text-center">
				<img
					src="images/home-img.png"
					className="d-inline-block align-top home-feature-img"
					alt=" "
				/>

				<h1 class="display-5 fw-bold">Hello People</h1>
				<div class="col-lg-6 mx-auto">
					<p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
					<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button type="button" class="btn btn-primary btn-lg px-4 gap-3">Getting Started</button>
						<button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
					</div>

				</div>
			</div>
		</>
	)
}

export default Home
