import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import Navbar from "./components/Navbar"
import Filter from "./components/calendar"
import Home from "./components/home"
import 'antd/dist/antd.css'
import "./styles/_base.scss"

function App() {
   return (
      <div>
         <GlobalProvider>
            <Router>
               <Navbar />

               <Switch>
                  <Route path="/calendar">
                     <Filter />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </Router>
         </GlobalProvider>
      </div>
   )
}

export default App
