
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Rootlayout from './components/layouts/Rootlayout'
import About from './components/pages/About'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import Journal from './components/pages/Journal'
import CategoryOne from './components/pages/CategoryOne'
import CategoryTwo from './components/pages/CategoryTwo'
import CategoryThree from './components/pages/CategoryThree'
import CategoryFour from './components/pages/CategoryFour'
import CategoryFive from './components/pages/CategoryFive'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='Journal' element={<Journal/>}/>
          <Route path='categoryone' element={<CategoryOne/>}/>
          <Route path='categorytwo' element={<CategoryTwo/>}/>
          <Route path='categorythree' element={<CategoryThree/>}/>
          <Route path='categoryfour' element={<CategoryFour/>}/>
          <Route path='categoryfive' element={<CategoryFive/>}/>
        </Route>
      </Routes>


    </>
  )
}

export default App
