import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import GitSearch from './routes/GitSearch'
import NotFoundBody from './routes/GitSearch/NotFoundBody'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path='/gitsearch' element={<GitSearch />}>
            <Route path="not-found" element={<NotFoundBody />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
