import './App.css';
import HomeButton from '../src/components/homepage/homepage';
import { Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar'
import Gride from '../src/components/Gride/Gride'
import Detail from '../src/components/Detail/Detail'
import Post from '../src/components/Post/Post'
import Deco from '../src/components/decoration/Decoration'

function App() {
  return (
    <div className="App">
      <div>
      <Route path='/home'
      component={Navbar}/>
      <Route path='/detail'
      component={Navbar}/>
      <Route exact path='/'
      component={HomeButton}/>
      <Route exact path='/home'
      component={Deco}/>
      <Route exact path='/home'
      component={Gride}/>
      <Route exact path='/home/create'
      component={Post}/>
      <Route exact path='/detail'
      component={Detail}/>
      </div>
    </div>
  );
}

export default App;
