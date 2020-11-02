import React from 'react'
import Home from './pages/home.component'
import Header from './components/header'
import Brollop from './pages/brollop.component'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/footer.component'
import Begravning from './pages/begravning.component'
import Buketter from './pages/buketter.component'
import Kontakt from './pages/kontakt.component'
import HomeContextProvider from './store/home-context.component'

// let goingUp = useRef(null)
// let GoingDown2 = useRef(null)

const App = () => (

	<div>
		<Header />
		<Route path={'/'} exact>
			<HomeContextProvider>
				<Home />
			</HomeContextProvider>
		</Route>
		<Route path={'/brollop'}>
			<Brollop />
		</Route>
		<Route path={'/begravning'}>
			<Begravning />
		</Route>
		<Route path={'/buketter'}>
			<Buketter />
		</Route>
		<Route path={'/kontakt'}>
			<Kontakt />
		</Route>
		<Footer />
	</div>
)
export default App
