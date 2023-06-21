import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar, Home, Create, BlogDetails, SignupPage} from './components'
 import Landing from './components/Landing.js';
//import image from './assets/download (3).jpeg';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
        <Route exact path="/">
            <div className='Landing'><Landing /></div>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/log">
            <SignupPage />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;
