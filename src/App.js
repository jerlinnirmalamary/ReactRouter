import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import User from './componets/User';
import OldBooks from './componets/OldBooks';
import NewBooks from './componets/NewBooks';
import Login from './componets/Login';
import Dashbord from './componets/Dashbord';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className='ull'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/User/1'>User 1</Link></li>
          <li><Link to='/User/2'>User 2</Link></li>
          <li><Link to='/books/old_books'>OldBooks</Link></li>
          <li><Link to='/books/new_books'>NewBooks</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/User/:id' element={<User/>}/>
            <Route path='/books'>
                <Route path='old_books' element={<OldBooks/>}/>
                <Route path='new_books' element={<NewBooks/>}/>
            </Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='/dashbord' element={<Dashbord/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );    
}
export default App;




