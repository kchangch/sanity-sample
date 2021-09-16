import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work"
import SingleWork from "./components/SingleWork";
import NavBar from "./components/NavBar";

function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SingleWork} path='/work/:slug'/>
        <Route component={Work} path='/work'/>
        <Route component={Project} path='/project'/>
        {/* <Route component={Contact} path='/contact'/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
