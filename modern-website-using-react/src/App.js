import './App.css';

function App() {
	return (
		<div className="container">
			<nav>
				<img src='images/logo.png' className='logo' alt='logo' />
				<ul>
					<li><a href='https://hello-sunil.in/'>Traval Guide</a></li>
					<li><a href='https://hello-sunil.in/'>Famous Places</a></li>
					<li><a href='https://hello-sunil.in/'>Contact Us</a></li>
				</ul>
				<button className='btn'>
					<img src='images/icon.png' alt='icon' />
					Bookings
				</button>
			</nav>

			<div className='content'>
				<h1>Beautiful <br />
					Places to explore
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi atque eum aut et quod aperiam fuga? Neque vitae eligendi, cumque cum mollitia illum, pariatur dolorem laborum quos animi alias.
				</p>

				<form>
					<input type='text' placeholder='Country Name' />
					<button type='submit' className='btn'>Search</button>
				</form>
			</div>
		</div>
	);
}

export default App;
