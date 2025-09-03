import styles from './App.module.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './components/layout/NavBar';

import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className={styles.App}>
      
      <Router>

        <NavBar />
        <Routes>

          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/info' element={<Info />}></Route>
        </Routes>

        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
