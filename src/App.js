import React from "react"
import Home from './pages/home.component'
import Header from './components/header'
import Brollop from './pages/brollop.component'
import { Route, Switch } from 'react-router-dom'
import Footer from "./components/footer.component"

// let goingUp = useRef(null)
// let GoingDown2 = useRef(null)

const App = () => (
    <div>
      <Header />
        <Route path={'/'} exact >
          <Home />
        </Route>
        <Route path={'/brollop'}>
          <Brollop />
        </Route>
      <Footer />
    </div>
)
export default App
