/*import PropsExample from './PropsExample'
import FuncPropExample from './FuncPropExample'
import StateExample from './StateExample'
import Events from './Events'*/
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
/*import ClassComponent from './ClassComponent'
import ClassComponent2 from './ClassComponent2'
function Demo(){
  return(
    <section>
        <p>Good morning</p>
        <h1>This is h1 tag</h1>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt=""/>
        <ClassComponent/>
        <ClassComponent2/>
    </section>    
  )
}
export default Demo;*/
function Demo(){
  return(
      <div>
        <BrowserRouter>
        <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
        </BrowserRouter>
          {/*<<Events/>
          <h1>This is props example</h1>
          <PropsExample name="ramya" age="20"/>
          <PropsExample framework="AngularJS" year="2008"/>
          <PropsExample framework="ReactJS" year="2013"/>
          <PropsExample framework="AngularJS" year="2016"/>
          <FuncPropExample framework="react" number="2"/>
          <FuncPropExample framework="react1" number="23"/>
          <FuncPropExample framework="react2" number="2"/>
          <FuncPropExample framework="react3" number="4"/>
          <StateExample/>*/}   
      </div>
    )
}
export default Demo
