import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Croche from './components/pages/Croche'
import ArteSacra from './components/pages/ArteSacra'


import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
  
        <Container customClass="min_height">
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/croche">
            <Croche/>
          </Route>

          <Route path="/artesacra">
            <ArteSacra/>
          </Route>


          <Route path="/contact">
            <Contact />
          </Route>

        </Container>
      </Switch>


      <Footer />
    </Router>
  );
}

export default App;
