import React from 'react'
import Home from './pages/home.component'
import Header from './components/header/header'
import Brollop from './pages/brollop.component'
import { Route } from 'react-router-dom'
import Footer from './components/footer/footer.component'
import Begravning from './pages/begravning.component'
import Buketter from './pages/buketter.component'
import Kontakt from './pages/kontakt.component'
import HomeContextProvider from './store/home-context.component'
import ScrollToTop from './components/Misc/scroll-to-top.component'
import BegravningContextProvider from './store/begravning.context'
import KontaktContextProvider from './store/kontakt.context'
import BuketterContextProvider from './store/buketter.context'
import BrollopContextProvider from './store/brollop.context'
// let goingUp = useRef(null)
// let GoingDown2 = useRef(null)

const App = () => (
	<div>
		<ScrollToTop />
		<Header />
		<Route path={'/'} exact>
			<HomeContextProvider>
				<Home />
			</HomeContextProvider>
		</Route>

		<Route path={'/brollop'}>
			<BrollopContextProvider>
				<Brollop />
			</BrollopContextProvider>	
		</Route>
		<Route path={'/begravning'}>
			<BegravningContextProvider>
				<Begravning />
			</BegravningContextProvider>
		</Route>
		<Route path={'/buketter'}>
			<BuketterContextProvider>
				<Buketter />
			</BuketterContextProvider>
		</Route>
		<Route path={'/kontakt'}>
			<KontaktContextProvider>
				<Kontakt />
			</KontaktContextProvider>
		</Route>
		<Footer />
	</div>
)
export default App
